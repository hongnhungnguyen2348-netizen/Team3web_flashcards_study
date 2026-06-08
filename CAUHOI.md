# DANH SÁCH CÂU HỎI VẤN ĐÁP (VIVA) - DỰ ÁN FLASHSTUDY

Tài liệu này được biên soạn dành cho **FrontEnd Leader** của dự án FlashStudy. Nội dung tập trung vào thiết kế giao diện, cấu trúc HTML/CSS, và luồng tương tác hệ thống.

---

## PHẦN 1: HTML & CẤU TRÚC TRANG WEB (25 Câu)

### Mức độ: Dễ
1. **Câu hỏi:** Tại sao em lại sử dụng thẻ `<!DOCTYPE html>` ở đầu mỗi file?
   - **Gợi ý:** Để khai báo cho trình duyệt biết đây là tài liệu HTML5, giúp trình duyệt hiển thị trang web đúng chuẩn.
2. **Câu hỏi:** Thẻ `<meta charset="UTF-8">` có tác dụng gì trong dự án của em?
   - **Gợi ý:** Để trình duyệt hiểu và hiển thị được các ký tự tiếng Việt có dấu mà không bị lỗi font.
3. **Câu hỏi:** Em hãy phân biệt sự khác nhau giữa `id` và `class` thông qua code thực tế trong file `home.css`.
   - **Gợi ý:** `id` (như `#check`) là duy nhất cho 1 phần tử, dùng để định danh hoặc điều khiển logic. `class` (như `.start-btn`) có thể dùng cho nhiều phần tử có chung phong cách thiết kế.
4. **Câu hỏi:** Trong `index.html`, tại sao em lại đặt thẻ `<script>` ở cuối file thay vì trong thẻ `<head>`?
   - **Gợi ý:** Để đảm bảo toàn bộ HTML được tải xong trước khi thực thi JavaScript, tránh lỗi khi JS tác động vào các phần tử chưa tồn tại và giúp trang web cảm giác tải nhanh hơn.
5. **Câu hỏi:** Thẻ `<a>` trong trang chủ của em dùng thuộc tính gì để chuyển trang?
   - **Gợi ý:** Thuộc tính `href` (ví dụ: `href="2.page/login.html"`).
6. **Câu hỏi:** Em sử dụng những thẻ Semantic HTML nào để tăng tính trợ năng (accessibility) và SEO cho FlashStudy?
   - **Gợi ý:** Đã sử dụng `<header>`, `<nav>`, `<section>`, `<main>`, `<footer>` thay vì chỉ dùng thẻ `<div>`.
7. **Câu hỏi:** Tác dụng của thẻ `<img>` và thuộc tính `alt` trong logo trang web là gì?
   - **Gợi ý:** Hiển thị logo; `alt` mô tả nội dung ảnh nếu ảnh bị lỗi tải hoặc cho người khiếm thị dùng trình đọc màn hình.
8. **Câu hỏi:** Tại sao trong file `flashcard.html` em lại dùng thẻ `<span>` thay vì `<div>` cho nội dung card?
   - **Gợi ý:** `<span>` là inline element, phù hợp để chứa các đoạn text nhỏ bên trong các khối 3D mà không làm phá vỡ layout dòng.

### Mức độ: Trung bình
9. **Câu hỏi:** Đường dẫn tương đối (Relative path) trong dự án của em được tổ chức thế nào? Ví dụ từ `flashcard.html` gọi `flashcard.css`.
   - **Gợi ý:** Sử dụng `../1.style/flashcard.css`. Dấu `../` để thoát ra khỏi thư mục hiện tại (`2.page`) rồi mới vào thư mục `1.style`.
10. **Câu hỏi:** Em giải thích cấu trúc của một Form đăng nhập trong file `login.html`.
    - **Gợi ý:** Gồm thẻ `<form>`, các `<input type="text/password">`, `<label>` để mô tả và `<button type="submit">`.
11. **Câu hỏi:** Tại sao em lại dùng `input type="checkbox"` với id là `check` ở `index.html`? Nó có liên quan gì đến CSS không?
    - **Gợi ý:** Đây là kỹ thuật "Checkbox Hack" để làm menu mobile mà không cần dùng quá nhiều JavaScript (dùng `:checked ~ .navbar` trong CSS).
12. **Câu hỏi:** Thẻ `<link rel="preconnect">` trong các file HTML có tác dụng gì?
    - **Gợi ý:** Giúp trình duyệt thiết lập kết nối sớm tới các server chứa font (như Google Fonts), giúp tải font nhanh hơn.
13. **Câu hỏi:** Trong các bảng (table) ở trang Admin, em sử dụng những thẻ con nào?
    - **Gợi ý:** `<table>`, `<thead>`, `tbody`, `tr` (hàng), `th` (tiêu đề cột), `td` (dữ liệu ô).
14. **Câu hỏi:** Làm thế nào để em tạo ra các icon như 'bx-menu' hay 'bx-x' trong dự án?
    - **Gợi ý:** Sử dụng thư viện Boxicons thông qua thẻ `<link>` CDN và thẻ `<i>` với các class tương ứng.
15. **Câu hỏi:** Ý nghĩa của thuộc tính `name` trong các thẻ `<input>` của Form là gì?
    - **Gợi ý:** Để Backend có thể nhận diện và lấy được dữ liệu người dùng gửi lên thông qua `req.body` (trong Node.js).

### Mức độ: Khó (Nâng cao)
16. **Câu hỏi:** Sự khác biệt giữa `src` (trong `img`) và `href` (trong `link`) là gì?
    - **Gợi ý:** `src` dùng để nhúng tài nguyên vào trang, `href` dùng để tạo liên kết tới tài nguyên bên ngoài hoặc chỉ định quan hệ.
17. **Câu hỏi:** Tại sao em lại sử dụng thẻ `<label for="check">`? Thuộc tính `for` liên kết với cái gì?
    - **Gợi ý:** Liên kết với `id` của input checkbox. Khi click vào label, checkbox sẽ tự động được check/uncheck.
18. **Câu hỏi:** SEO cơ bản: Em đã tối ưu thẻ `<title>` và các thẻ `<h1>` - `<h6>` như thế nào để thầy giáo tìm thấy web của em dễ hơn?
    - **Gợi ý:** Mỗi trang có 1 tiêu đề duy nhất trong `<title>`, sử dụng duy nhất một thẻ `<h1>` cho nội dung chính của trang.
19. **Câu hỏi:** Trong EJS (file `index.ejs` admin), cú pháp `<%= totalViews %>` có ý nghĩa gì?
    - **Gợi ý:** Đây là cú pháp của EJS để render giá trị của biến từ Server trả về vào mã HTML.
20. **Câu hỏi:** Tại sao em dùng `type="button"` cho các nút điều hướng trong `flashcard.html` thay vì để mặc định?
    - **Gợi ý:** Để tránh việc trình duyệt hiểu lầm là nút submit form, gây tải lại trang không cần thiết.
21. **Câu hỏi:** Em xử lý việc tải ảnh không đồng bộ hoặc ảnh dung lượng lớn như thế nào để không làm chậm giao diện?
    - **Gợi ý:** Sử dụng các định dạng nén như `.jpg` hoặc `.png` đã tối ưu, đặt kích thước ảnh rõ ràng để tránh Layout Shift.
22. **Câu hỏi:** Giải thích cấu trúc của khối `flashcard-stage` trong HTML.
    - **Gợi ý:** Nó bao gồm một container cha để giữ không gian và một khối con (`flip-card`) chứa hai mặt (front/back).
23. **Câu hỏi:** Tại sao em lại dùng `aria-label` cho nút lật thẻ?
    - **Gợi ý:** Để hỗ trợ người dùng sử dụng trình đọc màn hình hiểu được chức năng của nút khi nút đó không có text hiển thị rõ ràng.
24. **Câu hỏi:** Nếu muốn thêm một Favicon cho trang web, em sẽ thêm thẻ nào vào HTML?
    - **Gợi ý:** `<link rel="icon" type="image/x-icon" href="path/to/favicon.ico">`.
25. **Câu hỏi:** Cách em tổ chức thư mục `10.views/admin` thể hiện điều gì trong kiến trúc web?
    - **Gợi ý:** Thể hiện việc phân tách giữa giao diện phía người dùng (static HTML) và giao diện quản trị động (Template Engine EJS).

---

## PHẦN 2: CSS & THIẾT KẾ GIAO DIỆN (25 Câu)

### Mức độ: Dễ
26. **Câu hỏi:** Em sử dụng thuộc tính nào để căn giữa các thành phần trong `home-content`?
    - **Gợi ý:** `text-align: center` cho text và `display: flex; justify-content: center; align-items: center;` cho các container.
27. **Câu hỏi:** Màu sắc chủ đạo của dự án là gì? Em quy định nó ở đâu?
    - **Gợi ý:** Màu xanh đậm (`#081b29`) và xanh nhạt (`#c3d3f3`). Quy định trong các file `.css` tương ứng.
28. **Câu hỏi:** Thuộc tính `box-sizing: border-box` ở đầu file CSS có tác dụng gì?
    - **Gợi ý:** Giúp việc tính toán kích thước phần tử dễ hơn: `width` sẽ bao gồm cả `padding` và `border`.
29. **Câu hỏi:** Làm thế nào để xóa gạch chân của các thẻ liên kết `<a>`?
    - **Gợi ý:** Dùng `text-decoration: none;`.
30. **Câu hỏi:** Em sử dụng font chữ gì cho dự án? Tại sao lại chọn font đó?
    - **Gợi ý:** Sử dụng 'Poppins' và 'Inter'. Đây là các font hiện đại, dễ đọc, phù hợp với phong cách học tập.
31. **Câu hỏi:** Thuộc tính `cursor: pointer` dùng khi nào?
    - **Gợi ý:** Dùng cho các nút (button) hoặc link (a) để người dùng biết đó là thành phần có thể click được.
32. **Câu hỏi:** Giải thích ý nghĩa của `margin: 0; padding: 0;` ở selector `*`.
    - **Gợi ý:** Reset các giá trị mặc định của trình duyệt để đảm bảo giao diện hiển thị đồng nhất trên mọi trình duyệt.
33. **Câu hỏi:** Làm thế nào để thay đổi màu chữ khi di chuột qua menu?
    - **Gợi ý:** Sử dụng pseudo-class `:hover` (ví dụ: `.navbar a:hover { color: #c3d3f3; }`).

### Mức độ: Trung bình
34. **Câu hỏi:** Giải thích cách em dùng Flexbox trong class `.header`.
    - **Gợi ý:** `display: flex` để các phần tử nằm trên một hàng; `justify-content: space-between` để logo và navbar đẩy về hai phía.
35. **Câu hỏi:** Kỹ thuật `backdrop-filter: blur(12px)` trong header dùng để làm gì?
    - **Gợi ý:** Tạo hiệu ứng kính mờ (glassmorphism), giúp header trông hiện đại và nổi bật trên nền nội dung.
36. **Câu hỏi:** Trong `home.css`, em dùng `position: fixed` cho header để làm gì?
    - **Gợi ý:** Để header luôn nằm ở trên cùng màn hình ngay cả khi người dùng cuộn trang xuống dưới.
37. **Câu hỏi:** Responsive: Tại @media (max-width: 800px), giao diện thay đổi như thế nào?
    - **Gợi ý:** Menu ngang biến mất, icon menu hiện ra, và menu navbar chuyển sang dạng dọc ẩn/hiện khi click.
38. **Câu hỏi:** Em dùng thuộc tính CSS nào để tạo hiệu ứng lật thẻ 3D trong trang Flashcard?
    - **Gợi ý:** `transform: rotateY(180deg)` kết hợp với `transition` và `backface-visibility: hidden`.
39. **Câu hỏi:** Đơn vị `rem` và `em` khác nhau như thế nào? Em ưu tiên dùng loại nào?
    - **Gợi ý:** `rem` dựa trên root font-size (html), `em` dựa trên font-size của phần tử cha. Em thường dùng `rem` để dễ quản lý tỉ lệ.
40. **Câu hỏi:** Làm sao để tạo hiệu ứng đổ bóng cho các nút bấm?
    - **Gợi ý:** Sử dụng thuộc tính `box-shadow` (ví dụ: `0 0 18px rgba(0,171,240,.35)`).
41. **Câu hỏi:** Giải thích tác dụng của `z-index` trong dự án của em.
    - **Gợi ý:** Dùng để quản lý lớp hiển thị, ví dụ Header phải có `z-index` cao hơn nội dung chính để không bị đè lên khi cuộn.

### Mức độ: Khó (Nâng cao)
42. **Câu hỏi:** Tại sao em lại dùng `clamp(44px, 7vw, 78px)` cho font-size của thẻ h1?
    - **Gợi ý:** Đây là hàm CSS hiện đại giúp font-size tự động co giãn theo màn hình (min, preferred, max) mà không cần viết quá nhiều Media Queries.
43. **Câu hỏi:** Kỹ thuật tạo animation cho các thẻ liên kết trong navbar khi mobile menu mở ra là gì?
    - **Gợi ý:** Dùng `transition-delay: calc(.15s * var(--i))` để các mục menu hiện ra lần lượt tạo hiệu ứng mượt mà.
44. **Câu hỏi:** Giải thích về CSS Variable (nếu có dùng) hoặc cách em quản lý bảng màu đồng nhất.
    - **Gợi ý:** Em đặt các mã màu cố định hoặc dùng biến để đảm bảo mọi trang (About, Contact, Login) đều có chung bộ nhận diện thương hiệu.
45. **Câu hỏi:** Làm thế nào để tối ưu CSS để trang web load nhanh hơn?
    - **Gợi ý:** Gộp các file CSS chung, sử dụng ít hình ảnh nền nặng, tránh dùng quá nhiều selector lồng nhau quá sâu.
46. **Câu hỏi:** Cách em xử lý tình trạng "Flash of Unstyled Content" (FOUC) khi dùng Google Fonts?
    - **Gợi ý:** Dùng `font-display: swap` trong link font để trình duyệt hiển thị font hệ thống trước khi font Google tải xong.
47. **Câu hỏi:** Tại sao em chọn `linear-gradient` cho background thay vì một màu đơn sắc?
    - **Gợi ý:** Tạo chiều sâu cho thiết kế, làm cho giao diện trông chuyên nghiệp và bớt đơn điệu hơn.
48. **Câu hỏi:** Phân biệt `position: absolute` và `position: relative`. Em đã dùng chúng ở đâu trong code?
    - **Gợi ý:** `relative` làm mốc, `absolute` định vị theo mốc đó. Dùng trong việc đặt icon menu hoặc các hiệu ứng trang trí ở header.
49. **Câu hỏi:** Làm thế nào để một div có tỉ lệ khung hình 16:9 chỉ bằng CSS?
    - **Gợi ý:** Dùng thuộc tính `aspect-ratio: 16/9`.
50. **Câu hỏi:** Em đã test giao diện trên những thiết bị nào? Cách em giả lập Mobile trên Chrome DevTools?
    - **Gợi ý:** Dùng phím F12, chọn biểu tượng Toggle Device Toolbar để kiểm tra giao diện trên iPhone, Samsung, iPad...

---

## PHẦN 3: WORKFLOW & SỰ TƯƠNG TÁC FRONTEND-BACKEND (20 Câu)

### Mức độ: Dễ
51. **Câu hỏi:** Khi người dùng nhấn nút "Start Flashcard", chuyện gì xảy ra?
    - **Gợi ý:** Trình duyệt sẽ gửi yêu cầu GET tới file `login.html` hoặc `library1.html` để hiển thị trang tiếp theo.
52. **Câu hỏi:** Backend của dự án em sử dụng công nghệ gì?
    - **Gợi ý:** Node.js với framework Express và cơ sở dữ liệu MongoDB.
53. **Câu hỏi:** Dữ liệu flashcard được lưu ở đâu?
    - **Gợi ý:** Hiện tại lưu trong MongoDB (Backend) và có sử dụng `localStorage` ở phía Frontend để tăng tốc độ truy cập tạm thời.
54. **Câu hỏi:** Làm thế nào để Frontend gửi dữ liệu từ Form đăng ký về Server?
    - **Gợi ý:** Dùng thuộc tính `method="POST"` và `action="/api/auth/register"` trong thẻ `<form>`.
55. **Câu hỏi:** Trạng thái "Đã đăng nhập" được quản lý như thế nào?
    - **Gợi ý:** Sử dụng `session` trong Express (đã thấy cấu trúc `express-session` trong `server.js`).

### Mức độ: Trung bình
56. **Câu hỏi:** Giải thích luồng 5 bước của dự án khi người dùng thêm một bình luận.
    - **Gợi ý:** 1. User nhập text -> 2. Client gửi yêu cầu POST qua API -> 3. Server nhận yêu cầu, kiểm tra -> 4. Server lưu vào MongoDB -> 5. Trình duyệt nhận phản hồi và hiển thị bình luận mới.
57. **Câu hỏi:** Trong `flashcard.js`, em lấy dữ liệu từ đâu để hiển thị lên thẻ?
    - **Gợi ý:** Dùng `localStorage.getItem("flashstudy_selected_collection")` để lấy bộ thẻ người dùng đã chọn từ trang thư viện.
58. **Câu hỏi:** API là gì? Em đã gọi API nào trong dự án?
    - **Gợi ý:** API là phương thức để FE và BE nói chuyện với nhau. Ví dụ: `/api/comments` để lấy danh sách bình luận.
59. **Câu hỏi:** Tại sao em lại cần file `server.js`?
    - **Gợi ý:** Đây là file chạy chính của Backend, dùng để khởi tạo server, kết nối DB và định tuyến các yêu cầu từ người dùng.
60. **Câu hỏi:** Sự khác biệt giữa `res.sendFile()` và `res.render()` trong `server.js` là gì?
    - **Gợi ý:** `sendFile` gửi file HTML tĩnh, `render` dùng để render file EJS với dữ liệu động.

### Mức độ: Khó (Nâng cao)
61. **Câu hỏi:** Làm thế nào để Frontend nhận biết một yêu cầu gửi đi bị lỗi (ví dụ: sai mật khẩu)?
    - **Gợi ý:** Dùng `fetch()` trong JS và kiểm tra `response.status` (nếu là 401, 400 hoặc 500).
62. **Câu hỏi:** Tại sao em lại để các file static như CSS, Image ở các thư mục riêng (`1.style`, `3.image`)?
    - **Gợi ý:** Để dễ quản lý và cấu hình `app.use(express.static('.'))` giúp server phục vụ các file này nhanh chóng.
63. **Câu hỏi:** Trong trang Admin, làm sao để khi nhấn nút "Xóa" bình luận, hàng đó biến mất mà không cần tải lại trang?
    - **Gợi ý:** Dùng JavaScript gửi yêu cầu DELETE tới server, sau đó dùng `.remove()` để xóa element đó khỏi DOM.
64. **Câu hỏi:** Giải thích cách `mongoose` giúp em quản lý dữ liệu Flashcard.
    - **Gợi ý:** Nó cung cấp Schema (khuôn mẫu) để đảm bảo dữ liệu lưu vào MongoDB luôn đúng cấu trúc (như tên bộ thẻ, danh sách các card).
65. **Câu hỏi:** Nếu Server bị sập, giao diện Frontend của em sẽ hiển thị như thế nào?
    - **Gợi ý:** Các trang tĩnh vẫn hiện, nhưng các chức năng cần dữ liệu (như load flashcard từ DB, đăng nhập) sẽ không hoạt động.

---

## PHẦN 4: VAI TRÒ LEADER & TỔ CHỨC DỰ ÁN (15 Câu)

### Mức độ: Trung bình
66. **Câu hỏi:** Tại sao em lại đặt tên thư mục có đánh số 1, 2, 3... như `1.style`, `2.page`?
    - **Gợi ý:** Để các thư mục được sắp xếp theo thứ tự logic, dễ tìm kiếm và quản lý khi dự án phình to.
67. **Câu hỏi:** Là FrontEnd Leader, em đã thống nhất quy tắc đặt tên Class CSS như thế nào với các thành viên khác?
    - **Gợi ý:** Sử dụng quy tắc đặt tên có ý nghĩa (Semantic naming) như `.btn-login`, `.nav-item` để ai nhìn vào cũng hiểu.
68. **Câu hỏi:** Tại sao em chọn phong cách thiết kế Dark Mode cho FlashStudy?
    - **Gợi ý:** Giúp người học đỡ mỏi mắt khi học thời gian dài và tạo cảm giác công nghệ, hiện đại.
69. **Câu hỏi:** Em đã phối hợp với bạn làm Backend như thế nào để khớp dữ liệu hiển thị?
    - **Gợi ý:** Thống nhất trước cấu trúc JSON (ví dụ: một card gồm `term` và `definition`) để em viết code hiển thị trước, BE đổ dữ liệu sau.
70. **Câu hỏi:** Dự án này có tối đa bao nhiêu giao diện chính? Tại sao không làm nhiều hơn?
    - **Gợi ý:** Có 4 giao diện (Home, Library, Study, Admin). Việc giới hạn giúp tập trung vào trải nghiệm người dùng tốt nhất và hoàn thiện kỹ chức năng cốt lõi.

### Mức độ: Khó (Nâng cao)
71. **Câu hỏi:** Nếu khách hàng muốn thêm tính năng "Đếm ngược thời gian" khi học flashcard, em sẽ sửa những file nào?
    - **Gợi ý:** Sửa `flashcard.html` (thêm UI đồng hồ), `flashcard.css` (định dạng đồng hồ) và `flashcard.js` (viết logic đếm ngược).
72. **Câu hỏi:** Khó khăn lớn nhất của em khi làm Leader dự án này là gì?
    - **Gợi ý:** Việc quản lý sự đồng nhất giữa các file CSS để không bị ghi đè (conflict) lẫn nhau.
73. **Câu hỏi:** Làm thế nào để em đảm bảo trang web chạy tốt trên cả Chrome, Firefox và Safari?
    - **Gợi ý:** Sử dụng các thuộc tính CSS tiêu chuẩn và kiểm tra kỹ trên các trình duyệt khác nhau trong quá trình làm.
74. **Câu hỏi:** Tại sao em không dùng Bootstrap hay Tailwind mà lại tự viết CSS thuần?
    - **Gợi ý:** Để hiểu sâu về bản chất CSS, dễ dàng tùy biến giao diện độc đáo theo ý thích mà không bị gò bó bởi framework.
75. **Câu hỏi:** Em đánh giá thế nào về khả năng mở rộng (scalability) của mã nguồn FrontEnd hiện tại?
    - **Gợi ý:** Code được chia nhỏ theo module nên rất dễ thêm trang mới hoặc tính năng mới mà không ảnh hưởng đến phần cũ.

---

## PHẦN 5: TÌNH HUỐNG & GIẢI QUYẾT VẤN ĐỀ (15 Câu)

### Mức độ: Khó
76. **Câu hỏi:** "Thầy thấy màu chữ ở trang About Us hơi khó đọc trên nền này, em làm sao để chỉnh?"
    - **Gợi ý:** Em sẽ vào file `about_us.css`, tìm selector chứa text đó và tăng độ tương phản (ví dụ: chuyển sang màu trắng tinh hoặc thêm `text-shadow`).
77. **Câu hỏi:** "Nếu thầy muốn trang Admin có thêm biểu đồ thống kê, em sẽ làm thế nào?"
    - **Gợi ý:** Em sẽ nhúng thư viện `Chart.js` vào file EJS và gọi dữ liệu từ Backend để vẽ biểu đồ.
78. **Câu hỏi:** "Tại sao khi thầy nhấn F5 ở trang Flashcard, nội dung lại quay về thẻ đầu tiên?"
    - **Gợi ý:** Do logic JS hiện tại khởi tạo `currentIndex = 0` mỗi khi load trang. Để khắc phục, có thể lưu `currentIndex` vào `sessionStorage`.
79. **Câu hỏi:** "Làm sao để ngăn chặn người dùng chưa đăng nhập mà vẫn vào được trang Admin?"
    - **Gợi ý:** Sử dụng Middleware trong Backend (file `auth.js`) để kiểm tra session trước khi cho phép truy cập route `/admin`.
80. **Câu hỏi:** "Nếu thầy muốn thay đổi toàn bộ màu xanh chủ đạo sang màu cam, em mất bao lâu?"
    - **Gợi ý:** Nếu đã dùng CSS Variables, em chỉ mất 10 giây. Nếu chưa, em sẽ dùng tính năng Find & Replace của VS Code để thay thế mã màu trong toàn bộ dự án.
81. **Câu hỏi:** "Trang web bị vỡ khung khi xem trên màn hình iPhone SE, em sửa ở đâu?"
    - **Gợi ý:** Em sẽ kiểm tra lại phần Media Query cho màn hình dưới 375px trong file CSS tương ứng.
82. **Câu hỏi:** "Tại sao ảnh logo của em lại bị méo khi thu nhỏ trình duyệt?"
    - **Gợi ý:** Có thể do em đặt cứng `width` và `height`. Em nên dùng `height: auto` và `max-width: 100%`.
83. **Câu hỏi:** "Làm thế nào để hiển thị thông báo 'Bạn đã học hết bộ thẻ' khi người dùng nhấn Next ở thẻ cuối cùng?"
    - **Gợi ý:** Trong hàm `showNextCard()`, em thêm điều kiện `if (currentIndex === cards.length - 1)` thì hiển thị một thông báo (alert hoặc modal).
84. **Câu hỏi:** "Làm sao để tối ưu hình ảnh trong thư mục `3.image`?"
    - **Gợi ý:** Sử dụng các công cụ nén ảnh trực tuyến hoặc chuyển sang định dạng `.webp` để giảm dung lượng mà vẫn giữ chất lượng.
85. **Câu hỏi:** "Em xử lý thế nào nếu người dùng nhập một nội dung flashcard quá dài làm tràn card?"
    - **Gợi ý:** Dùng `overflow: hidden; text-overflow: ellipsis;` hoặc cho phép card tự co giãn chiều cao bằng `min-height`.

86. **Câu hỏi:** "Làm thế nào để tạo hiệu ứng hover cho các hàng trong bảng Admin?"
    - **Gợi ý:** Sử dụng `.comments-table tr:hover { background-color: #f5f5f5; }`.
87. **Câu hỏi:** "Tại sao em lại dùng `linear-gradient` cho body background?"
    - **Gợi ý:** Để tạo sự chuyển màu mượt mà, giúp giao diện trông chuyên nghiệp và hiện đại hơn màu đơn sắc.
88. **Câu hỏi:** "Em dùng thư viện nào để làm icon?"
    - **Gợi ý:** Boxicons và Font Awesome (đã thấy link CDN trong `index.html`).
89. **Câu hỏi:** "Làm thế nào để ẩn checkbox hack trong menu mobile?"
    - **Gợi ý:** Dùng `display: none;` cho id `#check`.
90. **Câu hỏi:** "Tại sao em dùng `z-index: 100` cho header?"
    - **Gợi ý:** Để đảm bảo menu luôn nổi trên các phần tử khác khi cuộn trang.
91. **Câu hỏi:** "Em làm thế nào để các phần tử trong `stats-grid` tự động xuống dòng khi màn hình nhỏ?"
    - **Gợi ý:** Sử dụng `flex-wrap: wrap` hoặc Grid Layout với `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`.
92. **Câu hỏi:** "Ý nghĩa của `padding: 1.3rem 10%` trong header?"
    - **Gợi ý:** `1.3rem` cho trên/dưới và `10%` cho trái/phải để nội dung header không bị sát mép màn hình.
93. **Câu hỏi:** "Làm thế nào để bo góc các nút bấm?"
    - **Gợi ý:** Sử dụng thuộc tính `border-radius` (ví dụ: `6px`).
94. **Câu hỏi:** "Tại sao em dùng `outline: none` cho các nút?"
    - **Gợi ý:** Để loại bỏ đường viền mặc định của trình duyệt khi focus, giúp giao diện sạch sẽ hơn (nhưng cần thay thế bằng hiệu ứng focus khác để đảm bảo trợ năng).
95. **Câu hỏi:** "Em dùng thuộc tính gì để tạo chiều sâu cho hiệu ứng 3D?"
    - **Gợi ý:** `perspective` trong container cha của flashcard.
96. **Câu hỏi:** "Làm thế nào để văn bản không bị chọn (select) khi người dùng click vào thẻ?"
    - **Gợi ý:** Sử dụng `user-select: none;`.
97. **Câu hỏi:** "Cách em tạo hiệu ứng blur cho background khi menu mobile mở ra?"
    - **Gợi ý:** Dùng `backdrop-filter: blur(50px)` trên class `.navbar` hoặc một lớp overlay.
98. **Câu hỏi:** "Tại sao em chọn đơn vị `vh` cho `min-height` của body?"
    - **Gợi ý:** Để đảm bảo trang web luôn chiếm ít nhất 100% chiều cao của cửa sổ trình duyệt (viewport height).
99. **Câu hỏi:** "Làm thế nào để ảnh logo luôn giữ tỉ lệ khi thay đổi kích thước?"
    - **Gợi ý:** Dùng `object-fit: contain;` hoặc chỉ set một chiều (`width` hoặc `height`).
100. **Câu hỏi:** "Nếu thầy muốn trang web có âm thanh khi lật thẻ, em làm thế nào?"
    - **Gợi ý:** Em sẽ dùng đối tượng `new Audio('path/to/sound.mp3').play()` trong hàm `toggleFlipCard()`.

---
**Chúc em có buổi bảo vệ thành công! Hãy tự tin vì em là người nắm rõ từng dòng code giao diện của mình.**
