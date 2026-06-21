const db = require('../config/database');
const bcrypt = require('bcrypt');

// Lấy danh sách tất cả users (trừ admin)
exports.getUserList = async (req, res) => {
    try {
        const [users] = await db.execute(
            `SELECT id, username, email, role, 
             created_at 
             FROM users 
             WHERE role != 'admin'
             ORDER BY created_at DESC`
        );
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Khóa/Mở khóa user
exports.toggleLockUser = async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Lấy trạng thái hiện tại
        
        if (user.length === 0) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy user' });
        }
        
        const statusText = newLockStatus ? 'khóa' : 'mở khóa';
        

        
        res.json({ 
            success: true, 
            message: `Đã ${statusText} tài khoản thành công`
        });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
};

// Xóa user (kèm theo flashcard của user đó nếu có)
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Kiểm tra user có tồn tại và không phải admin
        const [user] = await db.execute(
            `SELECT id, role FROM users WHERE id = ?`,
            [userId]
        );
        
        if (user.length === 0) {
            return res.status(404).json({ success: false, message: 'Không tìm thấy user' });
        }
        
        if (user[0].role === 'admin') {
            return res.status(403).json({ success: false, message: 'Không thể xóa tài khoản admin' });
        }
        
        // Xóa user (cascade sẽ xóa flashcard nếu có foreign key)
        await db.execute(`DELETE FROM users WHERE id = ?`, [userId]);
        
        res.json({ success: true, message: 'Đã xóa tài khoản thành công' });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
};

// Reset password user
exports.resetUserPassword = async (req, res) => {
    try {
        const userId = req.params.id;
        const defaultPassword = '123456';
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);
        
        await db.execute(
            `UPDATE users SET password = ? WHERE id = ? AND role != 'admin'`,
            [hashedPassword, userId]
        );
        
        res.json({ 
            success: true, 
            message: `Đã reset mật khẩu thành công. Mật khẩu mới: ${defaultPassword}` 
        });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
};