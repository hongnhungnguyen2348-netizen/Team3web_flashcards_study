const db = require('../config/database');

// Kiểm tra collection có thuộc về user hiện tại không, trả về collection hoặc null
async function findOwnedCollection(collectionId, userId) {
  const [rows] = await db.execute(
    'SELECT * FROM flashcard_collections WHERE id = ? AND user_id = ?',
    [collectionId, userId]
  );
  return rows[0] || null;
}

// GET /api/flashcards — Lấy tất cả bộ flashcard của user hiện tại (kèm cards)
exports.getCollections = async (req, res) => {
  try {
    const userId = req.session.user.id;

    const [collections] = await db.execute(
      'SELECT * FROM flashcard_collections WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    const [cards] = await db.execute(
      `SELECT fc.* FROM flashcard_cards fc
       JOIN flashcard_collections col ON col.id = fc.collection_id
       WHERE col.user_id = ?`,
      [userId]
    );

    const result = collections.map((collection) => ({
      ...collection,
      cards: cards.filter((card) => card.collection_id === collection.id)
    }));

    res.json({ success: true, collections: result });
  } catch (err) {
    console.error('getCollections error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET /api/flashcards/:id — Lấy 1 bộ flashcard (kèm cards)
exports.getCollectionById = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const collection = await findOwnedCollection(req.params.id, userId);

    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    const [cards] = await db.execute(
      'SELECT * FROM flashcard_cards WHERE collection_id = ?',
      [collection.id]
    );

    res.json({ success: true, collection: { ...collection, cards } });
  } catch (err) {
    console.error('getCollectionById error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// POST /api/flashcards — Tạo bộ flashcard mới
exports.createCollection = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { name, status } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Thiếu tên bộ flashcard' });
    }

    const [result] = await db.execute(
      'INSERT INTO flashcard_collections (user_id, name, status) VALUES (?, ?, ?)',
      [userId, name.trim(), status || 'Đang học']
    );

    const [rows] = await db.execute(
      'SELECT * FROM flashcard_collections WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({ success: true, collection: { ...rows[0], cards: [] } });
  } catch (err) {
    console.error('createCollection error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// PUT /api/flashcards/:id — Cập nhật bộ flashcard (tên, trạng thái)
exports.updateCollection = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { name, status } = req.body;

    const collection = await findOwnedCollection(req.params.id, userId);
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    await db.execute(
      'UPDATE flashcard_collections SET name = ?, status = ? WHERE id = ?',
      [name?.trim() || collection.name, status || collection.status, collection.id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('updateCollection error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// DELETE /api/flashcards/:id — Xóa bộ flashcard
exports.deleteCollection = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const collection = await findOwnedCollection(req.params.id, userId);

    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    await db.execute('DELETE FROM flashcard_collections WHERE id = ?', [collection.id]);

    res.json({ success: true });
  } catch (err) {
    console.error('deleteCollection error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// POST /api/flashcards/:id/cards — Thêm flashcard vào bộ
exports.addCard = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { term, definition } = req.body;

    if (!term || !definition) {
      return res.status(400).json({ success: false, error: 'Thiếu thuật ngữ hoặc định nghĩa' });
    }

    const collection = await findOwnedCollection(req.params.id, userId);
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    const [result] = await db.execute(
      'INSERT INTO flashcard_cards (collection_id, term, definition) VALUES (?, ?, ?)',
      [collection.id, term.trim(), definition.trim()]
    );

    const [rows] = await db.execute('SELECT * FROM flashcard_cards WHERE id = ?', [result.insertId]);

    res.status(201).json({ success: true, card: rows[0] });
  } catch (err) {
    console.error('addCard error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// PUT /api/flashcards/:id/cards/:cardId — Sửa flashcard
exports.updateCard = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { term, definition } = req.body;

    const collection = await findOwnedCollection(req.params.id, userId);
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    const [rows] = await db.execute(
      'SELECT * FROM flashcard_cards WHERE id = ? AND collection_id = ?',
      [req.params.cardId, collection.id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy flashcard' });
    }

    await db.execute(
      'UPDATE flashcard_cards SET term = ?, definition = ? WHERE id = ?',
      [term?.trim() || rows[0].term, definition?.trim() || rows[0].definition, req.params.cardId]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('updateCard error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// DELETE /api/flashcards/:id/cards/:cardId — Xóa flashcard
exports.deleteCard = async (req, res) => {
  try {
    const userId = req.session.user.id;

    const collection = await findOwnedCollection(req.params.id, userId);
    if (!collection) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy bộ flashcard' });
    }

    await db.execute(
      'DELETE FROM flashcard_cards WHERE id = ? AND collection_id = ?',
      [req.params.cardId, collection.id]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('deleteCard error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};
