// Middleware kiểm tra đã đăng nhập
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  return res.redirect('/pages/login.html');
}

// Middleware kiểm tra là admin
function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  return res.status(403).send('<h2>403 - Bạn không có quyền truy cập trang này</h2><a href="/pages/login.html">Đăng nhập lại</a>');
}

module.exports = { isAuthenticated, isAdmin };