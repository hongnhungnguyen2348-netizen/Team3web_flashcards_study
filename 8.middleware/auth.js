// Kiểm tra đăng nhập
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/login');
}

// Kiểm tra admin
function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.status(403).send('Bạn không có quyền truy cập');
}

module.exports = { isAuthenticated, isAdmin };