const db = require('../config/database');

async function isAuthenticated(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect('/pages/login.html');
  }

  try {
    const [users] = await db.execute(
      `SELECT id FROM users WHERE id = ?`,
      [req.session.user.id]
    );

    if (users.length === 0) {
      req.session.destroy();
      return res.redirect('/pages/login.html');
    }

    next();
  } catch (err) {
    console.error('Loi kiem tra auth:', err);
    res.status(500).send('Loi server');
  }
}

async function isAdmin(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect('/pages/login.html');
  }

  try {
    const [users] = await db.execute(
      `SELECT id, role FROM users WHERE id = ?`,
      [req.session.user.id]
    );

    if (users.length === 0) {
      req.session.destroy();
      return res.redirect('/pages/login.html');
    }

    const user = users[0];

    if (user.role !== 'admin') {
      return res.status(403).send('<h2>403 - Ban khong co quyen truy cap trang nay</h2><a href="/pages/login.html">Dang nhap lai</a>');
    }

    next();
  } catch (err) {
    console.error('Loi kiem tra admin:', err);
    res.status(500).send('Loi server');
  }
}

module.exports = { isAuthenticated, isAdmin };
