// Middleware đơn giản (member khác sẽ xử lý login riêng)
function isAuthenticated(req, res, next) {
  return next();
}

function isAdmin(req, res, next) {
  return next();
}

module.exports = { isAuthenticated, isAdmin };