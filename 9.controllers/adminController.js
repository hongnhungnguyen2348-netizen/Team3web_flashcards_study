// === DÙNG DỮ LIỆU GIẢ, KHÔNG CẦN DATABASE ===

// Danh sách flashcard giả (để test edit)
let fakeFlashcards = [
  { id: 1, title: 'Động từ bất quy tắc - Go', body: 'Go - Went - Gone', type: 'flashcard' },
  { id: 2, title: 'Từ vựng gia đình', body: 'Father, Mother, Brother, Sister', type: 'flashcard' },
  { id: 3, title: 'Thời tiết', body: 'Sunny, Rainy, Cloudy, Windy', type: 'flashcard' }
];

// Trang admin dashboard
exports.getAdminDashboard = (req, res) => {
  const fakeData = {
    totalViews: 1234,
    totalComments: 56,
    totalFlashcards: fakeFlashcards.length,
    comments: [
      { id: 1, username: 'user1', content: 'Flashcard rất hay!', rating: 5, createdAt: new Date() },
      { id: 2, username: 'user2', content: 'Cần thêm ví dụ', rating: 4, createdAt: new Date() }
    ]
  };
  
  res.render('admin/index', {
    totalViews: fakeData.totalViews,
    totalComments: fakeData.totalComments,
    totalFlashcards: fakeData.totalFlashcards,
    comments: fakeData.comments
  });
};

// Xóa comment (giả)
exports.deleteComment = (req, res) => {
  res.json({ success: true, message: 'Đã xóa (demo)' });
};

// === LẤY NỘI DUNG FLASHCARD ĐỂ SỬA ===
exports.getEditContent = (req, res) => {
  const flashcardId = parseInt(req.params.id);
  const flashcard = fakeFlashcards.find(f => f.id === flashcardId);
  
  if (!flashcard) {
    return res.send('<h3>Không tìm thấy flashcard</h3><a href="/admin">Quay lại</a>');
  }
  
  res.render('admin/edit', { content: flashcard });
};

// === CẬP NHẬT FLASHCARD ===
exports.updateContent = (req, res) => {
  const flashcardId = parseInt(req.params.id);
  const { title, body } = req.body;
  
  const index = fakeFlashcards.findIndex(f => f.id === flashcardId);
  
  if (index === -1) {
    return res.json({ success: false, error: 'Không tìm thấy flashcard' });
  }
  
  // Cập nhật dữ liệu
  fakeFlashcards[index] = { ...fakeFlashcards[index], title, body };
  
  console.log('✅ Đã cập nhật flashcard ID:', flashcardId);
  console.log('📝 Dữ liệu mới:', { title, body });
  
  res.json({ success: true, message: 'Cập nhật thành công!' });
};

// (Tuỳ chọn) Xem danh sách flashcard để test
exports.getFlashcardList = (req, res) => {
  res.json(fakeFlashcards);
};