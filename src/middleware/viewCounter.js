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
        // 1. Cập nhật bảng page_views
        await db.execute(
            `INSERT INTO page_views (page_url, view_date, view_count) 
             VALUES ('/', ?, 1) 
             ON DUPLICATE KEY UPDATE view_count = view_count + 1`,
            [today]
        );
        
        // 2. Ghi log chi tiết
        if (userId) {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_id, user_id, visited_at) 
                 VALUES ('/', ?, ?, NOW())`,
                [visitorId, userId]
            );
        } else {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_id, visited_at) 
                 VALUES ('/', ?, NOW())`,
                [visitorId]
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

// Hàm lấy tổng số lượt xem homepage
async function getHomepageViews() {
    try {
        const [rows] = await db.execute(
            `SELECT SUM(view_count) as total FROM page_views WHERE page_url = '/'`
        );
        return rows[0].total || 0;
    } catch (err) {
        console.error('Lỗi lấy lượt xem homepage:', err);
        return 0;
    }
}

// Hàm lấy số lượt xem theo ngày
async function getViewsByDate() {
    try {
        const [rows] = await db.execute(
            `SELECT view_date, SUM(view_count) as total 
             FROM page_views 
             WHERE page_url NOT LIKE '/admin%'
             GROUP BY view_date 
             ORDER BY view_date DESC 
             LIMIT 30`
        );
        return rows;
    } catch (err) {
        console.error('Lỗi lấy thống kê theo ngày:', err);
        return [];
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

// Hàm lấy lượt xem theo từng trang
async function getViewsByPage() {
    try {
        const [rows] = await db.execute(
            `SELECT page_url, SUM(view_count) as total_views 
             FROM page_views 
             WHERE page_url NOT LIKE '/admin%'
             GROUP BY page_url 
             ORDER BY total_views DESC`
        );
        return rows;
    } catch (err) {
        console.error('Lỗi lấy thống kê theo trang:', err);
        return [];
    }
}

module.exports = { 
    trackHomepageView, 
    recordHomepageView,
    getHomepageViews,
    getViewsByDate,
    getTotalViews, 
    getViewsByPage 
};