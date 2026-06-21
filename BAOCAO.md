# BÁO CÁO BÀI TẬP LỚN CUỐI KỲ

## MÔN: THIẾT KẾ VÀ LẬP TRÌNH WEB

---

<div align="center">

# FLASH STUDY — HỆ THỐNG HỌC TẬP FLASHCARD TRỰC TUYẾN

**Mã đề tài:** _Web_Flashcard_Study_

**Giảng viên hướng dẫn:** _Nguyễn Việt Tùng_

**Học kỳ:** _2 — Năm học 2025–2026_

---

### 🏫 TRƯỜNG ĐẠI HỌC BÁCH KHOA

### 🎓 KHOA KHOA HỌC VÀ CÔNG NGHỆ GIÁO DỤC

---

### 👥 THÀNH VIÊN NHÓM

| STT | Họ và tên                |  Mã số SV   | Vai trò                      | Công việc đảm nhận                                                                                                                                                                                     |
| :-: | :----------------------- | :---------: | :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | **Nguyễn Lê Hồng Nhung** | _202411982_ | **Frontend Leader**          | Thiết kế UI/UX, xây dựng Layout & Header/Footer dùng chung, xử lý Responsive (breakpoints 800px, 1200px), thiết kế hiệu ứng CSS (box-shadow, transition, animation 3D flip card)                       |
|  2  | **Lê Mạnh Đức**          |  _[MSSV]_   | **Frontend JS Developer**    | Xử lý logic Client (JavaScript), code AJAX/Fetch API cho hệ thống bình luận, xử lý Popup hướng dẫn Quiz và tương tác trang, điều hướng SPA (Single Page Application) |
|  3  | **Đinh Thu Thảo**        |  _[MSSV]_   | **Backend Leader**           | Thiết kế kiến trúc Server (Express.js), hệ thống Route, xây dựng Middleware (Auth, ViewCounter), quản lý luồng Request-Response và thiết kế hệ thống API                                               |
|  4  | **Nguyễn Vân Thương**    |  _[MSSV]_   | **Backend Database & Admin** | Thiết kế Cơ sở dữ liệu MySQL (4 bảng: users, comments, contents, page_views), thực hiện các thao tác CRUD, xây dựng trang Quản trị (Admin Dashboard), thống kê lượt view                               |

### 📋 BẢNG PHÂN CÔNG NHIỆM VỤ CHI TIẾT

| Thành viên           | Công việc                                      | File/Module liên quan                                     | Mức độ |
| :------------------- | ---------------------------------------------- | :-------------------------------------------------------- | -----: |
| Nguyễn Lê Hồng Nhung | Thiết kế UI/UX tổng thể, Layout Header/Navbar  | `index.html`, `home.css`, `library1.css`, `flashcard.css` |   100% |
| Nguyễn Lê Hồng Nhung | Responsive Design (breakpoints 800px, 1200px)  | `home.css`, `library1.css`, `login.css`, `about_us.css`   |   100% |
| Nguyễn Lê Hồng Nhung | Hiệu ứng CSS (box-shadow, transition, 3D flip) | `flashcard.css`, `home.css`, `admin.css`                  |   100% |
| Lê Mạnh Đức          | Xử lý AJAX/Fetch bình luận                     | `comment.js`, `commentController.js`                      |   100% |
| Lê Mạnh Đức          | Bộ lọc từ xấu (Bad Words Filter)               | `comment.js`                                              |   100% |
| Lê Mạnh Đức          | Popup Quiz, tương tác Client                   | `home.js`, `login.js`                                     |   100% |
| Lê Mạnh Đức          | Xử lý đăng nhập/đăng ký phía Client            | `login.js`                                                |   100% |
| Lê Mạnh Đức          | Quản lý Flashcard LocalStorage (SPA)           | `library1.js`, `flashcard.js`                             |   100% |
| Đinh Thu Thảo        | Thiết kế kiến trúc Server (Express.js)         | `server.js`                                               |   100% |
| Đinh Thu Thảo        | Hệ thống Route & API endpoints                 | `routes/*`, `server.js`                                   |   100% |
| Đinh Thu Thảo        | Middleware Auth & ViewCounter                  | `middleware/auth.js`, `middleware/viewCounter.js`         |   100% |
| Đinh Thu Thảo        | Xử lý Session & Authentication                 | `authController.js`, `authRoutes.js`                      |   100% |
| Nguyễn Vân Thương    | Thiết kế CSDL MySQL (4 bảng)                   | `config/database.js`, `database.sql`                      |   100% |
| Nguyễn Vân Thương    | CRUD operations (Thêm/Sửa/Xóa)                 | `adminController.js`, `commentController.js`              |   100% |
| Nguyễn Vân Thương    | Trang Admin Dashboard & Thống kê               | `admin/*.ejs`, `adminController.js`                       |   100% |
| Nguyễn Vân Thương    | Quản lý nội dung Flashcard                     | `adminController.js`, `content.js`                        |   100% |

</div>

---

## PHẦN 1: GIỚI THIỆU & TỔNG KẾT

### 1.1. Mô tả đề tài

**Flash Study** là một hệ thống web học tập thông minh cho phép người dùng tạo, quản lý và học các bộ thẻ ghi nhớ (flashcard) trực tuyến. Dự án được xây dựng theo mô hình **Client-Server** với kiến trúc **MVC (Model-View-Controller)**, sử dụng **Node.js** và **Express.js** làm nền tảng backend, **MySQL** làm cơ sở dữ liệu, và **HTML5/CSS3/JavaScript** thuần cho frontend.

### 1.2. Các chức năng đã hoàn thành

|  #  | Chức năng                                                 | Phân loại      |  Trạng thái   |
| :-: | :-------------------------------------------------------- | -------------- | :-----------: |
|  1  | Đăng ký tài khoản người dùng mới                          | Authentication | ✅ Hoàn thành |
|  2  | Đăng nhập với phân quyền Admin / User                     | Authentication | ✅ Hoàn thành |
|  3  | Đăng xuất, hủy Session                                    | Authentication | ✅ Hoàn thành |
|  4  | Hiển thị danh sách bộ sưu tập Flashcard                   | Học tập        | ✅ Hoàn thành |
|  5  | Tạo bộ sưu tập Flashcard mới (lưu LocalStorage)           | Học tập        | ✅ Hoàn thành |
|  6  | Thêm/Sửa/Xóa thẻ trong bộ sưu tập                         | Học tập        | ✅ Hoàn thành |
|  7  | Học Flashcard với hiệu ứng lật thẻ 3D                     | Học tập        | ✅ Hoàn thành |
|  8  | Đánh dấu trạng thái "Nhớ rồi" / "Chưa nhớ"                | Học tập        | ✅ Hoàn thành |
|  9  | Xem trang About Us                                        | Giới thiệu     | ✅ Hoàn thành |
| 10  | Gửi phản hồi qua Contact Form (AJAX)                      | Liên hệ        | ✅ Hoàn thành |
| 11  | Bình luận + đánh giá sao (AJAX, không tải lại trang)      | Tương tác      | ✅ Hoàn thành |
| 12  | Lọc từ xấu khi bình luận (Bad Words Filter)               | Kiểm duyệt     | ✅ Hoàn thành |
| 13  | Popup hướng dẫn Quiz                                      | UI/UX          | ✅ Hoàn thành |
| 14  | Admin Dashboard — Thống kê lượt xem, bình luận, flashcard | Quản trị       | ✅ Hoàn thành |
| 15  | Admin — Xóa bình luận (AJAX)                              | Quản trị       | ✅ Hoàn thành |
| 16  | Admin — Sửa nội dung Flashcard (CRUD - Update)            | Quản trị       | ✅ Hoàn thành |
| 17  | Đếm lượt xem Homepage (sau 2 phút ở lại trang)            | Analytics      | ✅ Hoàn thành |
| 18  | Responsive Design (breakpoints: 800px, 1200px)            | UI/UX          | ✅ Hoàn thành |
| 19  | Menu Mobile thu gọn (Hamburger)                           | UI/UX          | ✅ Hoàn thành |
| 20  | Hiệu ứng Glassmorphism, 3D Flip, Transition               | UI/UX          | ✅ Hoàn thành |
| 21  | Chống XSS (Cross-Site Scripting)                          | Bảo mật        | ✅ Hoàn thành |
| 22  | Mã hóa mật khẩu bằng bcrypt                               | Bảo mật        | ✅ Hoàn thành |

### 1.3. Bảng tổng kết kỹ thuật

| Kỹ thuật              | Công nghệ / Phương pháp                                  | Mô tả                                                       |   Người phụ trách    |
| :-------------------- | -------------------------------------------------------- | :---------------------------------------------------------- | :------------------: |
| **CSS nâng cao**      | Flexbox, Grid, Glassmorphism, 3D Transform               | Thiết kế giao diện hiện đại, hiệu ứng lật thẻ và responsive | Nguyễn Lê Hồng Nhung |
| **Responsive**        | Media Queries (800px, 1200px, 768px, 720px)              | Tương thích đa thiết bị (Desktop, Tablet, Mobile)           | Nguyễn Lê Hồng Nhung |
| **JavaScript Client** | Fetch API, DOM Manipulation, LocalStorage                | Xử lý tương tác người dùng, gọi API bất đồng bộ             |     Lê Mạnh Đức      |
| **AJAX / Fetch**      | RESTful API + JSON                                       | Bình luận, Contact Form, CRUD Admin không tải lại trang     |     Lê Mạnh Đức      |
| **Filter từ xấu**     | Blacklist + String Matching                              | Kiểm tra nội dung bình luận trước khi gửi                   |     Lê Mạnh Đức      |
| **Middleware**        | isAuthenticated, isAdmin, trackHomepageView              | Kiểm soát truy cập và ghi nhận lượt xem                     |    Đinh Thu Thảo     |
| **Form & Validation** | HTML5 Validation, JavaScript Validation                  | Xác thực dữ liệu đầu vào phía Client và Server              |    Đinh Thu Thảo     |
| **Session & Cookie**  | express-session                                          | Duy trì trạng thái đăng nhập, phân quyền                    |    Đinh Thu Thảo     |
| **API RESTful**       | Express Router, CRUD endpoints                           | Thiết kế API theo chuẩn REST                                |    Đinh Thu Thảo     |
| **CSDL MySQL**        | mysql2, 4 tables (users, comments, contents, page_views) | Lưu trữ và truy xuất dữ liệu                                |  Nguyễn Vân Thương   |
| **CRUD**              | INSERT, SELECT, UPDATE, DELETE                           | Thao tác dữ liệu đầy đủ (Tạo, Đọc, Sửa, Xóa)                |  Nguyễn Vân Thương   |
| **Admin Dashboard**   | EJS Template, Thống kê tổng hợp                          | Giao diện quản trị với số liệu trực quan                    |  Nguyễn Vân Thương   |
| **Mã hóa**            | bcrypt (hash password 10 rounds)                         | Bảo vệ mật khẩu người dùng                                  |    Đinh Thu Thảo     |
| **Chống XSS**         | escapeHtml(), Sanitize đầu ra                            | Ngăn chặn tấn công Cross-Site Scripting                     |     Lê Mạnh Đức      |

---

## PHẦN 2: THIẾT KẾ HỆ THỐNG & CODE

### 2.1. Sơ đồ kiến trúc hệ thống (Client-Server)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                          CLIENT (Trình duyệt)                                │
│                                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌─────────────────────┐   │
│  │  index.html │  │  login.html│  │library1.html│  │  flashcard.html     │   │
│  │  (Home)     │  │  (Auth)    │  │(Library)   │  │  (Học tập)          │   │
│  └──────┬──────┘  └──────┬─────┘  └──────┬─────┘  └──────────┬──────────┘   │
│         │                │               │                   │              │
│  ┌──────┴────────────────┴───────────────┴───────────────────┴──────────┐   │
│  │                      CSS Stylesheets (*.css)                         │   │
│  │          (home.css, login.css, library1.css, flashcard.css,          │   │
│  │           about_us.css, contact.css, admin.css)                      │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                    JavaScript Client (*.js)                           │   │
│  │  (home.js, login.js, library1.js, flashcard.js, comment.js,          │   │
│  │   about_us.js, admin.js)                                             │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                           │  ▲                                              │
│           HTTP Request    │  │    JSON / HTML Response                      │
│           (fetch/AJAX)    │  │                                              │
└───────────────────────────┼──┼──────────────────────────────────────────────┘
                            │  │
┌───────────────────────────┼──┼──────────────────────────────────────────────┐
│                    SERVER (Node.js + Express.js)                            │
│                           │  │                                              │
│  ┌────────────────────────┴──┴──────────────────────────────────────────┐   │
│  │                         server.js                                     │   │
│  │      (Khởi tạo Express, Session, Static Files, Routing)              │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                           │                                                  │
│          ┌────────────────┼────────────────────┐                            │
│          ▼                ▼                    ▼                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────┐                    │
│  │  Middleware   │ │   Routes     │ │   Static Files   │                    │
│  │  (auth.js,   │ │  (admin.js,  │ │   (/public)      │                    │
│  │  viewCounter)│ │  authRoutes, │ │   CSS, JS, IMG,  │                    │
│  │              │ │  comment.js, │ │   pages/*.html   │                    │
│  │              │ │  viewRoutes) │ │                  │                    │
│  └──────┬───────┘ └──────┬───────┘ └──────────────────┘                    │
│         │                │                                                  │
│         ▼                ▼                                                  │
│  ┌─────────────────────────────────────────────┐                           │
│  │            Controllers                       │                           │
│  │  ┌────────────────┐ ┌─────────────────┐      │                           │
│  │  │ authController  │ │ adminController  │      │                           │
│  │  │ (signup, signin,│ │ (dashboard, CRUD)│      │                           │
│  │  │  signout, me)   │ │                  │      │                           │
│  │  └────────────────┘ └─────────────────┘      │                           │
│  │  ┌────────────────┐ ┌─────────────────┐      │                           │
│  │  │commentController│ │  viewCounter    │      │                           │
│  │  │(add, getComments)│ │  (recordView,  │      │                           │
│  │  │                 │ │   getViews)     │      │                           │
│  │  └────────────────┘ └─────────────────┘      │                           │
│  └─────────────────────────────────────────────┘                           │
│                         │                                                   │
│                         ▼                                                   │
│  ┌─────────────────────────────────────────────┐                           │
│  │         Models (Cấu trúc Database)           │                           │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐     │                           │
│  │  │ user.js   │ │comment.js│ │content.js│     │                           │
│  │  └──────────┘ └──────────┘ └──────────┘     │                           │
│  └──────────────┬──────────────────────────────┘                            │
│                 │                                                           │
│                 ▼                                                           │
│  ┌─────────────────────────────────────────────┐                           │
│  │         Database Config (database.js)        │                           │
│  │         MySQL2 Connection Pool               │                           │
│  └─────────────────────────────────────────────┘                           │
└──────────────────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                      MySQL Database (web_login_db)                          │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │    users      │  │   comments   │  │   contents   │  │  page_views  │    │
│  │──────────────│  │──────────────│  │──────────────│  │──────────────│    │
│  │ id (PK)      │  │ id (PK)      │  │ id (PK)      │  │ id (PK)      │    │
│  │ username (UQ)│  │ contentId    │  │ title        │  │ page_url     │    │
│  │ email (UQ)   │  │ username     │  │ body         │  │ view_date    │    │
│  │ password     │  │ content      │  │ type         │  │ view_count   │    │
│  │ role (E: A/U)│  │ rating       │  │ createdAt    │  │ (UNIQUE:     │    │
│  │ created_at   │  │ createdAt    │  │              │  │  url+date)   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2.2. Cây thư mục dự án

```
📁 Team3web_flashcards_study/
│
├── 📄 server.js                    # File khởi tạo & chạy Server chính
│                                   # - Cấu hình Express, Session, View Engine
│                                   # - Mount Routes, Static Files
│                                   # - Lắng nghe trên cổng 3000
│
├── 📄 package.json                 # Cấu hình dự án, danh sách dependencies
│                                   # (express, ejs, mysql2, bcrypt, express-session)
│
├── 📄 database.sql                 # File dump CSDL MySQL (cấu trúc + dữ liệu mẫu)
│
├── 📄 index.html                   # Trang chủ (Homepage) - Landing page
│                                   # - Header với Navigation + Menu Mobile
│                                   # - Hero section với nút "Start Flashcard"
│                                   # - Script đếm thời gian ở lại trang (2 phút)
│
├── 📁 public/                      # Thư mục chứa tài nguyên tĩnh (Static Files)
│   │
│   ├── 📁 css/                     # Stylesheets (7 files)
│   │   ├── 📄 home.css             #   Style trang chủ - Glassmorphism, Responsive
│   │   ├── 📄 login.css            #   Style trang đăng nhập - Split form animation
│   │   ├── 📄 library1.css         #   Style thư viện - Sidebar, Grid, Modal
│   │   ├── 📄 flashcard.css        #   Style học flashcard - 3D Flip, Glassmorphism
│   │   ├── 📄 about_us.css         #   Style trang giới thiệu - Split layout
│   │   ├── 📄 contact.css          #   Style trang liên hệ - Form, Social icons
│   │   └── 📄 admin.css            #   Style Admin Dashboard - Stats cards, Table
│   │
│   ├── 📁 js/                      # JavaScript Client (7 files)
│   │   ├── 📄 home.js              #   Xử lý Popup Quiz hướng dẫn
│   │   ├── 📄 login.js             #   Đăng nhập/Đăng ký (Fetch API + Session)
│   │   ├── 📄 library1.js          #   Quản lý thư viện (LocalStorage SPA)
│   │   ├── 📄 flashcard.js         #   Học Flashcard (3D Flip, điều hướng)
│   │   ├── 📄 comment.js           #   Bình luận AJAX + Filter từ xấu
│   │   ├── 📄 about_us.js          #   Hiệu ứng Fade-in trang About
│   │   └── 📄 admin.js             #   Xóa bình luận (AJAX) trong Admin
│   │
│   ├── 📁 images/                  # Hình ảnh (3 files)
│   │   ├── 📄 auto-quiz.png        #   Logo trang
│   │   ├── 📄 google.png           #   Ảnh Google icon
│   │   └── 📄 nen.jpg              #   Nền trang About Us
│   │
│   └── 📁 pages/                   # Trang HTML tĩnh (5 files)
│       ├── 📄 login.html           #   Trang đăng nhập / đăng ký
│       ├── 📄 library1.html        #   Trang thư viện Flashcard
│       ├── 📄 flashcard.html       #   Trang học Flashcard
│       ├── 📄 about_us.html        #   Trang giới thiệu
│       └── 📄 contact.html         #   Trang liên hệ
│
├── 📁 src/                         # Source code Backend
│   │
│   ├── 📁 config/                  # Cấu hình
│   │   └── 📄 database.js          #   Kết nối MySQL (Pool) + Khởi tạo bảng
│   │                               #   - Tự động CREATE TABLE IF NOT EXISTS
│   │                               #   - Tạo tài khoản Admin mặc định
│   │                               #   - Thêm dữ liệu mẫu (contents, comments)
│   │
│   ├── 📁 middleware/              # Middleware (2 files)
│   │   ├── 📄 auth.js              #   isAuthenticated() - Kiểm tra đăng nhập
│   │   │                           #   isAdmin() - Kiểm tra quyền Admin
│   │   └── 📄 viewCounter.js       #   trackHomepageView() - Middleware đếm view
│   │                               #   recordHomepageView() - API ghi nhận lượt xem
│   │                               #   getHomepageViews() - Lấy tổng lượt xem
│   │
│   ├── 📁 controllers/             # Controllers - Xử lý logic nghiệp vụ (3 files)
│   │   ├── 📄 authController.js    #   signup, signin, signout, me (4 functions)
│   │   ├── 📄 adminController.js   #   Dashboard, deleteComment, CRUD content
│   │   └── 📄 commentController.js #   addComment, getCommentsByContent
│   │
│   ├── 📁 models/                  # Models - Định nghĩa cấu trúc dữ liệu (3 files)
│   │   ├── 📄 user.js              #   Cấu trúc bảng users (tham khảo)
│   │   ├── 📄 comment.js           #   Cấu trúc bảng comments (tham khảo)
│   │   └── 📄 content.js           #   Cấu trúc bảng contents (tham khảo)
│   │
│   └── 📁 routes/                  # Routes - Định tuyến API (4 files)
│       ├── 📄 authRoutes.js        #   POST /api/auth/signup, /signin, /signout
│       │                           #   GET /api/auth/me
│       ├── 📄 admin.js             #   GET /admin, /edit/:id, /edit-list
│       │                           #   DELETE /admin/comment/:id
│       │                           #   PUT /admin/edit/:id
│       ├── 📄 comment.js           #   POST /api/comments (cần auth)
│       │                           #   GET /api/comments/:contentId
│       │                           #   POST /api/comments/contact
│       └── 📄 viewRoutes.js        #   POST /api/views/track-homepage-view
│
├── 📁 views/                       # Template EJS (2 files)
│   └── 📁 admin/
│       ├── 📄 index.ejs            #   Admin Dashboard (Thống kê + Bảng comments)
│       └── 📄 edit.ejs             #   Form chỉnh sửa Flashcard
│
└── 📄 BAOCAO.md                    # Báo cáo bài tập lớn (file này)
```

### 2.3. Giải thích chi tiết nhiệm vụ các thành phần

#### 🖥️ Server (server.js)

- **Vai trò:** Điểm khởi đầu của ứng dụng, khởi tạo server Express.
- **Nhiệm vụ:** Cấu hình view engine EJS, mount middleware (session, view counter), đăng ký các route (admin, auth, comment, view), phục vụ file tĩnh từ thư mục `public/`, lắng nghe trên cổng 3000.

#### 🗄️ Database Config (src/config/database.js)

- **Vai trò:** Quản lý kết nối MySQL thông qua connection pool.
- **Nhiệm vụ:** Tự động tạo các bảng (`users`, `comments`, `contents`, `page_views`) khi server khởi động. Tạo tài khoản admin mặc định (`admin/123456`) và thêm dữ liệu mẫu nếu chưa có.

#### 🛡️ Middleware (src/middleware/)

- **`auth.js`:** Cung cấp 2 middleware: `isAuthenticated` (kiểm tra đăng nhập) và `isAdmin` (kiểm tra quyền admin). Được áp dụng cho các route cần bảo vệ.
- **`viewCounter.js`:** Cung cấp middleware `trackHomepageView` (đánh dấu lượt xem) và các hàm `recordHomepageView` / `getHomepageViews` để ghi nhận và thống kê lượt xem.

#### 🎮 Controllers (src/controllers/)

- **authController.js:** Xử lý logic đăng ký (kiểm tra trùng, hash password), đăng nhập (xác thực, tạo session), đăng xuất (hủy session), lấy thông tin user hiện tại.
- **adminController.js:** Xử lý hiển thị dashboard (thống kê số liệu), CRUD nội dung flashcard, xóa bình luận.
- **commentController.js:** Xử lý thêm bình luận mới (kiểm tra session, validate rating) và lấy danh sách bình luận theo contentId.

#### 🧭 Routes (src/routes/)

- **`/api/auth`:** API xác thực (signup, signin, signout, me).
- **`/admin`:** Trang quản trị (yêu cầu quyền admin) bao gồm dashboard, quản lý nội dung.
- **`/api/comments`:** API bình luận (thêm, lấy danh sách, contact form).
- **`/api/views`:** API ghi nhận lượt xem.

#### 🎨 Frontend (public/)

- **CSS (7 files):** Mỗi trang có một file CSS riêng, thiết kế đồng bộ về màu sắc (chủ đạo: `#c3d3f3` - xanh pastel, `#212842` - xanh đậm). Sử dụng Flexbox, Grid, Glassmorphism, 3D Transform.
- **JavaScript (7 files):** Xử lý tương tác client. Sử dụng Fetch API cho các thao tác bất đồng bộ. LocalStorage cho quản lý bộ sưu tập flashcard.
- **HTML (5 pages + index.html):** Các trang tĩnh phục vụ người dùng.

#### 📝 Views (views/)

- **admin/index.ejs:** Template Dashboard Admin hiển thị thống kê (lượt xem, số bình luận, số flashcard) và bảng quản lý bình luận.
- **admin/edit.ejs:** Template form chỉnh sửa nội dung flashcard, sử dụng Fetch API để gửi dữ liệu lên server.

### 2.4. Cơ sở dữ liệu (Chi tiết)

Hệ thống sử dụng **MySQL** với 4 bảng:

#### Bảng `users`

| Field      | Type                 | Ràng buộc                   | Mô tả                     |
| :--------- | -------------------- | :-------------------------- | :------------------------ |
| id         | INT                  | PRIMARY KEY, AUTO_INCREMENT | Mã người dùng             |
| username   | VARCHAR(50)          | NOT NULL, UNIQUE            | Tên đăng nhập             |
| email      | VARCHAR(100)         | NOT NULL, UNIQUE            | Email                     |
| password   | VARCHAR(255)         | NOT NULL                    | Mật khẩu (đã hash bcrypt) |
| role       | ENUM('admin','user') | DEFAULT 'user'              | Phân quyền                |
| created_at | TIMESTAMP            | DEFAULT CURRENT_TIMESTAMP   | Ngày tạo                  |

#### Bảng `comments`

| Field     | Type         | Ràng buộc                   | Mô tả                      |
| :-------- | ------------ | :-------------------------- | :------------------------- |
| id        | INT          | PRIMARY KEY, AUTO_INCREMENT | Mã bình luận               |
| contentId | VARCHAR(100) | NOT NULL                    | ID nội dung được bình luận |
| username  | VARCHAR(50)  | NOT NULL                    | Người bình luận            |
| content   | TEXT         | NOT NULL                    | Nội dung bình luận         |
| rating    | INT          | DEFAULT 5                   | Đánh giá sao (1-5)         |
| createdAt | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | Ngày tạo                   |

#### Bảng `contents`

| Field     | Type         | Ràng buộc                   | Mô tả              |
| :-------- | ------------ | :-------------------------- | :----------------- |
| id        | INT          | PRIMARY KEY, AUTO_INCREMENT | Mã nội dung        |
| title     | VARCHAR(200) | NOT NULL                    | Tiêu đề flashcard  |
| body      | TEXT         | NOT NULL                    | Nội dung flashcard |
| type      | VARCHAR(50)  | DEFAULT 'flashcard'         | Loại nội dung      |
| createdAt | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | Ngày tạo           |

#### Bảng `page_views`

| Field      | Type         | Ràng buộc                   | Mô tả                    |
| :--------- | ------------ | :-------------------------- | :----------------------- |
| id         | INT          | PRIMARY KEY, AUTO_INCREMENT | Mã lượt xem              |
| page_url   | VARCHAR(255) | NOT NULL                    | URL trang                |
| view_date  | DATE         | NOT NULL                    | Ngày xem                 |
| view_count | INT          | DEFAULT 1                   | Số lượt xem              |
|            |              | UNIQUE(page_url, view_date) | Mỗi URL+ngày là duy nhất |

### 2.5. Hướng dẫn vận hành

#### Yêu cầu hệ thống

- **Node.js:** v18.x trở lên
- **MySQL:** v8.0 trở lên
- **npm:** v9.x trở lên

#### Các bước cài đặt và chạy

```bash
# Bước 1: Clone dự án về máy
git clone <url-dự-an>
cd Team3web_flashcards_study

# Bước 2: Cài đặt các dependencies
npm install

# Bước 3: Tạo Database MySQL
# - Mở MySQL Workbench hoặc command line
# - Tạo database:
CREATE DATABASE web_login_db CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

# Bước 4: Cấu hình kết nối database
# Mở file src/config/database.js, kiểm tra thông số:
#   host: 'localhost'
#   user: 'root'
#   password: '123456'    ← Sửa mật khẩu MySQL của bạn tại đây
#   database: 'web_login_db'

# Bước 5: (Tùy chọn) Import dữ liệu mẫu từ file SQL
# mysql -u root -p web_login_db < database.sql

# Bước 6: Khởi động server
node server.js

# Bước 7: Mở trình duyệt và truy cập
#   http://localhost:3000

# Tài khoản mặc định:
#   Admin:  admin / 123456
#   User:   user  / 123456  (hoặc đăng ký mới)
```

> **Lưu ý:** Khi chạy `node server.js`, hệ thống sẽ **tự động** tạo các bảng cần thiết nếu chưa tồn tại, đồng thời thêm tài khoản admin mặc định và dữ liệu mẫu (flashcard, bình luận) nếu database chưa có dữ liệu.

#### Cấu trúc file .env (nếu cần)

Hiện tại dự án chưa sử dụng file `.env`, các thông số cấu hình nằm trực tiếp trong `src/config/database.js`. Có thể nâng cấp lên sử dụng biến môi trường trong tương lai.

---

## PHẦN 3: DEMO CHỨC NĂNG

### 3.1. Chức năng Đăng nhập & Phân quyền (Admin / User)

**Mô tả:** Hệ thống hỗ trợ đăng ký tài khoản mới và đăng nhập với phân quyền Admin/User. Giao diện đăng nhập được thiết kế dạng Split Form với hiệu ứng chuyển đổi mượt mà giữa form Sign In và Sign Up. Sau khi đăng nhập:

- **Admin** → Chuyển đến trang `/admin` (Dashboard quản trị)
- **User** → Chuyển đến trang thư viện `/pages/library1.html`

**Kịch bản sử dụng:**

1. Người dùng truy cập trang Đăng nhập (`/pages/login.html`)
2. Nhấn "Register" để chuyển sang form đăng ký
3. Nhập username, email, password, xác nhận password
4. Hệ thống kiểm tra trùng lặp, hash password bằng bcrypt, lưu vào CSDL
5. Chuyển sang form Sign In, nhập thông tin đăng nhập
6. Server xác thực, tạo session, trả về thông tin user + role
7. JavaScript chuyển hướng đến trang tương ứng theo role

```
![Hình ảnh: Trang đăng nhập với form Sign In/Sign Up](link_anh_dang_nhap)
![Hình ảnh: Đăng nhập Admin thành công, chuyển đến Dashboard](link_anh_admin_redirect)
![Hình ảnh: Đăng nhập User thành công, chuyển đến Library](link_anh_user_redirect)
```

---

### 3.2. Chức năng Thêm/Sửa/Xóa dữ liệu (CRUD) — Admin

**Mô tả:** Quản trị viên có thể thực hiện đầy đủ các thao tác CRUD trên dữ liệu flashcard và bình luận thông qua Admin Dashboard.

**Các thao tác CRUD chi tiết:**

| Thao tác   | Phương thức | API Endpoint                | Mô tả                                        |
| :--------- | :---------: | :-------------------------- | :------------------------------------------- |
| **C**reate |  `INSERT`   | `database.js` (auto seed)   | Tạo dữ liệu mẫu khi khởi tạo DB              |
| **R**ead   |  `SELECT`   | `GET /admin`                | Đọc danh sách bình luận, flashcard, thống kê |
| **U**pdate |  `UPDATE`   | `PUT /admin/edit/:id`       | Cập nhật tiêu đề & nội dung flashcard        |
| **D**elete |  `DELETE`   | `DELETE /admin/comment/:id` | Xóa bình luận                                |

**Kịch bản sử dụng (Sửa Flashcard):**

1. Admin đăng nhập → được chuyển đến `/admin`
2. Nhấn "Quản lý nội dung flashcard" → xem danh sách flashcard
3. Nhấn "Sửa" trên một flashcard → form hiển thị dữ liệu cũ
4. Chỉnh sửa tiêu đề và nội dung → nhấn "Cập nhật"
5. Fetch API gửi `PUT /admin/edit/:id` với dữ liệu JSON
6. Server thực thi `UPDATE contents SET ... WHERE id = ?`
7. Trả về JSON `{ success: true }` → Hiển thị thông báo thành công

```
![Hình ảnh: Admin Dashboard với bảng thống kê](link_anh_admin_dashboard)
![Hình ảnh: Danh sách flashcard trong Admin](link_anh_admin_flashcard_list)
![Hình ảnh: Form chỉnh sửa flashcard](link_anh_admin_edit_flashcard)
```

**Kịch bản sử dụng (Xóa Bình luận):**

1. Trong Admin Dashboard, bảng "Quản lý bình luận" hiển thị danh sách
2. Admin nhấn nút "Xóa" trên một bình luận → confirm dialog
3. Fetch API gửi `DELETE /admin/comment/:id`
4. Server thực thi `DELETE FROM comments WHERE id = ?`
5. Dòng bình luận bị xóa khỏi giao diện ngay lập tức (không tải lại trang)

```
![Hình ảnh: Bảng quản lý bình luận với nút Xóa](link_anh_admin_comment_delete)
```

---

### 3.3. Chức năng Bình luận bằng AJAX (Fetch API)

**Mô tả:** Người dùng có thể gửi bình luận và đánh giá sao cho nội dung flashcard mà không cần tải lại trang. Bình luận mới được thêm vào danh sách ngay lập tức sau khi gửi thành công.

**Kịch bản sử dụng:**

1. Người dùng đã đăng nhập, truy cập trang có bình luận
2. Nhập nội dung vào ô textarea, chọn số sao (rating 1-5)
3. **Client-side validation:** Hàm `containsBadWords()` kiểm tra từ xấu
4. Nếu phát hiện từ xấu → alert cảnh báo, không gửi request
5. Nếu hợp lệ → JavaScript gửi `POST /api/comments` với `{ contentId, content, rating }`
6. Server kiểm tra session → lưu vào CSDL → trả về object comment
7. Client gọi `addCommentToUI()` để thêm comment mới vào đầu danh sách

```
![Hình ảnh: Form bình luận với textarea và đánh giá sao](link_anh_comment_form)
![Hình ảnh: Bình luận được thêm thành công (AJAX, không tải lại trang)](link_anh_comment_success)
![Hình ảnh: Cảnh báo khi phát hiện từ xấu](link_anh_badword_filter)
```

---

### 3.4. Chức năng Lọc từ xấu (Bad Words Filter)

**Mô tả:** Hệ thống kiểm tra nội dung bình luận phía Client trước khi gửi lên Server, giúp ngăn chặn các từ ngữ không phù hợp ngay từ đầu.

**Chi tiết kỹ thuật:**

- Danh sách từ xấu được định nghĩa trong `comment.js`:
  ```javascript
  const badWords = [
    
  ];
  ```
- Hàm `containsBadWords(text)` chuyển nội dung về chữ thường và kiểm tra bằng `some()` + `includes()`
- Nếu phát hiện từ xấu → hiển thị alert → hủy gửi request
- Lọc ở cả Client (JavaScript) và hy vọng có Server-side validation sau này

```
![Hình ảnh: Minh họa cảnh báo khi nhập từ xấu vào bình luận](link_anh_badword_warning)
```

---

### 3.5. Chức năng Popup Quiz & Cookie

**Mô tả:** Khi người dùng nhấn "Start Flashcard" trên trang chủ, một Popup hướng dẫn Quiz xuất hiện với hiệu ứng mờ nền (blur). Popup cung cấp thông tin về luật chơi trước khi bắt đầu.

**Kịch bản sử dụng:**

1. Người dùng truy cập trang chủ, nhấn "Start Flashcard"
2. JavaScript thêm class `active` vào `popup-info` và `page-wrapper`
3. Hiệu ứng: Nền bị mờ (blur: 6px), Popup hiện lên với các nút "Exit" và "Continue"
4. Nhấn "Exit" → Popup đóng, trang trở lại bình thường
5. Nhấn "Continue" → Chuẩn bị chuyển sang trang học

> **Liên quan đến Cookie:** Hệ thống sử dụng `express-session` để lưu trạng thái đăng nhập của người dùng dưới dạng Cookie Session. Đây là cơ chế Cookie phía Server giúp duy trì phiên làm việc.

```
![Hình ảnh: Popup hướng dẫn Quiz với hiệu ứng mờ nền](link_anh_popup_quiz)
```

---

### 3.6. Chức năng Học Flashcard với Hiệu ứng 3D Flip

**Mô tả:** Trang học flashcard cung cấp trải nghiệm học tập trực quan với hiệu ứng lật thẻ 3D, điều hướng giữa các thẻ và theo dõi tiến độ học tập.

**Kịch bản sử dụng:**

1. Tại thư viện, người dùng chọn một bộ sưu tập → nhấn "Học flashcard"
2. Chuyển đến `flashcard.html` với dữ liệu từ LocalStorage
3. Thẻ hiển thị mặt trước (thuật ngữ/câu hỏi) với hiệu ứng glassmorphism
4. Nhấn vào thẻ → **hiệu ứng 3D Flip** (xoay 180° theo trục Y) → hiện mặt sau (định nghĩa/câu trả lời)
5. Nhấn "Thẻ sau" / "Thẻ trước" để điều hướng giữa các thẻ (vòng tròn)
6. Nhấn "Nhớ rồi" / "Chưa nhớ" để đánh dấu trạng thái học tập
7. Thanh tiến độ cập nhật: "Thẻ X / Y"

```
![Hình ảnh: Giao diện học flashcard với thẻ 3D](link_anh_flashcard_study)
![Hình ảnh: Thẻ đang lật với hiệu ứng 3D](link_anh_flashcard_flip)
![Hình ảnh: Điều hướng và theo dõi tiến độ](link_anh_flashcard_progress)
```

---

### 3.7. Chức năng Responsive & Menu Mobile

**Mô tả:** Giao diện được thiết kế tương thích với mọi thiết bị (Desktop, Tablet, Mobile) với 2 breakpoints chính và menu hamburger trên mobile.

**Chi tiết Responsive:**

- **Breakpoint 1200px:** Điều chỉnh padding header, chuyển split-layout (About Us) sang dạng cột
- **Breakpoint 800px:** Hiện menu hamburger (`icons`), navbar chuyển thành dropdown, điều chỉnh kích thước font, layout thư viện chuyển sidebar xuống trên cùng, layout contact chuyển sang dạng cột
- **Breakpoint 768px / 720px:** Điều chỉnh button-group, flashcard layout

**Menu Mobile:**

- Sử dụng `input[type="checkbox"]` + `label` để tạo hamburger menu thuần CSS (không cần JavaScript)
- Icon `bx-menu` (hamburger) và `bx-x` (đóng) được chuyển đổi bằng CSS `:checked`
- Menu có hiệu ứng slide-down với `transition: .3s ease`
- Các mục menu xuất hiện tuần tự với `transition-delay` dựa trên `var(--i)`

```css
/* CSS thuần cho menu mobile - không cần JS */
#check:checked ~ .navbar {
  height: 17.7rem; /* Mở menu */
}
#check:checked ~ .navbar a {
  transform: translateY(0); /* Animation mục menu */
  opacity: 1;
  transition-delay: calc(0.15s * var(--i));
}
```

```
![Hình ảnh: Giao diện Desktop đầy đủ](link_anh_desktop)
![Hình ảnh: Giao diện Mobile với menu hamburger đang mở](link_anh_mobile_menu)
![Hình ảnh: Giao diện Tablet responsive](link_anh_tablet)
```

---

### 3.8. Chức năng Contact Form (AJAX)

**Mô tả:** Trang liên hệ cho phép người dùng gửi phản hồi đến đội ngũ phát triển thông qua form gửi tin nhắn, sử dụng Fetch API để gửi dữ liệu bất đồng bộ.

**Kịch bản sử dụng:**

1. Người dùng truy cập trang Contact (`/pages/contact.html`)
2. Nhập Full Name, Email, Message vào form
3. Validation: Kiểm tra các trường không được để trống
4. Gửi `POST /api/comments/contact` với dữ liệu JSON `{ fullName, email, message, rating }`
5. Server nhận dữ liệu, lưu vào bảng `comments` với `contentId = 'contact'`
6. Trả về JSON `{ success: true, message: 'Cảm ơn bạn đã đánh giá!' }`
7. Hiển thị thông báo thành công và reset form

```
![Hình ảnh: Giao diện trang Contact với form và thông tin liên hệ](link_anh_contact_form)
![Hình ảnh: Thông báo gửi thành công](link_anh_contact_success)
```

---

### 3.9. Chức năng Quản lý Thư viện Cá nhân (LocalStorage)

**Mô tả:** Người dùng có thể tạo, chỉnh sửa và xóa các bộ sưu tập flashcard cá nhân. Dữ liệu được lưu trong LocalStorage, cho phép đồng bộ giữa trang thư viện và trang học flashcard.

**Các thao tác:**

- **Tạo bộ mới:** Modal đặt tên → tạo collection → chuyển sang editor
- **Thêm thẻ:** Nhập thuật ngữ + định nghĩa → thêm vào danh sách
- **Sửa thẻ:** Nhấn "Sửa" → dữ liệu được đưa lên form → chỉnh sửa → lưu
- **Xóa thẻ:** Nhấn "Xóa" → confirm → xóa khỏi danh sách
- **Xóa bộ:** Nhấn "Xóa bộ sưu tập" → confirm → xóa toàn bộ
- **Học:** Chọn bộ → nhấn "Học flashcard" → chuyển đến trang học

```
![Hình ảnh: Thư viện flashcard với danh sách bộ sưu tập](link_anh_library)
![Hình ảnh: Modal tạo bộ sưu tập mới](link_anh_create_collection)
![Hình ảnh: Trang soạn thảo flashcard](link_anh_editor)
```

---

## PHẦN 4: GIẢI THÍCH KỸ THUẬT CHUYÊN SÂU

### 4.1. Middleware — Phân tích chi tiết

#### 4.1.1. Lựa chọn Middleware: `isAdmin` (src/middleware/auth.js)

**Tại sao chọn middleware này?**
Middleware `isAdmin` được chọn để phân tích vì nó đóng vai trò **quan trọng nhất** trong việc bảo vệ hệ thống quản trị. Trong ứng dụng web, việc kiểm soát quyền truy cập là yếu tố sống còn — chỉ những người dùng có quyền Admin mới được phép truy cập trang quản trị và thực hiện các thao tác nhạy cảm (xóa bình luận, sửa nội dung). Nếu không có middleware này, bất kỳ ai biết đường dẫn `/admin` đều có thể truy cập và phá hoại dữ liệu.

#### 4.1.2. Code đầy đủ

```javascript
// src/middleware/auth.js

// Middleware kiểm tra đã đăng nhập
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); // ✅ Có session → cho phép đi tiếp
  }
  return res.redirect("/pages/login.html"); // ❌ Chưa đăng nhập → chuyển hướng
}

// Middleware kiểm tra là admin
function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === "admin") {
    return next(); // ✅ Là Admin → cho phép đi tiếp
  }
  // ❌ Không phải Admin → trả về lỗi 403
  return res
    .status(403)
    .send(
      '<h2>403 - Bạn không có quyền truy cập trang này</h2><a href="/pages/login.html">Đăng nhập lại</a>',
    );
}

module.exports = { isAuthenticated, isAdmin };
```

#### 4.1.3. Cách hoạt động (Luồng xử lý)

```
Yêu cầu đến route /admin
         │
         ▼
┌─────────────────────────────┐
│  Bước 1: Request đi qua     │
│  isAuthenticated middleware  │
│  (được áp dụng tự động qua   │
│   Express Router)            │
└─────────────┬───────────────┘
              │
     ┌────────┴────────┐
     ▼                  ▼
  Có session?       Không có
  ───────────       ─────────
  │ req.session      │ redirect →
  │   .user tồn tại   │ /pages/login.html
  └──────┬───────────┘
         ▼
┌─────────────────────────────┐
│  Bước 2: Request đi qua     │
│  isAdmin middleware          │
└─────────────┬───────────────┘
              │
     ┌────────┴────────┐
     ▼                  ▼
  role === 'admin'?    role ≠ 'admin'
  ────────────────    ──────────────
  │ Cho phép          │ Trả về 403
  │ next()            │ Forbidden
  └──────┬───────────┘
         ▼
┌─────────────────────────────┐
│  Bước 3: Controller xử lý   │
│  adminController.getDashboard│
│  → Truy vấn DB               │
│  → Render view EJS           │
└─────────────────────────────┘
```

#### 4.1.4. Cách middleware được áp dụng trong Routes

```javascript
// src/routes/admin.js
const { isAdmin } = require("../middleware/auth");

// Tất cả các route trong admin.js đều được bảo vệ bởi isAdmin
router.get("/", isAdmin, adminController.getAdminDashboard);
router.delete("/comment/:id", isAdmin, adminController.deleteComment);
router.get("/edit/:id", isAdmin, adminController.getEditContent);
router.put("/edit/:id", isAdmin, adminController.updateContent);
```

#### 4.1.5. Điểm mạnh và ý nghĩa

1. **Tái sử dụng:** Middleware `isAdmin` được dùng cho **tất cả** các route admin, tránh lặp code kiểm tra quyền
2. **Tách biệt concern:** Logic kiểm tra quyền được tách riêng khỏi controller, dễ bảo trì
3. **Xử lý lỗi rõ ràng:** Trả về mã lỗi HTTP chuẩn (403 Forbidden) kèm thông báo thân thiện
4. **Bảo mật lớp thứ hai:** Kiểm tra cả session và role, không chỉ dựa vào việc có session hay không
5. **Middleware chuỗi (chain):** Có thể kết hợp nhiều middleware — `isAuthenticated` kiểm tra đăng nhập, sau đó `isAdmin` kiểm tra quyền

> **📌 Lưu ý chấm điểm:** Middleware này thể hiện rõ **kỹ thuật Middleware trong Express.js** — sử dụng hàm `(req, res, next)` để kiểm soát luồng request, gọi `next()` để chuyển tiếp hoặc `res.status().send()` để chặn lại. Đây là một trong những kỹ thuật quan trọng nhất trong lập trình web với Node.js.

---

### 4.2. Luồng Request-Response chi tiết

#### Tác vụ: Người dùng gửi bình luận mới

Phân tích chi tiết đường đi của một tác vụ từ lúc người dùng click đến khi nhận phản hồi từ server.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    LUỒNG REQUEST-RESPONSE CHI TIẾT                      │
│              Chức năng: Gửi bình luận (AJAX, không tải lại trang)       │
└─────────────────────────────────────────────────────────────────────────┘

Bước 0: TRẠNG THÁI BAN ĐẦU
─────────────────────────────
│ User đã đăng nhập (có session hợp lệ)
│ Đang ở trang xem nội dung flashcard
│ Form bình luận hiển thị với textarea + dropdown rating

Bước 1: NGƯỜI DÙNG NHẤN NÚT "GỬI" (CLICK EVENT)
─────────────────────────────────────────────────
│ File: public/js/comment.js
│ Sự kiện: submit trên #commentForm
│
│ document.getElementById('commentForm')
│   .addEventListener('submit', async (e) => {
│       e.preventDefault();  // Chặn reload trang
│
│       // Lấy dữ liệu từ form
│       const commentContent = textarea.value;
│
│       // === KIỂM TRA TỪ XẤU (Client-side Filter) ===
│       if (containsBadWords(commentContent)) {
│           alert('Bình luận chứa từ ngữ không phù hợp!');
│           return;  // Dừng ngay, không gửi request
│       }
│
│       // Tạo object dữ liệu
│       const formData = {
│           contentId: input.value,
│           content: commentContent,
│           rating: select.value
│       };

Bước 2: GỬI REQUEST AJAX (FETCH API)
─────────────────────────────────────
│ File: public/js/comment.js
│
│       const response = await fetch('/api/comments', {
│           method: 'POST',
│           headers: { 'Content-Type': 'application/json' },
│           body: JSON.stringify(formData)  // → JSON string
│       });

Bước 3: REQUEST ĐẾN SERVER (HTTP POST)
────────────────────────────────────────
│ Giao thức: HTTP/1.1
│ Method: POST
│ URL: http://localhost:3000/api/comments
│ Headers: Content-Type: application/json
│          Cookie: connect.sid=...  (Session ID tự động gửi kèm)
│ Body: {"contentId":"1","content":"Flashcard rất hay!","rating":"5"}

Bước 4: EXPRESS ROUTER XỬ LÝ
─────────────────────────────
│ File: src/routes/comment.js
│
│ router.post('/', isAuthenticated, commentController.addComment);
│                    │
│                    ▼
│ MIDDLEWARE isAuthenticated (src/middleware/auth.js):
│   if (req.session && req.session.user) {
│       return next();  // ✅ User đã đăng nhập → cho đi tiếp
│   }
│   // ❌ Chưa đăng nhập → redirect về login
│
│                    ▼
│ Gọi commentController.addComment(req, res)

Bước 5: CONTROLLER XỬ LÝ NGHIỆP VỤ
─────────────────────────────────────
│ File: src/controllers/commentController.js
│
│ exports.addComment = async (req, res) => {
│   try {
│     // 5a. Lấy dữ liệu từ request body
│     const { contentId, content, rating } = req.body;
│
│     // 5b. Lấy username từ SESSION (đã được xác thực ở middleware)
│     const username = req.session.user.username;
│
│     // 5c. VALIDATE dữ liệu
│     if (!contentId || !content) {
│       return res.status(400).json({
│         success: false, error: 'Thiếu thông tin bình luận'
│       });
│     }
│
│     // 5d. Chuẩn hóa rating (1-5)
│     const safeRating = Math.min(5, Math.max(1, parseInt(rating) || 5));
│
│     // 5e. THAO TÁC GH (CREATE) - Insert vào CSDL
│     const [result] = await pool.query(
│       'INSERT INTO comments (contentId, username, content, rating)
│        VALUES (?, ?, ?, ?)',
│       [contentId, username, content, safeRating]
│     );
│
│     // 5f. Lấy lại comment vừa tạo (để trả về đầy đủ thông tin)
│     const [rows] = await pool.query(
│       'SELECT * FROM comments WHERE id = ?',
│       [result.insertId]
│     );
│
│     // 5g. Trả về kết quả thành công
│     res.json({ success: true, comment: rows[0] });
│   } catch (err) {
│     console.error('addComment error:', err);
│     res.status(500).json({ success: false, error: err.message });
│   }
│ };

Bước 6: DATABASE THỰC THI
───────────────────────────
│ MySQL thực thi:
│   INSERT INTO comments (contentId, username, content, rating)
│   VALUES ('1', 'nhung_user', 'Flashcard rất hay!', 5);
│
│   → Tự động sinh id (AUTO_INCREMENT)
│   → Tự động gán createdAt (DEFAULT CURRENT_TIMESTAMP)
│   → Trả về insertId
│
│   SELECT * FROM comments WHERE id = 5;
│   → Trả về row: { id: 5, contentId: '1', username: 'nhung_user',
│                   content: 'Flashcard rất hay!', rating: 5,
│                   createdAt: '2026-06-15 10:30:00' }

Bước 7: SERVER TRẢ VỀ PHẢN HỒI (JSON RESPONSE)
────────────────────────────────────────────────
│ HTTP/1.1 200 OK
│ Content-Type: application/json
│
│ {
│   "success": true,
│   "comment": {
│     "id": 5,
│     "contentId": "1",
│     "username": "nhung_user",
│     "content": "Flashcard rất hay!",
│     "rating": 5,
│     "createdAt": "2026-06-15 10:30:00"
│   }
│ }

Bước 8: CLIENT NHẬN PHẢN HỒI & CẬP NHẬT UI
─────────────────────────────────────────────
│ File: public/js/comment.js
│
│       const result = await response.json();
│
│       if (result.success) {
│           // Thêm bình luận mới vào UI (đầu danh sách)
│           addCommentToUI(result.comment);
│           // Reset form
│           document.getElementById('commentForm').reset();
│       } else {
│           alert(result.error || 'Gửi thất bại');
│       }
│   } catch (err) {
│       alert('Lỗi kết nối');
│   }
│
│ → Hàm addCommentToUI():
│   function addCommentToUI(comment) {
│       const commentHtml = `
│         <div class="comment-item">
│           <strong>${comment.username}</strong>
│           <span class="rating">${'★'.repeat(comment.rating)}...</span>
│           <p>${escapeHtml(comment.content)}</p>
│           <small>${new Date(comment.createdAt).toLocaleString()}</small>
│         </div>
│       `;
│       commentList.insertAdjacentHTML('afterbegin', commentHtml);
│       // ⚡ Chèn vào đầu danh sách, KHÔNG cần tải lại trang!
│   }

Bước 9: KẾT QUẢ CUỐI CÙNG
───────────────────────────
│ ✅ Bình luận hiển thị ngay trên giao diện
│ ✅ Form được reset, sẵn sàng nhập bình luận mới
│ ✅ Trang không bị tải lại (AJAX)
│ ✅ Dữ liệu đã được lưu vào CSDL MySQL
```

---

### 4.3. Kiến thức bảo mật áp dụng

#### Chống XSS (Cross-Site Scripting)

```javascript
// public/js/comment.js
function escapeHtml(str) {
  return str.replace(/[&<>]/g, function (m) {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}
```

Hàm `escapeHtml` chuyển đổi các ký tự đặc biệt HTML thành thực thể HTML, ngăn chặn kẻ tấn công chèn mã JavaScript độc hại vào nội dung bình luận.

#### Mã hóa mật khẩu (bcrypt)

```javascript
const hashedPassword = await bcrypt.hash(password, 10); // 10 salt rounds
// ...
const match = await bcrypt.compare(password, user.password);
```

Mật khẩu được **hash** với 10 vòng muối (salt rounds) trước khi lưu vào CSDL. Khi đăng nhập, dùng `bcrypt.compare()` để kiểm tra — mật khẩu gốc không bao giờ được lưu trữ hay so sánh trực tiếp.

#### Kiểm soát truy cập (Session-based Auth)

Sử dụng `express-session` để tạo và quản lý session trên server. Session ID được lưu trong Cookie của trình duyệt, dữ liệu session nằm trên server (memory). Mỗi request đến route được bảo vệ đều phải qua middleware `isAuthenticated` và/hoặc `isAdmin`.

---

## PHẦN 5: TỔNG KẾT

### 5.1. Những gì đã đạt được

#### ✅ Kiến thức và kỹ năng

1. **Kiến trúc MVC:** Hiểu và áp dụng thành công mô hình Model-View-Controller trong ứng dụng web Node.js
2. **RESTful API:** Thiết kế và triển khai các API endpoints theo chuẩn REST
3. **Express.js:** Sử dụng thành thạo framework Express (Routing, Middleware, Template Engine, Static Files)
4. **MySQL:** Thiết kế cơ sở dữ liệu, thực hiện CRUD với Prepared Statements (chống SQL Injection)
5. **Frontend:** HTML5/CSS3/JavaScript thuần — Responsive Design, CSS Animation, Fetch API, DOM Manipulation
6. **Bảo mật:** Mã hóa mật khẩu (bcrypt), chống XSS, Session-based Authentication, Prepared Statements chống SQL Injection

#### ✅ Chức năng hoàn thiện

- Hệ thống đăng nhập/đăng ký với phân quyền Admin/User
- Quản lý bộ sưu tập flashcard (tạo, sửa, xóa, học với hiệu ứng 3D)
- Hệ thống bình luận AJAX với lọc từ xấu
- Admin Dashboard với thống kê trực quan
- Contact Form gửi phản hồi
- Giao diện responsive, hiệu ứng hiện đại (Glassmorphism, 3D Flip, Transition)

### 5.2. Hạn chế còn tồn tại

|  #  | Hạn chế                                        | Nguyên nhân                            | Hướng khắc phục                           |
| :-: | ---------------------------------------------- | :------------------------------------- | :---------------------------------------- |
|  1  | Dữ liệu flashcard chưa đồng bộ lên Server      | Chỉ lưu LocalStorage, chưa có API sync | Thêm API đồng bộ collection lên CSDL      |
|  2  | Thiếu validation phía Server cho comment       | Mới chỉ validate ở Client              | Thêm Joi/Yup validation ở Controller      |
|  3  | Popup chưa dùng Cookie để ghi nhớ trạng thái   | Chưa tích hợp cơ chế nhớ               | Thêm Cookie kiểm tra "Don't show again"   |
|  4  | Chưa có nút cuộn lên đầu trang (Scroll to Top) | Thiếu tính năng UI                     | Thêm button với JavaScript scroll event   |
|  5  | Admin chưa có chức năng thêm flashcard mới     | Mới chỉ sửa và xóa                     | Thêm route POST /admin/add                |
|  6  | Chưa có phân trang cho bình luận               | Danh sách có thể dài                   | Thêm LIMIT + OFFSET + pagination UI       |
|  7  | Chưa có file .env cho cấu hình                 | Cấu hình cứng trong code               | Sử dụng dotenv để quản lý biến môi trường |

### 5.3. Bài học kinh nghiệm

#### 📌 Về quản lý dự án nhóm

- **Phân công rõ ràng:** Việc phân chia Frontend/Backend/Database giúp các thành viên tập trung vào chuyên môn
- **Git & Version Control:** Sử dụng Git giúp quản lý phiên bản và cộng tác hiệu quả
- **Giao tiếp thường xuyên:** Các buổi họp nhóm giúp thống nhất API contract giữa Frontend và Backend

#### 📌 Về kỹ thuật

- **Middleware là sức mạnh của Express:** Tách biệt các concern (auth, logger, validation) giúp code sạch và dễ bảo trì
- **Prepared Statements chống SQL Injection:** Luôn sử dụng tham số hóa (`?`) thay vì nối chuỗi SQL
- **AJAX cải thiện trải nghiệm người dùng:** Các thao tác không tải lại trang giúp ứng dụng mượt mà hơn
- **LocalStorage phù hợp cho dữ liệu tạm:** Lưu bộ sưu tập flashcard ở client giúp giảm tải server
- **CSS thuần vẫn rất mạnh:** Menu hamburger có thể làm hoàn toàn bằng CSS, không cần JavaScript

#### 📌 Về bảo mật

- **Không bao giờ tin tưởng dữ liệu đầu vào:** Validate cả Client và Server
- **Bảo vệ tất cả các route admin:** Middleware kiểm tra quyền trên từng route
- **Mã hóa thông tin nhạy cảm:** bcrypt cho mật khẩu, HTTPS cho truyền tải

### 5.4. Hướng phát triển tương lai

1. **Đồng bộ dữ liệu:** Đưa flashcard từ LocalStorage lên Server để đồng bộ nhiều thiết bị
2. **Chia sẻ bộ flashcard:** Cho phép người dùng chia sẻ bộ sưu tập công khai
3. **Chế độ thi (Quiz Mode):** Tạo bài kiểm tra trắc nghiệm từ bộ flashcard
4. **Thông báo nhắc nhở học:** Gửi email nhắc nhở học tập hàng ngày
5. **Hệ thống gamification:** Thêm điểm số, huy hiệu, bảng xếp hạng
6. **API Documentation:** Viết tài liệu API với Swagger/OpenAPI
7. **Unit Test:** Viết test cho các controller và middleware

---

<div align="center">

---

**📅 Ngày hoàn thành:** 15/06/2026

**📧 Liên hệ nhóm:** _[email nhóm]_

**📂 Mã nguồn:** [GitHub Repository](https://github.com/hongnhungnguyen2348-netizen/Team3web_flashcards_study)

---

_Báo cáo này được viết bằng Markdown, trình bày chuyên nghiệp phục vụ cho việc đánh giá bài tập lớn cuối kỳ môn Lập trình Web._

</div>
