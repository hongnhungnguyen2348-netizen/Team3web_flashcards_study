const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

// Trang admin chính
router.get('/', isAdmin, adminController.getAdminDashboard);

// Xóa comment
router.delete('/comment/:id', isAdmin, adminController.deleteComment);

// Sửa nội dung
router.get('/edit/:id', isAdmin, adminController.getEditContent);
router.put('/edit/:id', isAdmin, adminController.updateContent);


// Danh sách flashcard để chọn sửa
router.get('/edit-list', async (req, res) => {
  try {
    const db = require('../config/database');
    const [flashcards] = await db.execute('SELECT * FROM contents ORDER BY createdAt DESC');
    
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Danh sách flashcard - Auto Quiz</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f0; padding: 2rem; }
          .container { max-width: 800px; margin: 0 auto; background: white; padding: 2rem; border-radius: 16px; border: 1px solid #eee; }
          h1 { margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f0f0f0; }
          .edit-btn { background: #1a1a1a; color: white; padding: 0.3rem 0.8rem; text-decoration: none; border-radius: 4px; font-size: 0.8rem; }
          .edit-btn:hover { background: #333; }
          .back { display: inline-block; margin-top: 1rem; color: #666; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>📝 Danh sách flashcard</h1>
          <table>
            <thead><tr><th>ID</th><th>Tiêu đề</th><th>Loại</th><th>Hành động</th></tr></thead>
            <tbody>
              ${flashcards.map(f => `
                <tr>
                  <td>${f.id}</td>
                  <td>${f.title}</td>
                  <td>${f.type}</td>
                  <td><a href="/admin/edit/${f.id}" class="edit-btn">✏️ Sửa</a></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <a href="/admin" class="back">← Quay lại trang admin</a>
        </div>
      </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send('Lỗi: ' + err.message);
  }
});

module.exports = router;