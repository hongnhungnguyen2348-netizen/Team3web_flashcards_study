---
# BÁO CÁO BÀI TẬP LỚN CUỐI KỲ
## Môn: Thiết kế và Lập trình Web
---

**KHOA:** Khoa Khoa học và Công nghệ giáo dục
**BỘ MÔN:** Thiết kế và Lập trình Web

**MÃ MÔN HỌC:** [Điền mã môn học]
**MÃ SỐ ĐỀ TÀI:** [Điền mã số đề tài]

**TÊN ĐỀ TÀI:** Hệ thống học tập thông minh qua Flashcard — **Flash Study**

**THỜI GIAN THỰC HIỆN:** Học kỳ [X] — Năm học 2025–2026

---

### 🎓 DANH SÁCH THÀNH VIÊN NHÓM

| STT | Họ và tên      | MSSV    | Vai trò               | Chức vụ         |
| --- | -------------- | ------- | --------------------- | --------------- |
| 1   | [Thành viên 1] | [MSSV1] | **Backend Developer** | **Nhóm trưởng** |
| 2   | [Thành viên 2] | [MSSV2] | Backend Developer     | Thành viên      |
| 3   | [Thành viên 3] | [MSSV3] | Frontend Developer    | Thành viên      |
| 4   | [Thành viên 4] | [MSSV4] | Frontend Developer    | Thành viên      |

**NHÓM THỰC HIỆN:** Group01_ltweb

**GIẢNG VIÊN HƯỚNG DẪN:** [Điền tên giảng viên]

---

## MỤC LỤC

- [Phần 1: Tổng quan và Nhân sự](#phần-1-tổng-quan-và-nhân-sự)
  - [1.1 Giới thiệu yêu cầu đề bài](#11-giới-thiệu-yêu-cầu-đề-bài)
  - [1.2 Những thay đổi so với đề bài](#12-những-thay-đổi-so-với-đề-bài)
  - [1.3 Bảng tổng kết chức năng](#13-bảng-tổng-kết-chức-năng)
  - [1.4 Bảng tổng kết đánh giá](#14-bảng-tổng-kết-đánh-giá)
  - [1.5 Bảng phân công công việc](#15-bảng-phân-công-công-việc)
  - [1.6 Bảng tổng kết kỹ thuật](#16-bảng-tổng-kết-kỹ-thuật)
- [Phần 2: Thiết kế hệ thống](#phần-2-thiết-kế-hệ-thống)
  - [2.1 Sơ đồ hệ thống phần cứng](#21-sơ-đồ-hệ-thống-phần-cứng)
  - [2.2 Kiến trúc phần mềm](#22-kiến-trúc-phần-mềm)
  - [2.3 Mô tả kiến trúc code](#23-mô-tả-kiến-trúc-code)
- [Phần 3: Demo và Hướng dẫn](#phần-3-demo-và-hướng-dẫn)
  - [3.1 Chức năng 1: Tạo/Sửa/Xóa Flashcard](#31-chức-năng-1-tạosửaxóa-flashcard)
  - [3.2 Chức năng 2: Học Flashcard](#32-chức-năng-2-học-flashcard)
  - [3.3 Chức năng 3: Gửi Contact về Admin](#33-chức-năng-3-gửi-contact-về-admin)
  - [3.4 Bảng tổng kết chức năng (nhắc lại)](#34-bảng-tổng-kết-chức-năng-nhắc-lại)
- [Phần 4: Tổng kết](#phần-4-tổng-kết)
  - [4.1 Những gì còn tồn tại / chưa hoàn thiện](#41-những-gì-còn-tồn-tại--chưa-hoàn-thiện)
  - [4.2 Những kiến thức học được từ môn học](#42-những-kiến-thức-học-được-từ-môn-học)
  - [4.3 Những kinh nghiệm tích lũy được](#43-những-kinh-nghiệm-tích-lũy-được)
- [Phần Phụ lục — Báo cáo cá nhân](#phần-phụ-lục--báo-cáo-cá-nhân)
  - [Phụ lục A — Thành viên 1 (Backend — Nhóm trưởng)](#phụ-lục-a--thành-viên-1-backend--nhóm-trưởng)
  - [Phụ lục B — Thành viên 2 (Backend)](#phụ-lục-b--thành-viên-2-backend)
  - [Phụ lục C — Thành viên 3 (Frontend)](#phụ-lục-c--thành-viên-3-frontend)
  - [Phụ lục D — Thành viên 4 (Frontend)](#phụ-lục-d--thành-viên-4-frontend)

---

# Phần 1: Tổng quan và Nhân sự

## 1.1 Giới thiệu yêu cầu đề bài

### Mục tiêu

Hệ thống **Flash Study** là một ứng dụng web học tập thông qua Flashcard, được xây dựng với mục tiêu giúp người dùng ghi nhớ kiến thức một cách hiệu quả thông qua phương pháp lặp lại ngắt quãng (spaced repetition) và kỹ thuật ghi nhớ chủ động (active recall). Hệ thống cho phép người dùng:

1. **Tạo các bộ flashcard** theo chủ đề mong muốn với cặp "Thuật ngữ — Định nghĩa".
2. **Quản lý thư viện flashcard** cá nhân: xem danh sách, sửa, xóa bộ flashcard và từng thẻ.
3. **Học flashcard** với hiệu ứng lật thẻ 3D, theo dõi tiến độ "Đã nhớ" / "Quên".
4. **Tương tác xã hội**: bình luận, đánh giá, gửi phản hồi liên hệ cho Admin.
5. **Phân quyền**: người dùng thường (User) và quản trị viên (Admin).

### Công nghệ sử dụng

| Thành phần          | Công nghệ                                               |
| ------------------- | ------------------------------------------------------- |
| **Frontend**        | HTML5, CSS3, JavaScript thuần (Fetch API), EJS template |
| **Backend**         | Node.js + Express.js 5.x                                |
| **Database**        | SQLite (qua better-sqlite3)                             |
| **Auth**            | Session-based (express-session)                         |
| **Mật khẩu**        | bcrypt (10 salt rounds)                                 |
| **Template Engine** | EJS (cho trang admin)                                   |

---

## 1.2 Những thay đổi so với đề bài

| Nội dung          | Đề bài gốc                 | Thực tế thực hiện                                                                              | Lý do                                                                                                                                              |
| ----------------- | -------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cơ sở dữ liệu** | MySQL                      | **SQLite** (chuyển đổi từ MySQL)                                                               | Giảm chi phí triển khai, không cần cài đặt MySQL server; dễ dàng deploy, portable. Wrapper `database.js` giữ API tương thích với `mysql2/promise`. |
| **Đăng nhập**     | Form submit tĩnh           | **Session-based** với API RESTful                                                              | Tách biệt frontend-backend, dễ mở rộng, bảo mật hơn với session và bcrypt.                                                                         |
| **Giao diện**     | Render server-side (thuần) | **SPA (Single Page Application)** cho thư viện flashcard + Fetch API                           | Trải nghiệm người dùng mượt mà hơn, không load lại trang khi thao tác.                                                                             |
| **Flashcard học** | Chỉ hiển thị danh sách     | **Hiệu ứng lật thẻ 3D** (CSS transform) + theo dõi trạng thái "Đã nhớ" / "Quên"                | Tăng tính tương tác, trực quan, hỗ trợ ghi nhớ chủ động.                                                                                           |
| **Bình luận**     | Text thuần                 | **Bộ lọc từ xấu** (bad words filter) + XSS escape + đánh giá sao 1–5                           | Đảm bảo an toàn nội dung, kiểm duyệt cơ bản.                                                                                                       |
| **Admin**         | —                          | **Dashboard EJS** với thống kê lượt xem, quản lý user (khóa/mở/reset pass), phản hồi bình luận | Đề bài không yêu cầu nhưng nhóm phát triển thêm để hoàn thiện sản phẩm.                                                                            |

---

## 1.3 Bảng tổng kết chức năng

### ✅ Chức năng đã làm được

| STT | Chức năng                             | Mô tả                                                                      | Người phụ trách   | Trạng thái    |
| --- | ------------------------------------- | -------------------------------------------------------------------------- | ----------------- | ------------- |
| 1   | **Đăng ký tài khoản**                 | Đăng ký với username, email, password, confirmPassword, kiểm tra trùng lặp | Thành viên 1 (BE) | ✅ Hoàn thành |
| 2   | **Đăng nhập / Đăng xuất**             | Đăng nhập với username + password, session-based, phân quyền admin/user    | Thành viên 1 (BE) | ✅ Hoàn thành |
| 3   | **Tạo bộ flashcard**                  | Tạo collection mới với tên và trạng thái mặc định "Đang học"               | Thành viên 1 (BE) | ✅ Hoàn thành |
| 4   | **Thêm thẻ flashcard**                | Thêm cặp term-definition vào bộ sưu tập                                    | Thành viên 1 (BE) | ✅ Hoàn thành |
| 5   | **Sửa thẻ flashcard**                 | Sửa term/definition của thẻ                                                | Thành viên 1 (BE) | ✅ Hoàn thành |
| 6   | **Xóa thẻ flashcard**                 | Xóa thẻ khỏi bộ sưu tập                                                    | Thành viên 1 (BE) | ✅ Hoàn thành |
| 7   | **Sửa bộ flashcard**                  | Sửa tên/trạng thái bộ sưu tập                                              | Thành viên 1 (BE) | ✅ Hoàn thành |
| 8   | **Xóa bộ flashcard**                  | Xóa bộ sưu tập (cascade xóa thẻ con)                                       | Thành viên 1 (BE) | ✅ Hoàn thành |
| 9   | **Học flashcard — Chế độ lật thẻ 3D** | Xem thẻ với hiệu ứng flip, điều hướng next/prev                            | Thành viên 3 (FE) | ✅ Hoàn thành |
| 10  | **Theo dõi trạng thái học**           | Đánh dấu "Đã nhớ" / "Quên" trong phiên học                                 | Thành viên 3 (FE) | ✅ Hoàn thành |
| 11  | **Gửi Contact cho Admin**             | Gửi thông tin liên hệ (name, email, message) lưu vào comments              | Thành viên 2 (BE) | ✅ Hoàn thành |
| 12  | **Xem thư viện flashcard**            | Grid hiển thị bộ sưu tập + sample content, phân loại trạng thái            | Thành viên 3 (FE) | ✅ Hoàn thành |
| 13  | **Bình luận + đánh giá sao**          | Gửi bình luận kèm rating 1–5, bộ lọc từ xấu, XSS escape                    | Thành viên 3 (FE) | ✅ Hoàn thành |
| 14  | **Xem danh sách bình luận**           | GET comments theo contentId, sắp xếp mới nhất                              | Thành viên 2 (BE) | ✅ Hoàn thành |
| 15  | **Trang About Us**                    | Giới thiệu đội ngũ, hiệu ứng fade-in                                       | Thành viên 4 (FE) | ✅ Hoàn thành |
| 16  | **Dashboard Admin**                   | Thống kê lượt xem, quản lý comments, phản hồi admin                        | Thành viên 2 (BE) | ✅ Hoàn thành |
| 17  | **Quản lý User (Admin)**              | Xem danh sách user, khóa/mở khóa, reset mật khẩu, xóa user                 | Thành viên 2 (BE) | ✅ Hoàn thành |
| 18  | **Hệ thống thông báo**                | Thông báo cho user khi admin phản hồi bình luận                            | Thành viên 1 (BE) | ✅ Hoàn thành |
| 19  | **Đếm lượt xem**                      | Cookie-based tracking, upsert page_views + log chi tiết                    | Thành viên 1 (BE) | ✅ Hoàn thành |
| 20  | **Đăng ký / Đăng nhập giao diện**     | Split-form animation, role-based redirect                                  | Thành viên 4 (FE) | ✅ Hoàn thành |

### ❌ Chức năng chưa làm được / Có thể cải thiện

| STT | Chức năng                        | Lý do                                                      | Hướng khắc phục                               |
| --- | -------------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| 1   | **Quên mật khẩu**                | Chưa tích hợp email service                                | Thêm nodemailer + OTP hoặc reset link         |
| 2   | **Spaced Repetition thuật toán** | Chưa implement lịch ôn tập thông minh (như Anki/SM-2)      | Cần thêm bảng `review_logs` + thuật toán SM-2 |
| 3   | **Tìm kiếm flashcard**           | Chưa có search/filter collections                          | Thêm API endpoint + frontend search bar       |
| 4   | **Upload ảnh**                   | Chưa hỗ trợ hình ảnh trong term/definition                 | Cần thêm multer + trường image_url            |
| 5   | **Chia sẻ bộ flashcard**         | Chưa có tính năng share giữa các user                      | Thêm bảng shared_collections                  |
| 6   | **Session store**                | Dùng memory store mặc định, mất session khi restart server | Cần chuyển sang connect-sqlite3 hoặc Redis    |

---

## 1.4 Bảng tổng kết đánh giá

### ✅ Ưu điểm

| Mặt                    | Mô tả                                   | Chi tiết                                                                                            |
| ---------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **🎨 Giao diện**       | Thiết kế hiện đại, tối giản, responsive | CSS glassmorphism, 3D card flip animation, SPA không reload, theme tối sang trọng                   |
| **⚡ Hiệu năng**       | Load nhanh, nhẹ, không dependency nặng  | SQLite synchronous (không cần connection pool), JS thuần không framework, CSS tối ưu                |
| **🔧 Kiến trúc**       | MVC-like, wrapper database linh hoạt    | Dễ dàng chuyển từ SQLite sang MySQL/PostgreSQL bằng cách đổi file database.js                       |
| **🔒 Bảo mật cơ bản**  | Chống SQL injection, XSS, auth session  | Prepared statements cho mọi query, escapeHtml(), bcrypt hash, middleware kiểm tra quyền             |
| **📦 Triển khai**      | Deploy đơn giản, portable               | Chỉ cần Node.js + npm install, không cần cấu hình database riêng, deploy lên Render/Railway 1 click |
| **💬 Admin dashboard** | CRUD user, thống kê, phản hồi comment   | Quản lý tập trung, dashboard EJS render server-side, modal reply                                    |

### ⚠️ Hạn chế

| Mặt                               | Mô tả                                                                                                   | Ảnh hưởng                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **🗄️ CSDL chưa tối ưu**           | Chưa có index cho cột `contentId`, `user_id`, `view_date`; dùng TEXT cho datetime thay vì INTEGER epoch | Query chậm khi lượng dữ liệu lớn; không tối ưu sorting                   |
| **🔗 Lập trình chưa đồng bộ**     | Một số chỗ gọi `pool.query()` trong commentController thay vì `db.execute()`                            | Gây nhầm lẫn khi đọc code, nhưng vẫn chạy do wrapper cho cả 2 giống nhau |
| **📊 Thiếu validation mạnh**      | Validation chủ yếu ở frontend, backend validate cơ bản                                                  | Có thể gửi request giả mạo qua Postman/CURL vượt qua validation          |
| **📱 Responsive chưa hoàn thiện** | library1.css chỉ có 1 breakpoint 720px                                                                  | Hiển thị trên tablet/mobile chưa tối ưu, sidebar bị che                  |
| **🔐 Session lưu memory**         | Dùng MemoryStore mặc định của express-session                                                           | Mất session khi restart, không scale được nhiều instance                 |
| **🧪 Thiếu kiểm thử**             | Chưa có unit test / integration test                                                                    | Khó phát hiện regression khi sửa code                                    |

---

## 1.5 Bảng phân công công việc

### 👨‍💻 Thành viên 1 — Backend Developer (Nhóm trưởng)

| STT | Nhiệm vụ                                        | Kỹ thuật                                    | Mức độ |
| --- | ----------------------------------------------- | ------------------------------------------- | ------ |
| 1   | Thiết kế CSDL (SQLite schema, 9 bảng)           | SQL, better-sqlite3, foreign keys, triggers | 🟢 Tốt |
| 2   | Xây dựng wrapper database (MySQL-compatible)    | JavaScript Proxy, prepared statements       | 🟢 Tốt |
| 3   | Auth Controller (signup, signin, me, signout)   | bcrypt, session, query params               | 🟢 Tốt |
| 4   | Flashcard Controller (CRUD collections + cards) | RESTful API, ownership check                | 🟢 Tốt |
| 5   | Reply Controller (admin reply + notifications)  | JOIN queries, notification system           | 🟢 Tốt |
| 6   | View Counter (page_views + view_logs)           | Cookie-based dedup, upsert pattern          | 🟢 Tốt |
| 7   | Migrate MySQL → SQLite                          | init-db.js, wrapper tương thích             | 🟢 Tốt |
| 8   | Quản lý session, middleware auth                | express-session, isAuthenticated            | 🟢 Tốt |

### 👨‍💻 Thành viên 2 — Backend Developer

| STT | Nhiệm vụ                                                | Kỹ thuật                                 | Mức độ |
| --- | ------------------------------------------------------- | ---------------------------------------- | ------ |
| 1   | Comment Controller (CRUD + contact)                     | Fetch API, prepared statements           | 🟢 Tốt |
| 2   | Admin Dashboard (EJS render + stats)                    | Server-side rendering, aggregate queries | 🟢 Tốt |
| 3   | User Management (list, lock/unlock, reset pass, delete) | Admin middleware, bcrypt                 | 🟢 Tốt |
| 4   | Contents Controller (sample flashcards)                 | GET API, ORDER BY                        | 🟢 Tốt |
| 5   | Admin Routes + EJS views                                | EJS template, reusable components        | 🟢 Tốt |
| 6   | Contact form API endpoint                               | POST endpoint, contentId='contact'       | 🟡 Đạt |
| 7   | Xử lý lỗi server (try-catch, error response)            | Error handling pattern                   | 🟢 Tốt |

### 👨‍💻 Thành viên 3 — Frontend Developer

| STT | Nhiệm vụ                                         | Kỹ thuật                                          | Mức độ |
| --- | ------------------------------------------------ | ------------------------------------------------- | ------ |
| 1   | Thư viện Flashcard (library1.html + library1.js) | SPA, Fetch API, DOM manipulation, ~643 dòng JS    | 🟢 Tốt |
| 2   | Học Flashcard (flashcard.html + flashcard.js)    | CSS 3D transform, perspective, preserve-3d        | 🟢 Tốt |
| 3   | CSS Thư viện (library1.css)                      | CSS Variables, Grid layout, responsive, animation | 🟢 Tốt |
| 4   | CSS Flashcard (flashcard.css)                    | Glassmorphism, 3D flip, glow effects              | 🟢 Tốt |
| 5   | Bình luận (comment.js)                           | Bad words filter, Fetch API, XSS escape           | 🟢 Tốt |
| 6   | Gọi API CRUD flashcard                           | Fetch API GET/POST/PUT/DELETE, async/await        | 🟢 Tốt |
| 7   | Notification UI (badge, dropdown, modal)         | DOM event delegation, API polling                 | 🟢 Tốt |

### 👨‍💻 Thành viên 4 — Frontend Developer

| STT | Nhiệm vụ                                               | Kỹ thuật                                                         | Mức độ |
| --- | ------------------------------------------------------ | ---------------------------------------------------------------- | ------ |
| 1   | Landing Page (index.html + home.css + home.js)         | Glassmorphism, responsive navbar, hero section                   | 🟢 Tốt |
| 2   | Login/Register UI (login.html + login.css + login.js)  | Split-form animation, form toggle, Fetch API                     | 🟢 Tốt |
| 3   | Contact Page (contact.html + contact.css)              | Floating labels, form validation, icons                          | 🟢 Tốt |
| 4   | About Us (about_us.html + about_us.css + about_us.js)  | Split layout, fade-in animation, responsive                      | 🟢 Tốt |
| 5   | CSS Login (login.css)                                  | Z-index transitions, absolute positioning, body dark mode toggle | 🟢 Tốt |
| 6   | 2-minute view tracking timer (inline trong index.html) | setTimeout, beforeunload, Fetch API                              | 🟢 Tốt |
| 7   | Embed comment form trong các trang                     | DOM integration, form handling                                   | 🟡 Đạt |

### Chú thích mức độ hoàn thành

- 🟢 **Tốt**: Hoàn thành đầy đủ, chạy ổn định, code sạch.
- 🟡 **Đạt**: Hoàn thành cơ bản, còn thiếu một số tính năng phụ.
- 🔴 **Chưa đạt**: Chưa hoàn thành hoặc không hoạt động.

---

## 1.6 Bảng tổng kết kỹ thuật

| STT | Chức năng            | Người thực hiện            | CSS           | JavaScript           | Middleware        | Input Form                                 | API Endpoint                               | CSDL                                        |
| --- | -------------------- | -------------------------- | ------------- | -------------------- | ----------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------- |
| 1   | **Đăng ký**          | Thành viên 1 (BE) + 4 (FE) | login.css     | login.js (fetch)     | express.json()    | username, email, password, confirmPassword | `POST /api/auth/signup`                    | `users`                                     |
| 2   | **Đăng nhập**        | Thành viên 1 (BE) + 4 (FE) | login.css     | login.js (fetch)     | express-session   | username, password                         | `POST /api/auth/signin`                    | `users`                                     |
| 3   | **Đăng xuất**        | Thành viên 1 (BE)          | —             | —                    | session.destroy() | —                                          | `POST /api/auth/signout`                   | —                                           |
| 4   | **Tạo bộ flashcard** | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (POST)   | isAuthenticated   | name                                       | `POST /api/flashcards`                     | `flashcard_collections`                     |
| 5   | **Thêm thẻ**         | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (POST)   | isAuthenticated   | term, definition                           | `POST /api/flashcards/:id/cards`           | `flashcard_cards`                           |
| 6   | **Sửa thẻ**          | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (PUT)    | isAuthenticated   | term, definition                           | `PUT /api/flashcards/:id/cards/:cardId`    | `flashcard_cards`                           |
| 7   | **Xóa thẻ**          | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (DELETE) | isAuthenticated   | —                                          | `DELETE /api/flashcards/:id/cards/:cardId` | `flashcard_cards`                           |
| 8   | **Sửa bộ flashcard** | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (PUT)    | isAuthenticated   | name, status                               | `PUT /api/flashcards/:id`                  | `flashcard_collections`                     |
| 9   | **Xóa bộ flashcard** | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js (DELETE) | isAuthenticated   | —                                          | `DELETE /api/flashcards/:id`               | `flashcard_collections`                     |
| 10  | **Học flashcard**    | Thành viên 3 (FE)          | flashcard.css | flashcard.js         | isAuthenticated   | —                                          | `GET /api/flashcards/:id`                  | `flashcard_cards`                           |
| 11  | **Gửi Contact**      | Thành viên 2 (BE) + 4 (FE) | contact.css   | inline fetch         | express.json()    | fullName, email, message                   | `POST /api/comments/contact`               | `comments`                                  |
| 12  | **Xem thư viện**     | Thành viên 3 (FE)          | library1.css  | library1.js (GET)    | isAuthenticated   | —                                          | `GET /api/flashcards`                      | `flashcard_collections` + `flashcard_cards` |
| 13  | **Bình luận**        | Thành viên 2 (BE) + 3 (FE) | library1.css  | comment.js (fetch)   | isAuthenticated   | contentId, content, rating                 | `POST /api/comments`                       | `comments`                                  |
| 14  | **Dashboard Admin**  | Thành viên 2 (BE)          | admin.css     | admin.js             | isAdmin           | —                                          | `GET /admin` (EJS)                         | `page_views` + `comments`                   |
| 15  | **Quản lý user**     | Thành viên 2 (BE)          | admin.css     | inline JS            | isAdmin           | —                                          | `GET /api/users/list`                      | `users`                                     |
| 16  | **Khóa/Mở user**     | Thành viên 2 (BE)          | admin.css     | inline JS            | isAdmin           | —                                          | `PUT /api/users/toggle-lock/:id`           | `users`                                     |
| 17  | **Reset mật khẩu**   | Thành viên 2 (BE)          | admin.css     | inline JS            | isAdmin           | —                                          | `POST /api/users/reset-password/:id`       | `users`                                     |
| 18  | **Xóa user**         | Thành viên 2 (BE)          | admin.css     | inline JS            | isAdmin           | —                                          | `DELETE /api/users/delete/:id`             | `users`                                     |
| 19  | **Thông báo**        | Thành viên 1 (BE) + 3 (FE) | library1.css  | library1.js          | isAuthenticated   | —                                          | `GET /api/notifications`                   | `notifications`                             |
| 20  | **Đếm lượt xem**     | Thành viên 1 (BE)          | —             | inline setTimeout    | trackHomepageView | —                                          | `POST /api/views/track-homepage-view`      | `page_views` + `view_logs`                  |

---

# Phần 2: Thiết kế hệ thống

## 2.1 Sơ đồ hệ thống phần cứng

### Mô hình Client — Server — CSDL

Hệ thống **Flash Study** được triển khai theo mô hình **3 tầng (Three-tier Architecture)**:

```
┌─────────────────────────────────────────────────────────────────────┐
│                         MẠNG INTERNET                               │
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐         │
│   │  🌐 Client 1  │    │  🌐 Client 2  │    │  🌐 Client N  │         │
│   │  (Browser)    │    │  (Browser)    │    │  (Browser)    │         │
│   │  HTML/CSS/JS  │    │  HTML/CSS/JS  │    │  HTML/CSS/JS  │         │
│   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘         │
│          │                   │                   │                  │
│          └───────────────────┼───────────────────┘                  │
│                              │ HTTP/HTTPS                           │
│                              ▼                                      │
│                   ┌──────────────────┐                              │
│                   │    ☁️ SERVER      │                              │
│                   │  (Render Cloud)   │                              │
│                   │                   │                              │
│                   │  ┌─────────────┐  │                              │
│                   │  │  Express.js  │  │                              │
│                   │  │  (Node.js)   │  │                              │
│                   │  │  Port 3000   │  │                              │
│                   │  └──────┬──────┘  │                              │
│                   │         │         │                              │
│                   │         ▼         │                              │
│                   │  ┌─────────────┐  │                              │
│                   │  │   SQLite     │  │                              │
│                   │  │  (better-    │  │                              │
│                   │  │   sqlite3)   │  │                              │
│                   │  │  web_login   │  │                              │
│                   │  │   .db  ◀── 🖴 │  │                              │
│                   │  └─────────────┘  │                              │
│                   └──────────────────┘                              │
└─────────────────────────────────────────────────────────────────────┘
```

### Giải thích luồng phần cứng logic

1. **Tầng Client (Presentation Layer):**
   - Người dùng truy cập website qua trình duyệt web (Chrome, Firefox, Edge, Safari).
   - Client tải về các file tĩnh: HTML (cấu trúc), CSS (giao diện), JavaScript (xử lý tương tác).
   - JavaScript thuần (không dùng framework như React/Vue) thực hiện các cuộc gọi API đến Server thông qua `fetch()`.
   - Dữ liệu được render bằng DOM manipulation.

2. **Tầng Server (Application Layer):**
   - Server Node.js chạy trên Render cloud platform, sử dụng framework Express.js.
   - Express nhận request từ client, đi qua các middleware (parse JSON, session, auth), routing đến controller tương ứng.
   - Controller xử lý logic nghiệp vụ, gọi database wrapper để thao tác với SQLite.
   - Trả về response JSON (cho API) hoặc HTML đã render (cho admin EJS views).

3. **Tầng Database (Data Layer):**
   - SQLite (file-based) lưu tại `data/web_login.db`.
   - Vì là file database, không cần server database riêng — toàn bộ dữ liệu nằm trong 1 file duy nhất.
   - Khi deploy lên Render, database được mount vào persistent disk để dữ liệu không bị mất khi restart.

### Luồng request cụ thể (ví dụ: Đăng nhập)

```
Client (Browser)                    Server (Express)                 SQLite
      │                                  │                            │
      │  POST /api/auth/signin           │                            │
      │  {username, password}            │                            │
      │ ─────────────────────────────►   │                            │
      │                                  │  SELECT * FROM users       │
      │                                  │  WHERE username = ?        │
      │                                  │ ───────────────────────►   │
      │                                  │                            │
      │                                  │ ◄─────── user row ────────│
      │                                  │                            │
      │                                  │  bcrypt.compare(password,  │
      │                                  │          user.password)    │
      │                                  │                            │
      │  ◄──── { ok, msg, user } ────────│                            │
      │                                  │                            │
      │  Chuyển hướng đến library1.html  │                            │
      │  hoặc /admin                     │                            │
```

---

## 2.2 Kiến trúc phần mềm

### Sự phối hợp giữa Front-end, Back-end và CSDL

Kiến trúc của Flash Study được thiết kế theo mô hình **MVC (Model-View-Controller)** nhưng tinh gọn, phù hợp với quy mô bài tập lớn:

#### 1. Front-end (View Layer)

**Công nghệ:** HTML5 + CSS3 + JavaScript thuần (Vanilla JS)

Frontend không dùng framework JavaScript (React/Vue/Angular) mà sử dụng:

- **HTML tĩnh** cho cấu trúc trang (login, library1, flashcard, contact, about_us).
- **CSS3 thuần** với các kỹ thuật hiện đại: CSS Variables, Flexbox, Grid, Glassmorphism (`backdrop-filter: blur()`), 3D transforms (`perspective`, `rotateY`, `preserve-3d`), animations (`@keyframes`, `transition`).
- **JavaScript thuần** với Fetch API cho gọi REST API, DOM manipulation cho render dữ liệu, async/await cho xử lý bất đồng bộ.
- **EJS template engine** cho phần admin dashboard (render server-side).

**Luồng xử lý:**

1. User tương tác (click nút, submit form) → JavaScript lắng nghe sự kiện.
2. JS thu thập dữ liệu từ form/DOM → gọi `fetch()` đến API endpoint.
3. JS nhận response (JSON) → cập nhật DOM (render collections, thông báo, v.v.).
4. Không load lại trang (trừ khi chuyển hướng).

#### 2. Back-end (Controller + Logic Layer)

**Công nghệ:** Node.js + Express.js

Backend được tổ chức theo mô hình Route → Controller:

- **Routes** (`src/routes/`): Định nghĩa endpoint, HTTP method, middleware (auth), và gắn với handler controller.
- **Controllers** (`src/controllers/`): Chứa logic xử lý request, validate dữ liệu, gọi database, trả response.
- **Middleware** (`src/middleware/`): Xác thực (`isAuthenticated`, `isAdmin`), đếm lượt xem (`trackHomepageView`).
- **Database Wrapper** (`src/config/database.js`): Lớp trừu tượng hóa kết nối SQLite, cung cấp API giống `mysql2/promise`.

**Luồng request qua các lớp:**

```
Request → Express → Middleware (session, json, cookie, auth) → Route → Controller → DB Wrapper → SQLite
                                                                                             │
Response ← Express ← JSON/HTML ← Controller ← ──────────────────────────────────────────────┘
```

#### 3. CSDL (Data Layer)

**Công nghệ:** SQLite qua `better-sqlite3`

Đặc điểm:

- **SQLite synchronous** — mọi thao tác đều đồng bộ (không callback), đơn giản hóa code.
- **Wrapper tương thích MySQL** — `db.execute()` và `db.query()` trả về `[rows, fields]` như mysql2/promise.
- **9 bảng** với foreign keys, triggers, UNIQUE constraints.
- **Prepared statements** — chống SQL injection.

### So sánh kiến trúc với mô hình MVC chuẩn

| Thành phần MVC | Trong Flash Study                                    | Ghi chú                                                                 |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| **Model**      | Database wrapper + SQL schema                        | Không có model class riêng; database.js đóng vai trò data access layer. |
| **View**       | HTML tĩnh (public/pages/) + EJS (views/admin/) + CSS | Client-side rendering cho user, server-side rendering cho admin.        |
| **Controller** | Controllers (src/controllers/)                       | Xử lý logic nghiệp vụ, validate, gọi database.                          |
| **Router**     | Routes (src/routes/)                                 | Định tuyến request đến controller đúng.                                 |

---

## 2.3 Mô tả kiến trúc code

### 2.3.1 Sơ đồ tổ chức thư mục

```
📁 Team3web_flashcards_study/
│
├── 📄 server.js                    # Entry point — khởi tạo Express, mount routes, static files
├── 📄 package.json                 # Dependencies + scripts
├── 📄 index.html                   # Landing page
│
├── 📁 public/                      # 🖥️ Frontend (static files)
│   ├── 📁 css/
│   │   ├── home.css               # Style landing page
│   │   ├── login.css              # Style login/signup
│   │   ├── library1.css           # Style thư viện flashcard (SPA)
│   │   ├── flashcard.css          # Style học flashcard (3D)
│   │   ├── about_us.css           # Style About Us
│   │   ├── contact.css            # Style contact form
│   │   └── admin.css              # Style admin dashboard
│   │
│   ├── 📁 js/
│   │   ├── home.js                # Quiz popup landing page
│   │   ├── login.js               # Xử lý đăng nhập/đăng ký (Fetch API)
│   │   ├── library1.js            # 📌 SPA chính: CRUD flashcard, notification (~643 dòng)
│   │   ├── flashcard.js           # 🎴 Học flashcard: 3D flip, navigation
│   │   ├── about_us.js            # Fade-in animation
│   │   ├── admin.js               # Xóa comment (AJAX)
│   │   └── comment.js             # 📝 Gửi bình luận + bộ lọc từ xấu
│   │
│   ├── 📁 pages/
│   │   ├── login.html             # Giao diện đăng nhập/đăng ký
│   │   ├── library1.html          # 📌 Giao diện thư viện flashcard (SPA)
│   │   ├── flashcard.html         # Giao diện học flashcard
│   │   ├── about_us.html          # Giới thiệu nhóm
│   │   └── contact.html           # Liên hệ + đánh giá
│   │
│   └── 📁 images/
│       ├── auto-quiz.png          # Logo
│       ├── google.png             # Google icon
│       └── nen.jpg                # Background About Us
│
├── 📁 views/                      # 🖥️ Server-side templates (EJS)
│   └── 📁 admin/
│       ├── index.ejs              # Dashboard admin + thống kê
│       ├── users.ejs              # Quản lý user
│       └── edit.ejs               # Sửa nội dung
│
├── 📁 src/                        # ⚙️ Backend
│   ├── 📁 config/
│   │   └── database.js            # 📌 SQLite wrapper (better-sqlite3 → mysql2-compatible)
│   │
│   ├── 📁 middleware/
│   │   ├── auth.js                # 🔐 Xác thực: isAuthenticated, isAdmin
│   │   └── viewCounter.js         # 📊 Đếm lượt xem (cookie + DB upsert)
│   │
│   ├── 📁 routes/                 # 🚏 Định tuyến (8 files)
│   │   ├── admin.js               # /admin — dashboard admin
│   │   ├── authRoutes.js          # /api/auth — signup, signin, me, signout
│   │   ├── comment.js             # /api/comments — CRUD bình luận + contact
│   │   ├── contentsRoutes.js      # /api/contents — sample flashcards
│   │   ├── flashcardRoutes.js     # /api/flashcards — CRUD collections + cards
│   │   ├── replyRoutes.js         # /api — admin reply + notifications
│   │   ├── userRoutes.js          # /api/users — quản lý user (admin)
│   │   └── viewRoutes.js          # /api/views — đếm lượt xem
│   │
│   └── 📁 controllers/            # 🧠 Xử lý logic (7 files)
│       ├── adminController.js     # Admin dashboard, comments, contents
│       ├── authController.js      # Đăng ký, đăng nhập, session
│       ├── commentController.js   # Bình luận + contact
│       ├── contentsController.js  # Sample flashcards
│       ├── flashcardController.js # 📌 CRUD collections + cards
│       ├── replyController.js     # Phản hồi admin + thông báo
│       └── userManagementController.js  # Quản lý user (admin)
│
├── 📁 scripts/
│   ├── init-db.js                 # 🗄️ Khởi tạo database + seed data (xóa cũ, tạo mới)
│   └── migrate.js                 # 🗄️ Migrate an toàn (chỉ tạo nếu chưa tồn tại)
│
├── 📁 data/
│   └── web_login.db               # 🗄️ Database SQLite (file)
│
├── 📄 .gitignore                  # node_modules/, *.db-wal, *.db-shm
└── 📄 render.yaml                 # ☁️ Cấu hình deploy Render
```

### 2.3.2 Giải thích nhiệm vụ từng file/thư mục quan trọng

#### 📄 `server.js`

- **Vai trò:** Entry point của toàn bộ ứng dụng.
- **Nhiệm vụ:**
  - Khởi tạo Express app với cổng 3000.
  - Cấu hình middleware: `express.json()` (parse JSON body), `express.urlencoded()` (parse form data), `cookie-parser` (đọc/ghi cookie), `express-session` (quản lý phiên đăng nhập).
  - Mount **9 route modules** với các prefix khác nhau.
  - Serve static files từ thư mục `public/`.
  - Định nghĩa route mặc định `GET /` trả về `index.html`.

#### 📁 `src/config/database.js`

- **Vai trò:** Lớp kết nối database — đây là file quan trọng nhất về mặt kiến trúc.
- **Nhiệm vụ:**
  - Kết nối SQLite bằng `better-sqlite3`.
  - **Wrapper pattern:** Cung cấp giao diện `db.execute(sql, params)` và `db.query(sql, params)` giống hệt `mysql2/promise`.
  - Tự động phát hiện và thêm cột `is_locked` nếu chưa có (auto-migration).
  - Tạo trigger `updated_at` cho bảng `flashcard_collections`.
  - Phân loại SQL: SELECT → `stmt.all()`, INSERT → `stmt.run()` trả về `{insertId, affectedRows}`, UPDATE/DELETE → `stmt.run()` trả về `{affectedRows, changedRows}`.

#### 📁 `src/middleware/auth.js`

- **Vai trò:** Bảo vệ các route yêu cầu xác thực.
- **`isAuthenticated`:** Kiểm tra `req.session.user` tồn tại, kiểm tra user ID còn hợp lệ trong DB. Nếu không → hủy session + redirect login.
- **`isAdmin`:** Kiểm tra `req.session.user.role === 'admin'`. Nếu không → 403 Forbidden.

#### 📁 `src/middleware/viewCounter.js`

- **Vai trò:** Đếm lượt xem trang chủ.
- **Cơ chế:**
  - Client chạy `setTimeout` 2 phút → gọi `POST /api/views/track-homepage-view`.
  - Server kiểm tra cookie `viewed_YYYY-MM-DD` (mỗi ngày 1 lần).
  - Dùng pattern "kiểm tra tồn tại → UPDATE hoặc INSERT" (upsert thủ công).
  - Ghi log chi tiết vào `view_logs` với visitor ID và user ID (nếu đã đăng nhập).

#### 📁 `public/js/library1.js`

- **Vai trò:** Trái tim của frontend — file JavaScript lớn nhất (~643 dòng).
- **Nhiệm vụ:**
  - Khởi tạo trang: tải collections từ `GET /api/flashcards`, tải sample contents từ `GET /api/contents`.
  - Render grid collections với trạng thái "Đã nhớ" / "Đang học".
  - SPA navigation: chuyển tab Home / Editor / Account mà không load lại trang.
  - CRUD collection: tạo (POST), sửa (PUT), xóa (DELETE) qua Fetch API.
  - CRUD cards: thêm (POST), sửa (PUT), xóa (DELETE) trong editor.
  - Hệ thống notification: tải danh sách, badge đếm chưa đọc, modal chi tiết, đánh dấu đã đọc.
  - Thông tin tài khoản: hiển thị avatar, username, email.
  - `escapeHtml()` — chống XSS cho mọi dữ liệu từ server.

#### 📁 `public/js/flashcard.js`

- **Vai trò:** Chế độ học flashcard với hiệu ứng lật thẻ 3D.
- **Nhiệm vụ:**
  - Lấy `id` từ URL query parameter.
  - Gọi `GET /api/flashcards/:id` lấy collection + cards.
  - Render term (mặt trước) và definition (mặt sau) với hiệu ứng `toggleClass('flipped')`.
  - Điều hướng thẻ trước/sau (vòng tròn, index 0 → last).
  - Đánh dấu "Đã nhớ" / "Quên" (CSS class active, dùng để sau này implement spaced repetition).

---

# Phần 3: Demo và Hướng dẫn

## 3.1 Chức năng 1: Tạo/Sửa/Xóa Flashcard

**Người phụ trách:** Thành viên 1 (Backend) + Thành viên 3 (Frontend)

### 📋 Kịch bản A: Tạo bộ flashcard mới

**Bước 1:** Người dùng đăng nhập → hệ thống chuyển hướng đến trang thư viện (`library1.html`).

**Bước 2:** Người dùng click nút **"Tạo flashcard"** trên sidebar bên trái → hệ thống hiển thị modal "Tạo thư mục mới".

> _[Chèn ảnh chụp modal tạo thư mục]_

**Bước 3:** Người dùng nhập tên bộ flashcard (vd: "Từ vựng IELTS") và click **"Tạo"** → hệ thống gọi `POST /api/flashcards` → tạo collection trong CSDL → tự động chuyển sang giao diện Editor.

> _[Chèn ảnh chụp giao diện Editor]_

**Bước 4:** Trong Editor, người dùng nhập **Term** (vd: "abandon") và **Definition** (vd: "từ bỏ, bỏ rơi") vào 2 ô textarea → click **"Thêm"** → hệ thống gọi `POST /api/flashcards/:id/cards` → thẻ mới xuất hiện trong danh sách bên dưới.

> _[Chèn ảnh chụp danh sách thẻ đã thêm]_

**Bước 5:** Người dùng lặp lại Bước 4 để thêm nhiều thẻ → khi hoàn tất, click nút **"Trở về thư viện"** → hệ thống quay lại grid collections.

**Kết thúc:** Bộ flashcard mới xuất hiện trong thư viện với trạng thái "Đang học".

---

### 📋 Kịch bản B: Sửa thẻ flashcard

**Bước 1:** Tại thư viện, người dùng click vào bộ flashcard muốn sửa → collection được chọn (class `.selected`).

**Bước 2:** Người dùng click nút **"✏️ Sửa"** → hệ thống chuyển sang giao diện Editor với danh sách thẻ hiện tại.

> _[Chèn ảnh chụp Editor với danh sách thẻ]_

**Bước 3:** Người dùng click vào thẻ cần sửa → ô textarea điền sẵn term/definition hiện tại → người dùng sửa nội dung → click **"Lưu"** → hệ thống gọi `PUT /api/flashcards/:id/cards/:cardId` → cập nhật trong CSDL → hiển thị thông báo thành công.

> _[Chèn ảnh chụp form sửa thẻ]_

**Kết thúc:** Thẻ flashcard đã được cập nhật với nội dung mới.

---

### 📋 Kịch bản C: Xóa thẻ flashcard

**Bước 1:** Tại thư viện, người dùng click vào bộ flashcard muốn xóa thẻ → collection được chọn.

**Bước 2:** Người dùng click **"✏️ Sửa"** → vào Editor → click nút **"🗑️"** bên cạnh thẻ muốn xóa.

**Bước 3:** Hệ thống gọi `DELETE /api/flashcards/:id/cards/:cardId` → xóa thẻ khỏi CSDL → thẻ biến mất khỏi danh sách.

> _[Chèn ảnh chụp trước và sau khi xóa thẻ]_

**Kết thúc:** Thẻ flashcard đã bị xóa khỏi bộ sưu tập.

> _Lưu ý: Khi xóa toàn bộ bộ flashcard (tại thư viện, click **"🗑️ Xóa"**), hệ thống gọi `DELETE /api/flashcards/:id`, cascade xóa tất cả thẻ con trong CSDL._

---

## 3.2 Chức năng 2: Học Flashcard

**Người phụ trách:** Thành viên 3 (Frontend)

### 📋 Kịch bản: Học flashcard với hiệu ứng lật thẻ 3D

**Bước 1:** Tại thư viện, người dùng chọn một bộ flashcard → click nút **"📖 Học"** → hệ thống chuyển hướng đến `flashcard.html?id=[collection_id]`.

> _[Chèn ảnh chụp giao diện học flashcard]_

**Bước 2:** Hệ thống gọi `GET /api/flashcards/:id` → tải danh sách cards → hiển thị thẻ đầu tiên:

- **Mặt trước:** Thuật ngữ (term) — hiển thị to, căn giữa.
- **Gợi ý:** "tap to flip" ở cuối thẻ.
- **Progress:** "Thẻ 1 / N" ở header.

**Bước 3:** Người dùng **click vào thẻ** → hiệu ứng 3D flip (xoay 180° quanh trục Y) → mặt sau hiện ra với định nghĩa (definition).

> _[Chèn ảnh chụp thẻ đã lật]_

**Bước 4:** Người dùng đánh giá mức độ ghi nhớ:

- Click **"✅ Đã nhớ"** → thẻ chuyển màu xanh, đánh dấu remembered.
- Click **"🔄 Quên"** → thẻ chuyển màu đỏ.

**Bước 5:** Người dùng click **"Thẻ tiếp theo"** (hoặc "Thẻ trước") → hệ thống chuyển sang thẻ kế tiếp (vòng tròn, từ thẻ cuối quay lại thẻ đầu).

> _[Chèn ảnh chụp navigation thẻ]_

**Bước 6:** Người dùng click **"Về thư viện"** ở header → quay lại `library1.html`.

**Kết thúc:** Phiên học kết thúc. Người dùng có thể tiếp tục học bộ khác hoặc quay lại sau.

---

## 3.3 Chức năng 3: Gửi Contact về Admin

**Người phụ trách:** Thành viên 2 (Backend) + Thành viên 4 (Frontend)

### 📋 Kịch bản: Gửi phản hồi/đánh giá cho Admin

**Bước 1:** Tại sidebar trang thư viện, người dùng click **"Liên hệ"** → hệ thống chuyển hướng đến `contact.html`.

> _[Chèn ảnh chụp trang Contact]_

**Bước 2:** Trang Contact hiển thị:

- **Cột trái:** Thông tin công ty (địa chỉ, số điện thoại, email, icon mạng xã hội).
- **Cột phải:** Form liên hệ với các trường:
  - **Full Name** — input text, required.
  - **Email** — input email, required.
  - **Message** — textarea, required.
  - Nút **"Send"** — submit form.

> _[Chèn ảnh chụp form contact đã điền]_

**Bước 3:** Người dùng điền đầy đủ thông tin và click **"Send"** → JavaScript gọi `POST /api/comments/contact` với body `{ fullName, email, message, rating: 5 }`.

**Bước 4:** Hệ thống:

1. Validate dữ liệu đầu vào (không để trống).
2. INSERT vào bảng `comments` với `contentId = 'contact'`.
3. Trả về JSON `{ success: true, message: 'Cảm ơn bạn đã đánh giá!' }`.

**Bước 5:** Trang hiển thị thông báo thành công cho người dùng.

> _[Chèn ảnh chụp thông báo thành công]_

**Bước 6 (phía Admin):** Admin đăng nhập → vào Dashboard (`/admin`) → thấy comment mới trong danh sách → có thể click **"Trả lời"** để gửi phản hồi.

> _[Chèn ảnh chụp Admin Dashboard với comment mới]_

**Kết thúc:** Người dùng đã gửi thành công phản hồi đến Admin.

---

## 3.4 Bảng tổng kết chức năng (nhắc lại)

| STT | Chức năng                  | Người phụ trách                       | Trạng thái    |
| --- | -------------------------- | ------------------------------------- | ------------- |
| 1   | Tạo bộ flashcard           | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 2   | Thêm thẻ flashcard         | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 3   | Sửa thẻ flashcard          | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 4   | Xóa thẻ flashcard          | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 5   | Sửa bộ flashcard           | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 6   | Xóa bộ flashcard           | Thành viên 1 (BE) + Thành viên 3 (FE) | ✅ Hoàn thành |
| 7   | Học flashcard (lật thẻ 3D) | Thành viên 3 (FE)                     | ✅ Hoàn thành |
| 8   | Gửi Contact                | Thành viên 2 (BE) + Thành viên 4 (FE) | ✅ Hoàn thành |

---

# Phần 4: Tổng kết

## 4.1 Những gì còn tồn tại / chưa hoàn thiện

### Về chức năng

| Vấn đề                              | Mô tả                                                                                                      | Mức độ ưu tiên |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------- |
| **🔐 Quên mật khẩu**                | Chưa có chức năng reset password qua email. Người dùng nếu quên mật khẩu phải nhờ Admin reset về "123456". | Cao            |
| **🧠 Thuật toán spaced repetition** | Hệ thống chưa có lịch ôn tập thông minh dạng Anki/SM-2. Người dùng tự nhớ lịch học.                        | Trung bình     |
| **🔍 Tìm kiếm**                     | Chưa có thanh tìm kiếm để lọc bộ flashcard theo tên.                                                       | Thấp           |
| **📤 Chia sẻ**                      | Chưa thể chia sẻ bộ flashcard giữa các user. Muốn dùng chung phải đăng nhập cùng tài khoản.                | Thấp           |
| **📱 Responsive**                   | Trang library1 chưa tối ưu tốt cho mobile (chỉ có 1 breakpoint 720px).                                     | Trung bình     |
| **🖼️ Upload ảnh**                   | Flashcard chỉ hỗ trợ text, chưa thể đính kèm hình ảnh.                                                     | Trung bình     |

### Về kỹ thuật

| Vấn đề                   | Mô tả                                                                                                       | Giải pháp đề xuất                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Session memory store** | Dùng MemoryStore mặc định, mất session khi restart server.                                                  | Chuyển sang `connect-sqlite3` hoặc Redis.                            |
| **Thiếu index CSDL**     | Chưa có index trên các cột thường xuyên query (`contentId`, `user_id`, `view_date`, `username`).            | Thêm `CREATE INDEX` trong migrate script.                            |
| **Validation backend**   | Backend validate cơ bản (check null, unique), chưa có validate định dạng email, độ dài password.            | Thêm thư viện như `validator` hoặc viết middleware validation riêng. |
| **Thiếu kiểm thử**       | Chưa có unit test/integration test.                                                                         | Thêm Jest + supertest cho API testing.                               |
| **Error handling**       | Một số chỗ catch lỗi nhưng chỉ console.error, chưa có centralized error handler.                            | Thêm Express error middleware.                                       |
| **CORS**                 | Chưa cấu hình CORS (hiện tại client cùng origin nên không vấn đề, nhưng nếu tách frontend/backend thì cần). | Thêm `cors` middleware.                                              |

---

## 4.2 Những kiến thức học được từ môn học

### 🌐 Về Lập trình Web

| Kiến thức                        | Mô tả                                                                                                         | Áp dụng trong project                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **HTTP & RESTful API**           | Hiểu về các phương thức GET, POST, PUT, DELETE, status code (200, 201, 400, 401, 403, 404, 500), JSON format. | Toàn bộ API backend tuân theo RESTful conventions.                   |
| **Frontend - Backend tách biệt** | Kiến trúc client-server, frontend gọi API qua fetch, backend trả JSON.                                        | SPA library1 hoàn toàn dùng Fetch API, không load lại trang.         |
| **CSS Layout hiện đại**          | Flexbox, Grid, responsive design, CSS Variables.                                                              | Toàn bộ giao diện dùng Flexbox + Grid, responsive qua media queries. |
| **CSS Animation & 3D**           | Transform, transition, perspective, preserve-3d, keyframes.                                                   | Hiệu ứng lật thẻ 3D, glassmorphism, fade-in, hover effects.          |
| **Session & Cookie**             | Cơ chế lưu trạng thái đăng nhập, cookie cho tracking.                                                         | express-session cho auth, cookie-parser cho view counter.            |
| **Bảo mật Web cơ bản**           | SQL injection, XSS, password hashing, authentication.                                                         | Prepared statements, escapeHtml(), bcrypt, middleware auth.          |
| **Template Engine**              | EJS render server-side, truyền dữ liệu từ controller sang view.                                               | Admin dashboard (thống kê, quản lý user).                            |
| **SQL & Database Design**        | Thiết kế bảng, foreign keys, constraints, JOIN, aggregate functions.                                          | 9 bảng với FK, triggers, upsert pattern.                             |

### 🛠️ Về Công cụ và Quy trình

| Kiến thức         | Mô tả                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------- |
| **Node.js & npm** | Quản lý package, scripts, module system (CommonJS).                                    |
| **Git & GitHub**  | Phiên bản code, commit, push, pull, quản lý repository nhóm.                           |
| **Debugging**     | Sử dụng console.log, browser DevTools (Network, Elements, Console).                    |
| **Deploy**        | Triển khai lên Render cloud platform, cấu hình environment variables, persistent disk. |

---

## 4.3 Những kinh nghiệm tích lũy được

### 📌 Về quản lý project

| Kinh nghiệm                     | Chi tiết                                                                                                                   |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Phân chia công việc rõ ràng** | BE (2 người) xử lý API + database, FE (2 người) xử lý giao diện + tích hợp. Phân tách dựa trên tính năng, không trùng lặp. |
| **Giao tiếp giữa BE và FE**     | Cần thống nhất trước định dạng JSON response, tên field, status code. Sử dụng document API mô tả endpoint.                 |
| **Code review cơ bản**          | Kiểm tra code trước khi merge, đảm bảo coding convention đồng bộ giữa các thành viên.                                      |
| **Xử lý conflict Git**          | Khi nhiều người cùng sửa 1 file, cần git pull thường xuyên, giải quyết conflict kịp thời.                                  |
| **Quản lý thời gian**           | Xác định MVP (tính năng tối thiểu) trước, phát triển incremental, tránh over-engineering.                                  |

### 💡 Về kỹ thuật

| Kinh nghiệm                      | Chi tiết                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Wrapper database**             | Viết wrapper giúp chuyển từ MySQL sang SQLite chỉ bằng cách đổi 1 file — một pattern hữu ích cho việc thay đổi công nghệ mà không ảnh hưởng logic nghiệp vụ. |
| **Sức mạnh của SQLite**          | SQLite rất phù hợp cho ứng dụng vừa và nhỏ, không cần server, deploy đơn giản. Nhưng cần chú ý journal mode (WAL vs DELETE) để tránh mất dữ liệu.            |
| **CSS thuần vẫn mạnh**           | Không cần framework CSS (Tailwind, Bootstrap) vẫn tạo được giao diện đẹp nhờ CSS Variables, Flexbox/Grid, Glassmorphism.                                     |
| **JavaScript thuần + Fetch API** | Không cần React/Vue cho SPA nhỏ — JavaScript thuần + Fetch API + DOM manipulation đủ dùng, nhẹ, dễ debug.                                                    |
| **Bảo mật từ đầu**               | Prepared statements, escapeHtml(), bcrypt nên làm từ đầu, không nên để sau mới thêm — rất tốn công refactor.                                                 |
| **Deploy sớm**                   | Deploy sớm (dù chưa đầy đủ tính năng) giúp phát hiện vấn đề môi trường sớm, tránh sốc deploy vào phút cuối.                                                  |

### 🚧 Bài học từ sai lầm

| Sai lầm                            | Hậu quả                                              | Bài học                                                                                         |
| ---------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Dùng WAL mode**                  | File WAL bị xóa → mất dữ liệu người dùng mới đăng ký | Hiểu rõ cơ chế của công nghệ mình dùng. WAL tốt cho performance nhưng cần checkpoint đúng cách. |
| **Thiếu validation backend**       | Có thể gửi request giả mạo qua Postman               | Luôn validate cả client lẫn server — client cho UX, server cho security.                        |
| **Không có index CSDL**            | Query chậm dần khi dữ liệu lớn                       | Thiết kế index ngay từ đầu, không đợi "khi nào chậm thì thêm".                                  |
| **Phân chia chức năng chồng chéo** | Hai BE cùng sửa 1 file database.js → conflict Git    | Phân chia theo module, không theo layer.                                                        |

---

# Phần Phụ lục — Báo cáo cá nhân

---

## Phụ lục A — Thành viên 1 (Backend — Nhóm trưởng)

**Vai trò:** Backend Developer — Phụ trách: Auth, Flashcard CRUD, Reply & Notification, View Counter, Database Design & Migration.

**Các Middleware / Thư viện bên thứ 3 đã sử dụng:**

| Thư viện          | Lý do chọn                                                                                                                | Phiên bản |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | --------- |
| `better-sqlite3`  | Thay thế MySQL, synchronous API giúp code đơn giản, không callback hell. Hiệu năng cao hơn `sql.js` và `sqlite3` (async). | ^12.11.1  |
| `bcrypt`          | Thư viện mã hóa password uy tín, dùng thuật toán Blowfish, có built-in salt, chống rainbow table attack.                  | ^6.0.0    |
| `express-session` | Middleware quản lý session chuẩn của Express. Lưu session phía server, chỉ gửi session ID qua cookie.                     | ^1.19.0   |

**Giải thích luồng đi của dữ liệu từ Request đến Response (Ví dụ: Đăng ký tài khoản):**

```
📤 REQUEST:
Client gửi POST /api/auth/signup
Headers: { Content-Type: application/json }
Body: { username: "nguyen", email: "nguyen@test.com", password: "123456", confirmPassword: "123456" }

Dữ liệu đi qua các lớp:

1️⃣ Express nhận request
   → parse JSON body (express.json() middleware)
   → tạo/duy trì session (express-session middleware)
   → gắn session vào req.session

2️⃣ Router (src/routes/authRoutes.js)
   → khớp route POST /signup
   → gọi authController.signup()

3️⃣ AuthController.signup() (src/controllers/authController.js)
   a. Destructure req.body → { username, email, password, confirmPassword }
   b. Validate:
      - Tất cả field không được null
      - password === confirmPassword
      → Nếu lỗi: return res.status(400).json({ ok: false, msg: '...' })
   c. Kiểm tra trùng lặp:
      - db.execute('SELECT id FROM users WHERE username = ? OR email = ?', [username, email])
      → Nếu tồn tại: return res.status(409).json({ ok: false, msg: '...' })
   d. Hash password:
      - bcrypt.hash(password, 10) → hashedPassword (cost factor 10)
   e. INSERT vào CSDL:
      - db.execute('INSERT INTO users ...', [username, email, hashedPassword])
      → Wrapper database.js:
         • Phát hiện là INSERT (isInsertSQL)
         • stmt.run(...params) → { lastInsertRowid, changes }
         • Trả về [{ insertId, affectedRows }, result]

4️⃣ Database Wrapper (src/config/database.js)
   → Prepare statement (chống SQL injection)
   → stmt.run() trực tiếp vào SQLite file (synchronous)
   → Trả về fakeResult giống mysql2/promise

5️⃣ SQLite (data/web_login.db)
   → INSERT INTO users VALUES (...)
   → Trả về lastInsertRowid = [id mới]

📥 RESPONSE:
Server trả về:
Status: 201 Created
Body: { ok: true, msg: "Đăng ký thành công", userId: 15 }

Client nhận response qua:
   const result = await res.json();
   signupMsg.textContent = result.msg;
```

**Giải thích cách vận hành phần việc cá nhân:**

Vai trò của tôi tập trung vào backend — xây dựng và vận hành toàn bộ tầng xử lý logic phía server:

1. **Thiết kế CSDL (Database Design):**
   - Phân tích yêu cầu: auth (users), flashcard (collections + cards), social (comments + replies), tracking (page_views + view_logs), notification (notifications).
   - Thiết kế 9 bảng với đầy đủ primary keys, foreign keys, constraints (CHECK, UNIQUE), triggers.
   - Viết `init-db.js` để khởi tạo schema + seed data.

2. **Xây dựng Database Wrapper:**
   - Viết wrapper tương thích mysql2/promise để dễ dàng chuyển đổi giữa SQLite và MySQL.
   - Xử lý 3 loại SQL: SELECT → mảng rows, INSERT → {insertId, affectedRows}, UPDATE/DELETE → {affectedRows}.
   - Auto-migration: tự động thêm cột `is_locked` nếu chưa có.

3. **Auth System (3 endpoints):**
   - `POST /api/auth/signup`: Validate input → kiểm tra duplicate → hash password → insert DB → trả về kết quả.
   - `POST /api/auth/signin`: Query user → bcrypt.compare → tạo session → trả về thông tin user.
   - `POST /api/auth/signout`: Hủy session.
   - `GET /api/auth/me`: Kiểm tra session còn sống không.

4. **Flashcard CRUD (10 endpoints):**
   - Collections: GET list, GET by id, POST create, PUT update, DELETE.
   - Cards: POST add, PUT update, DELETE.
   - Ownership check: mọi thao tác đều kiểm tra `user_id` thuộc về user hiện tại.

5. **Reply & Notification:**
   - Admin reply → insert feedback_replies → tìm user từ comment → insert notification.
   - User GET notifications + đánh dấu đã đọc.

6. **View Counter:**
   - Cookie-based dedup (24h/visitor).
   - Upsert page_views + insert view_logs chi tiết.

---

## Phụ lục B — Thành viên 2 (Backend)

**Vai trò:** Backend Developer — Phụ trách: Comment & Contact, Admin Dashboard, User Management, Contents.

**Các Middleware / Thư viện bên thứ 3 đã sử dụng:**

| Thư viện  | Lý do chọn                                                                                                                                   | Phiên bản |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `ejs`     | Template engine đơn giản, cú pháp giống HTML thuần + JavaScript inline. Phù hợp cho admin dashboard cần render server-side với dữ liệu động. | ^6.0.1    |
| `express` | Framework web mạnh mẽ, cộng đồng lớn, middleware ecosystem phong phú. Express 5 hỗ trợ async error handling mặc định.                        | ^5.2.1    |

**Giải thích luồng đi của dữ liệu từ Request đến Response (Ví dụ: Gửi Contact):**

```
📤 REQUEST:
Client gửi POST /api/comments/contact
Body: { fullName: "Nguyễn Văn A", email: "a@test.com", message: "Sản phẩm rất tốt!" }

1️⃣ Express nhận request → express.json() parse body → gắn req.body

2️⃣ Router (src/routes/comment.js)
   → khớp route POST /contact (không cần auth)
   → gọi commentController.addContactComment()

3️⃣ CommentController.addContactComment():
   Validate: check fullName, email, message không được null
   → Nếu thiếu: return 400 { success: false, message: '...' }

   Không cần auth → lưu vào comments với contentId='contact'
   → db.query('INSERT INTO comments (contentId, username, email, content, rating) VALUES (?, ?, ?, ?, ?)',
              ['contact', fullName, email, message, 5])

4️⃣ Database Wrapper → prepare → run → trả về insertId

📥 RESPONSE:
Status: 200
Body: { success: true, message: "Cảm ơn bạn đã đánh giá!" }
```

**Giải thích cách vận hành phần việc cá nhân:**

1. **Comment CRUD:**
   - `POST /api/comments`: User đã đăng nhập gửi bình luận với contentId, content, rating. Validate rating (1–5), insert CSDL, trả về comment đã tạo.
   - `GET /api/comments/:contentId`: Trả về danh sách bình luận theo contentId, sắp xếp mới nhất.
   - `POST /api/comments/contact`: Không cần auth, lưu contact form.

2. **Admin Dashboard (EJS views):**
   - `GET /admin`: Render dashboard với thống kê (tổng lượt xem, tổng comments) + danh sách 20 comments gần nhất kèm trạng thái phản hồi (LEFT JOIN feedback_replies).
   - `DELETE /admin/comment/:id`: Xóa comment.
   - `GET /admin/edit/:id`: Form sửa nội dung.
   - `GET /admin/users`: Render trang quản lý user.

3. **User Management (Admin only):**
   - `GET /api/users/list`: Danh sách user (id, username, email, role, is_locked, created_at).
   - `PUT /api/users/toggle-lock/:id`: Khóa/Mở user.
   - `DELETE /api/users/delete/:id`: Xóa user (chặn xóa admin).
   - `POST /api/users/reset-password/:id`: Reset password về "123456" (bcrypt hash).

4. **Contents:**
   - `GET /api/contents`: Trả về sample flashcards cho frontend hiển thị.

---

## Phụ lục C — Thành viên 3 (Frontend)

**Vai trò:** Frontend Developer — Phụ trách: Thư viện SPA, Học Flashcard 3D, Bình luận, Notification UI.

**Các Middleware / Thư viện bên thứ 3 đã sử dụng:**

| Thành phần                        | Lý do chọn                                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Fetch API** (Web API built-in)  | Không cần thư viện AJAX (jQuery.ajax, axios). Fetch API có sẵn trong mọi trình duyệt hiện đại, promise-based, dùng async/await. |
| **CSS `perspective` + `rotateY`** | Tạo hiệu ứng 3D lật thẻ mà không cần thư viện JavaScript (three.js, anime.js). Thuần CSS, performance tốt nhờ GPU acceleration. |
| **CSS Variables**                 | Định nghĩa theme màu sắc tập trung. Dễ dàng thay đổi toàn bộ giao diện chỉ bằng cách sửa vài biến.                              |

**Giải thích luồng đi của dữ liệu từ Request đến Response (Ví dụ: Học Flashcard):**

```
📤 REQUEST:
User click "📖 Học" → window.location.href = 'flashcard.html?id=3'

1️⃣ HTML load → flashcard.js khởi tạo:
   const urlParams = new URLSearchParams(window.location.search);
   const collectionId = urlParams.get('id'); // "3"

2️⃣ Gọi API:
   const res = await fetch('/api/flashcards/3');
   const data = await res.json();

3️⃣ Server xử lý:
   Router → flashcardController.getCollectionById()
   → findOwnedCollection(3, userId) kiểm tra quyền sở hữu
   → SELECT * FROM flashcard_cards WHERE collection_id = 3
   → Trả về { success: true, collection: { ...cards } }

📥 RESPONSE:
{
  success: true,
  collection: {
    id: 3,
    name: "Thời tiết",
    cards: [
      { id: 6, term: "Sunny", definition: "Nắng" },
      { id: 7, term: "Rainy", definition: "Mưa" },
      ...
    ]
  }
}

📱 Frontend render:
   renderCurrentCard():
     - Cập nhật progress: "Thẻ 1 / 4"
     - termElement.textContent = cards[currentIndex].term
     - definitionElement.textContent = cards[currentIndex].definition
     - Reset class "flipped" (thẻ về mặt trước)

🔄 User click vào thẻ:
   toggleFlipCard():
     cardElement.classList.toggle('flipped')
     → CSS: .flipped { transform: rotateY(180deg) }
     → transition: 0.75s ease → hiệu ứng lật mượt
```

**Giải thích cách vận hành phần việc cá nhân:**

1. **Thư viện Flashcard SPA (library1.js — ~643 dòng):**
   - **Khởi tạo trang:** `init()` gọi 2 API song song — `GET /api/flashcards` (user collections) và `GET /api/contents` (sample từ seed).
   - **Render grid:** Tạo card HTML cho mỗi collection, hiển thị tên, số thẻ, trạng thái, 2 nút Sửa/Xóa.
   - **Chọn bộ học:** Click vào collection → thêm class `.selected` → bật nút "Học" và "Sửa".
   - **Tạo bộ mới:** Modal → POST API → chuyển sang Editor.
   - **Editor SPA:** 2 textarea cho term/definition, danh sách thẻ đã tạo, nút Thêm/Sửa/Xóa từng thẻ.
   - **SPA navigation:** `showPage(name)` — hide/show 3 page (home/editor/account) qua class `active`.
   - **Account info:** `GET /api/auth/me` → hiển thị avatar, username, email.
   - **Notification badge:** `GET /api/notifications` → hiển thị số chưa đọc + dropdown danh sách + modal chi tiết + "Đánh dấu đã đọc".

2. **Học Flashcard (flashcard.js):**
   - Lấy `id` từ URL → fetch API → render thẻ đầu tiên.
   - Hiệu ứng 3D flip bằng CSS: `perspective: 1200px` + `rotateY(180deg)` + `backface-visibility: hidden`.
   - Điều hướng vòng tròn: thẻ cuối → next = thẻ đầu.
   - Trạng thái học: "Đã nhớ" / "Quên" (CSS class active để chuẩn bị cho spaced repetition sau này).

3. **Bình luận (comment.js):**
   - Bộ lọc từ xấu (blacklist array) — thay thế từ xấu bằng `***`.
   - XSS escape: `escapeHtml()` thay thế `< > & ' "` bằng HTML entities.
   - Fetch API gửi comment với rating (1–5 sao).

4. **CSS nâng cao:**
   - Glassmorphism: `background: rgba(...)`, `backdrop-filter: blur()`.
   - 3D card flip: `perspective: 1200px`, `transform-style: preserve-3d`, `backface-visibility: hidden`.
   - Notification badge pulse animation: `@keyframes pulse`.
   - Grid responsive: `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`.

---

## Phụ lục D — Thành viên 4 (Frontend)

**Vai trò:** Frontend Developer — Phụ trách: Landing Page, Login/Register UI, Contact Page, About Us, CSS Theme & Animation.

**Các Middleware / Thư viện bên thứ 3 đã sử dụng:**

| Thành phần                                                       | Lý do chọn                                                                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **`cookie-parser`** (middleware phía server, ảnh hưởng frontend) | Cho phép server đọc/ghi cookie dễ dàng. Dùng để tracking visitor và ngăn đếm lượt xem trùng lặp.                                      |
| **Ionicons** (icon library via CDN)                              | Thư viện icon nhẹ, MIT license, dùng custom element `<ion-icon>`. Cung cấp icon social (Facebook, YouTube, TikTok) cho trang Contact. |
| **Google Fonts (Poppins)**                                       | Font chữ hiện đại, readable, hỗ trợ tiếng Việt đầy đủ. Dùng làm font chính cho toàn bộ website.                                       |

**Giải thích luồng đi của dữ liệu từ Request đến Response (Ví dụ: Đăng nhập):**

```
📤 REQUEST:
User điền form Sign In:
   Username: "admin" | Password: "admin123"
→ Click "Sign In"

📱 Frontend (login.js):
   e.preventDefault() // chặn form reload
   fetch('/api/auth/signin', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ username: 'admin', password: 'admin123' })
   })

🖥️ Server xử lý:
   authController.signin():
     1. SELECT id, username, email, password, role FROM users WHERE username = ?
        → Tìm thấy user "admin" (id=14, role='admin')
     2. bcrypt.compare('admin123', hashedPassword)
        → match = true
     3. req.session.user = { id: 14, username: 'admin', role: 'admin' }
     4. res.json({ ok: true, user: { id:14, username:'admin', email:'...', role:'admin' } })

📥 RESPONSE:
   { ok: true, msg: "Đăng nhập thành công", user: { id:14, username:'admin', role:'admin', email:'admin@test.com' } }

📱 Frontend nhận response:
   if (result.ok) {
     if (result.user.role === 'admin') {
       window.location.href = '/admin';      // → Admin Dashboard
     } else {
       window.location.href = '/pages/library1.html';  // → User Library
     }
   }
```

**Giải thích cách vận hành phần việc cá nhân:**

1. **Landing Page (index.html + home.css + home.js):**
   - **Navbar:** Fixed top, glassmorphism (`backdrop-filter: blur(10px)`), hamburger menu cho mobile (checkbox hack — không cần JavaScript để toggle).
   - **Hero section:** Gradient background (#212842 → #2a3a5c), tiêu đề lớn, mô tả, nút CTA "Start Flashcard".
   - **View tracking:** Inline script — `setTimeout` 2 phút → `POST /api/views/track-homepage-view`. Nếu user rời trang trước 2 phút (`beforeunload`), hủy timeout, không tính view.
   - **Quiz popup:** `home.js` xử lý open/close modal với blur overlay.

2. **Login/Register UI (login.html + login.css + login.js):**
   - **Container:** 800x500px, chia 2 phần: `blueBG` (hiệu ứng mờ) và `form-box` (trắng).
   - **Animation:** Khi click Register/SignIn, `form-box` trượt qua lại bằng CSS `translateX`, kết hợp `z-index` và `transition 0.8s ease`.
   - **Body dark mode:** Khi ở form đăng ký, body chuyển sang nền tối (#212842).
   - **Form validation:** HTML5 `required`, server-side validate duplicate username/email.
   - **Role-based redirect:** Sau đăng nhập thành công, tự động chuyển hướng theo role (admin → /admin, user → /pages/library1.html).

3. **Contact Page (contact.html + contact.css):**
   - **Split layout:** Cột trái (40%) hiển thị địa chỉ, phone, email + icon social. Cột phải (60%) là form liên hệ.
   - **Floating labels:** Label ẩn/hiện khi input focus/có giá trị (CSS `:focus` + `:valid` pseudo-class).
   - **Form submit:** Fetch API gọi `POST /api/comments/contact` với `{ fullName, email, message, rating: 5 }`.
   - **Ionicons:** Icon cho địa chỉ (`<ion-icon name="location-outline">`), phone, email, social media.

4. **About Us (about_us.html + about_us.css + about_us.js):**
   - **50/50 layout:** Trái ảnh nền (`nen.jpg` với `background-size: cover`), phải nội dung giới thiệu.
   - **Fade-in animation:** JS set `opacity: 0` → `requestAnimationFrame` → `opacity: 1` trong 1s (`transition: opacity 1s ease`).
   - **Responsive:** Media queries cho mobile — chuyển từ 2 cột sang 1 cột (ảnh lên trên, nội dung xuống dưới).

5. **Đóng góp CSS tổng thể:**
   - Theme nhất quán: dùng màu `#212842` (xanh đậm) làm primary color, kết hợp gradient, glassmorphism.
   - Typography: Font Poppins, hierarchy rõ ràng (h1 → h2 → h3 → p).
   - Responsive: Media queries cho tablet (768px) và mobile (480px).

---

## Hướng dẫn lưu file báo cáo

Để hoàn thiện bài nộp, bạn cần tách các phần sau thành file riêng:

### File chính

```
📁 Nhóm_Group01_ltweb/
│
├── group01_ltweb_he-thong-hoc-tap-thong-minh-qua-flashcard.docx
│   (Báo cáo tổng hợp — toàn bộ nội dung ở trên, chuyển sang .docx)
│
├── group01_MSSV1_ind_rapport.docx  — Phụ lục A (Thành viên 1 - BE)
├── group01_MSSV2_ind_rapport.docx  — Phụ lục B (Thành viên 2 - BE)
├── group01_MSSV3_ind_rapport.docx  — Phụ lục C (Thành viên 3 - FE)
├── group01_MSSV4_ind_rapport.docx  — Phụ lục D (Thành viên 4 - FE)
│
├── 📁 source-code/
│   └── (toàn bộ source code của project)
│
└── 📁 screenshots/
    └── (ảnh chụp màn hình các chức năng)
```

### Lưu ý

1. **Tên file:** Đúng format `group01_ltweb_[tên đề tài].docx`
2. **File phụ lục riêng:** Mỗi thành viên một file `groupxx_mssv_ind_rapport.docx`
3. **Chuyển đổi Markdown → Word:** Dùng Pandoc hoặc Google Docs (import .md → export .docx)
4. **Chèn ảnh:** Tìm các dòng `[Chèn ảnh chụp ...]` trong báo cáo và chèn screenshot tương ứng.

---

> _📝 Báo cáo được tạo bởi nhóm Group01_ltweb — Học kỳ [X] năm học 2025–2026_
>
> _Công cụ hỗ trợ: Claude Code (Anthropic) — viết báo cáo dựa trên phân tích mã nguồn thực tế_
