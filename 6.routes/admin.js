const express = require('express');
const router = express.Router();
const adminController = require('../9.controllers/adminController');

// Bỏ qua middleware kiểm tra (member khác lo login)
function isAdmin(req, res, next) {
  return next();
}

// Trang admin chính
router.get('/', isAdmin, adminController.getAdminDashboard);

// Xóa comment
router.delete('/comment/:id', adminController.deleteComment);

// Sửa nội dung
router.get('/edit/:id', adminController.getEditContent);
router.put('/edit/:id', adminController.updateContent);

// Danh sách flashcard cần sửa (dùng dữ liệu giả)
router.get('/edit-list', (req, res) => {
  // Dữ liệu flashcard giả (giống trong adminController)
  const fakeFlashcards = [
    { id: 1, title: 'Động từ bất quy tắc - Go', body: 'Go - Went - Gone', type: 'flashcard' },
    { id: 2, title: 'Từ vựng gia đình', body: 'Father, Mother, Brother, Sister', type: 'flashcard' },
    { id: 3, title: 'Thời tiết', body: 'Sunny, Rainy, Cloudy, Windy', type: 'flashcard' }
  ];
  
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
          <thead>
            <tr><th>ID</th><th>Tiêu đề</th><th>Loại</th><th>Hành động</th></tr>
          </thead>
          <tbody>
            ${fakeFlashcards.map(f => `
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
});

module.exports = router;