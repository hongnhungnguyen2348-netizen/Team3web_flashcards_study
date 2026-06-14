const db = require('../config/database');

// Middleware đếm lượt xem homepage
async function trackHomepageView(req, res, next) {
    // KHÔNG CẦN ĐẾM Ở ĐÂY NỮA, chuyển sang API riêng

    next();
}

// API để client báo đã xem đủ 2 phút
async function recordHomepageView(req, res) {
    try {
        const today = new Date().toISOString().split('T')[0];
        
        // Cập nhật bảng page_views
        await db.execute(
            `INSERT INTO page_views (page_url, view_date, view_count) 
             VALUES ('/', ?, 1) 
             ON DUPLICATE KEY UPDATE view_count = view_count + 1`,
            [today]
        );
        
        console.log(`✅ Đã ghi nhận lượt xem homepage (sau 2 phút) - Ngày: ${today}`);
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
        console.error('Lỗi lấy lượt xem:', err);
        return 0;
    }
}

module.exports = { trackHomepageView, recordHomepageView, getHomepageViews };