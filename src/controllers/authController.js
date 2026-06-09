// 9.controllers/authController.js
const pool = require('../config/db.js');
const bcrypt = require('bcrypt');
// POST /api/auth/signup
async function signup(req, res) {
    try {
        const { username, email, password, confirmPassword } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ ok: false, msg: 'Thiếu thông tin đăng ký' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ ok: false, msg: 'Mật khẩu nhập lại không khớp' });
        }

        // Kiểm tra trùng username hoặc email
        const [existing] = await pool.query(
            'SELECT id FROM users WHERE username = ? OR email = ?',
            [username, email]
        );
        if (existing.length > 0) {
            return res.status(409).json({ ok: false, msg: 'Username hoặc email đã tồn tại' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        res.status(201).json({ ok: true, msg: 'Đăng ký thành công', userId: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, msg: 'Lỗi server' });
    }
}

// POST /api/auth/signin
async function signin(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ ok: false, msg: 'Thiếu username hoặc password' });
        }

        const [rows] = await pool.query(
            'SELECT id, username, email, password, role FROM users WHERE username = ?',
            [username]
        );
        if (rows.length === 0) {
            return res.status(401).json({ ok: false, msg: 'Tài khoản không tồn tại' });
        }

        const user = rows[0];

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ ok: false, msg: 'Sai mật khẩu' });
        }
        req.session.user = { id: user.id, username: user.username, role: user.role };

        res.json({
            ok: true,
            msg: 'Đăng nhập thành công',
            user: { id: user.id, username: user.username, email: user.email, role: user.role }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ ok: false, msg: 'Lỗi server' });
    }
}
function me(req, res) {
    if (req.session.user) {
        res.json({ ok: true, user: req.session.user });
    } else {
        res.json({ ok: false, msg: 'Chưa đăng nhập' });
    }
}
// POST /api/auth/signout — đăng xuất, hủy session
function signout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ ok: false, msg: 'Lỗi đăng xuất' });
        }
        res.json({ ok: true, msg: 'Đăng xuất thành công' });
    });
}
module.exports = { signup, signin, me, signout };