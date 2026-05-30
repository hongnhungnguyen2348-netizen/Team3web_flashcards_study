// TẠM THỜI: Dùng dữ liệu giả, không cần database
exports.getAdminDashboard = async (req, res) => {
  // Dữ liệu giả để test giao diện
  const fakeData = {
    totalViews: 1234,
    totalComments: 56,
    totalFlashcards: 89,
    comments: [
      { _id: 1, username: 'user1', content: 'Flashcard rất hay!', rating: 5, createdAt: new Date() },
      { _id: 2, username: 'user2', content: 'Cần thêm ví dụ', rating: 4, createdAt: new Date() }
    ]
  };
  
  res.render('admin/index', {
    totalViews: fakeData.totalViews,
    totalComments: fakeData.totalComments,
    totalFlashcards: fakeData.totalFlashcards,
    comments: fakeData.comments,
    user: req.session.user
  });
};

exports.deleteComment = async (req, res) => {
  res.json({ success: true, message: 'Đã xóa (demo)' });
};

exports.getEditContent = async (req, res) => {
  res.render('admin/edit', { 
    content: { _id: req.params.id, title: 'Flashcard mẫu', body: 'Nội dung mẫu' },
    user: req.session.user 
  });
};

exports.updateContent = async (req, res) => {
  res.json({ success: true, message: 'Đã cập nhật (demo)' });
};