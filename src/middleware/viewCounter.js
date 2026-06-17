const db = require('../config/database');

// Middleware đếm lượt xem - KHÔNG đếm ở đây nữa, chỉ track thời gian
async function trackHomepageView(req, res, next) {
    // Middleware này chỉ để đánh dấu, không đếm gì cả
    // Việc đếm sẽ được thực hiện qua API sau 2 phút
    next();
}

// API để client báo đã xem đủ 2 phút
async function recordHomepageView(req, res) {
    try {
        const today = new Date().toISOString().split('T')[0];
        
        // Lấy IP của người dùng
        const visitorIp = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
        
        // Lấy thông tin user nếu đã đăng nhập
        let userId = null;
        if (req.session && req.session.user) {
            userId = req.session.user.id;
        }
        
        // Kiểm tra IP này đã xem trang chủ trong ngày chưa
        let query = `
            SELECT id FROM view_logs 
            WHERE page_url = '/' 
            AND visitor_ip = ? 
            AND DATE(visited_at) = ?
        `;
        let params = [visitorIp, today];
        
        // Nếu có user ID, kiểm tra thêm điều kiện user_id (để đếm theo user)
        if (userId) {
            query = `
                SELECT id FROM view_logs 
                WHERE page_url = '/' 
                AND visitor_ip = ? 
                AND DATE(visited_at) = ?
                AND (user_id = ? OR user_id IS NULL)
            `;
            params = [visitorIp, today, userId];
        }
        
        const [existing] = await db.execute(query, params);
        
        // Nếu đã xem trong ngày rồi → bỏ qua
        if (existing.length > 0) {
            console.log(`⏭️ Bỏ qua: IP ${visitorIp} đã xem trang chủ trong ngày hôm nay`);
            return res.json({ 
                success: true, 
                message: 'Đã đếm lượt xem trong ngày hôm nay rồi' 
            });
        }
        
        // Chưa xem → đếm
        // 1. Cập nhật bảng page_views (thống kê tổng theo ngày)
        await db.execute(
            `INSERT INTO page_views (page_url, view_date, view_count) 
             VALUES ('/', ?, 1) 
             ON DUPLICATE KEY UPDATE view_count = view_count + 1`,
            [today]
        );
        
        // 2. Ghi log chi tiết (lưu cả user_id nếu có)
        if (userId) {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_ip, user_id, visited_at) 
                 VALUES ('/', ?, ?, NOW())`,
                [visitorIp, userId]
            );
        } else {
            await db.execute(
                `INSERT INTO view_logs (page_url, visitor_ip, visited_at) 
                 VALUES ('/', ?, NOW())`,
                [visitorIp]
            );
        }
        
        console.log(`✅ Đã ghi nhận lượt xem homepage (sau 2 phút) - IP: ${visitorIp} - User: ${userId || 'chưa đăng nhập'} - Ngày: ${today}`);
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