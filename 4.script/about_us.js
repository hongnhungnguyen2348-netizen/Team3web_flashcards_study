/**
 * About Us JavaScript
 * Xử lý hiệu ứng tương tác và cuộn mượt
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    // 1. Hiển thị thông báo khi nhấn nút Contact
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            console.log('Chuyển hướng người dùng đến trang chi tiết...');
        });
    }

    // 2. Hiệu ứng cuộn mượt (Smooth Scroll)
    // Giả sử nút 'Learn More' sẽ cuộn xuống phần nội dung chi tiết (nếu có)
    // Ở đây chúng ta sẽ giả lập hiệu ứng cuộn mượt khi nhấn vào các nút
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            console.log('Chuyển hướng người dùng đến trang chi tiết...');
            // Bạn có thể thay đổi location.href hoặc dùng scrollIntoView
            // window.scrollTo({
            //     top: document.body.scrollHeight,
            //     behavior: 'smooth'
            // });
        });
    }

    // Thêm hiệu ứng xuất hiện dần (Fade-in) cho nội dung khi trang load
    const aboutContent = document.querySelector('.about');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            aboutContent.style.opacity = '1';
        }, 200);
    }
});
