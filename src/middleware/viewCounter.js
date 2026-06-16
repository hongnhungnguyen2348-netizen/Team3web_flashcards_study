const db = require('../config/database');

// Middleware đếm lượt xem
async function trackHomepageView(req, res, next) {
    const url = req.originalUrl || req.url;
    
    const shouldTrack = (
        url === '/' || 
        url === '/index.html' ||
        url === '/pages/library1.html'
    );
    
    if (shouldTrack) {
        try {
            const today = new Date().toISOString().split('T')[0];
            
            await db.execute(
                `INSERT INTO page_views (page_url, view_date, view_count) 
                 VALUES (?, ?, 1) 
                 ON DUPLICATE KEY UPDATE view_count = view_count + 1`,
                [url, today]
            );
            
            console.log(`✅ Đã đếm lượt xem: ${url} - Ngày: ${today}`);
        } catch (err) {
            console.error('❌ Lỗi đếm lượt xem:', err.message);
        }
    }
    next();
}

// API để client báo đã xem đủ 2 phút
async function recordHomepageView(req, res) {
    try {
        const today = new Date().toISOString().split('T')[0];
        
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
        console.error('Lỗi lấy lượt xem homepage:', err);
        return 0;
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

// KIỂM TRA: In ra để debug
console.log('✅ viewCounter.js đã load, các hàm:', {
    trackHomepageView: typeof trackHomepageView,
    recordHomepageView: typeof recordHomepageView,
    getHomepageViews: typeof getHomepageViews,
    getTotalViews: typeof getTotalViews,
    getViewsByPage: typeof getViewsByPage
});

module.exports = { 
    trackHomepageView, 
    recordHomepageView,
    getHomepageViews,
    getTotalViews, 
    getViewsByPage 
};