const db = require('../config/database');

// Middleware đếm lượt xem - KHÔNG đếm ở đây, chỉ để check cookie
async function trackHomepageView(req, res, next) {
    // Middleware này chỉ để đánh dấu, không đếm gì cả
    // Việc đếm sẽ được thực hiện qua API sau 2 phút
    next();
}

// API để client báo đã xem đủ 2 phút
async function recordHomepageView(req, res) {
    try {
        const today = new Date().toISOString().split('T')[0];

        // Lấy cookie ID (nếu chưa có thì tạo mới)
        let visitorId = req.cookies.visitorId;
        if (!visitorId) {
            // Tạo ID ngẫu nhiên cho visitor
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        }

        // Kiểm tra cookie đã xem trong ngày chưa
        const cookieKey = `viewed_${today}`;
        if (req.cookies[cookieKey]) {
            console.log(`⏭️ Bỏ qua: Cookie ${cookieKey} đã tồn tại - User đã xem trong ngày hôm nay`);
            return res.json({
                success: true,
                message: 'Đã đếm lượt xem trong ngày hôm nay rồi'
            });
        }

        // Lấy thông tin user nếu đã đăng nhập
        let userId = null;
        if (req.session && req.session.user) {
            userId = req.session.user.id;
        }

        // Chưa xem → đếm
        // 1. Cập nhật bảng page_views (dùng UPSERT: INSERT OR REPLACE cho SQLite)
        // SQLite không hỗ trợ ON DUPLICATE KEY UPDATE, nên dùng INSERT OR REPLACE
        const [existingRows] = await db.execute(
            `SELECT id, view_count FROM page_views WHERE page_url = '/' AND view_date = ?`,
            [today]
        );

        if (existingRows.length > 0) {
            // Đã có record → tăng view_count
            await db.execute(
                `UPDATE page_views SET view_count = view_count + 1 WHERE id = ?`,
                [existingRows[0].id]
            );
        } else {
            // Chưa có → INSERT mới
            await db.execute(
                `INSERT INTO page_views (page_url, view_date, view_count) VALUES (?, ?, 1)`,
                ['/', today]
            );
        }

        // 2. Ghi log chi tiết (dùng datetime('now','localtime') thay cho NOW())
        if (userId) {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_id, user_id, visited_at)
                 VALUES (?, ?, ?, datetime('now', 'localtime'))`,
                ['/', visitorId, userId]
            );
        } else {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_id, visited_at)
                 VALUES (?, ?, datetime('now', 'localtime'))`,
                ['/', visitorId]
            );
        }

        // 3. Set cookie để không đếm lại trong ngày
        res.cookie(cookieKey, 'true', {
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        });

        // 4. Set cookie visitorId (nếu chưa có)
        if (!req.cookies.visitorId) {
            res.cookie('visitorId', visitorId, {
                maxAge: 365 * 24 * 60 * 60 * 1000, // 1 năm
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax'
            });
        }

        console.log(`✅ Đã ghi nhận lượt xem homepage (sau 2 phút) - Visitor: ${visitorId} - User: ${userId || 'chưa đăng nhập'} - Ngày: ${today}`);
        res.json({ success: true });
    } catch (err) {
        console.error('❌ Lỗi ghi nhận lượt xem:', err.message);
        res.json({ success: false, error: err.message });
    }
}


// Hàm lấy tổng số lượt xem (không tính admin)
async function getTotalViews() {
    try {
        const [rows] = await db.execute(
            `SELECT SUM(view_count) as total FROM page_views
             WHERE page_url NOT LIKE '/admin%'`
        );
        return rows[0].total || 0;
    } catch (err) {
        console.error('Lỗi lấy lượt xem:', err);
        return 0;
    }
}



module.exports = {
    trackHomepageView,
    recordHomepageView,
    getTotalViews,
};
