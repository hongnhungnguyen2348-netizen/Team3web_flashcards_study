const db = require('../config/database');

// Middleware kiểm tra đã đăng nhập
async function isAuthenticated(req, res, next) {
  // Kiểm tra session có user không
  if (!req.session || !req.session.user) {
    return res.redirect('/pages/login.html');
  }
  
  try {
    // Kiểm tra user có tồn tại và chưa bị khóa
    const [users] = await db.execute(
      `SELECT id, is_locked FROM users WHERE id = ?`,
      [req.session.user.id]
    );
    
    if (users.length === 0) {
      req.session.destroy();
      return res.redirect('/pages/login.html');
    }
    
    // Nếu tài khoản bị khóa
    if (users[0].is_locked === 1) {
      req.session.destroy(); // Xóa session
      return res.redirect('/pages/login.html?error=locked');
    }
    
    next();
  } catch (err) {
    console.error('Lỗi kiểm tra auth:', err);
    res.status(500).send('Lỗi server');
  }
}

// Middleware kiểm tra là admin
async function isAdmin(req, res, next) {
  // Kiểm tra session có user không
  if (!req.session || !req.session.user) {
    return res.redirect('/pages/login.html');
  }
  
  try {
    // Kiểm tra user có tồn tại, chưa bị khóa và là admin
    const [users] = await db.execute(
      `SELECT id, role, is_locked FROM users WHERE id = ?`,
      [req.session.user.id]
    );
    
    if (users.length === 0) {
      req.session.destroy();
      return res.redirect('/pages/login.html');
    }
    
    const user = users[0];
    
    // Nếu tài khoản bị khóa
    if (user.is_locked === 1) {
      req.session.destroy();
      return res.redirect('/pages/login.html?error=locked');
    }
    
    // Nếu không phải admin
    if (user.role !== 'admin') {
      return res.status(403).send('<h2>403 - Bạn không có quyền truy cập trang này</h2><a href="/pages/login.html">Đăng nhập lại</a>');
    }
    
    next();
  } catch (err) {
    console.error('Lỗi kiểm tra admin:', err);
    res.status(500).send('Lỗi server');
  }
}

module.exports = { isAuthenticated, isAdmin };