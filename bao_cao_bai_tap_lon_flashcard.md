# TRƯỜNG [TÊN TRƯỜNG]
# KHOA [TÊN KHOA]

## BÁO CÁO BÀI TẬP LỚN CUỐI KỲ
## Môn học: Thiết kế và Lập trình Web

---

### Tên đề tài
**FlashStudy - Hệ thống học tập thông minh qua Flashcard**

### Mã môn học
**[Điền mã môn học]**

### Mã số đề tài
**[Điền mã số đề tài]**

### Nhóm thực hiện
**Team3web_flashcards_study**

### Thời gian thực hiện
**[Điền thời gian thực hiện, ví dụ: 05/2026 - 06/2026]**

### Thành viên nhóm

| STT | Họ và tên | MSSV | Vai trò | Ghi chú |
|---|---|---|---|---|
| 1 | [Họ tên thành viên 1] | [MSSV] | Backend | Nhóm trưởng |
| 2 | [Họ tên thành viên 2] | [MSSV] | Backend | Thành viên |
| 3 | [Họ tên thành viên 3] | [MSSV] | Frontend | Thành viên |
| 4 | [Họ tên thành viên 4] | [MSSV] | Frontend | Thành viên |

---

# PHẦN 1: TỔNG QUAN VÀ NHÂN SỰ

## 1.1. Giới thiệu yêu cầu đề bài

Đề tài xây dựng một hệ thống học tập thông qua Flashcard, hỗ trợ người dùng tạo các bộ thẻ học, chỉnh sửa nội dung, xóa dữ liệu không cần thiết và học lại kiến thức bằng cơ chế lật thẻ. Hệ thống hướng đến việc giúp người học ghi nhớ nhanh hơn thông qua mô hình câu hỏi - câu trả lời hoặc thuật ngữ - định nghĩa.

Các chức năng chính của hệ thống gồm:

- Tạo Flashcard: thêm mới bộ flashcard, thêm thẻ, sửa nội dung thẻ, xóa thẻ hoặc xóa bộ sưu tập.
- Học Flashcard: hiển thị từng thẻ, lật mặt trước/mặt sau, chuyển thẻ trước/sau, đánh dấu trạng thái đã nhớ hoặc chưa nhớ.
- Gửi thông tin liên hệ: người dùng gửi họ tên, email và nội dung phản hồi về hệ thống để Admin theo dõi.
- Quản trị: Admin đăng nhập, xem thống kê, quản lý bình luận/liên hệ và chỉnh sửa nội dung flashcard trong cơ sở dữ liệu.

Mục tiêu của hệ thống là kết hợp kiến thức Frontend, Backend và Cơ sở dữ liệu trong môn Thiết kế và Lập trình Web, từ đó xây dựng một ứng dụng web có giao diện trực quan, thao tác rõ ràng và có xử lý dữ liệu phía server.

## 1.2. Những thay đổi so với đề bài

So với yêu cầu cơ bản, nhóm có một số mở rộng và điều chỉnh như sau:

| Nội dung | Mô tả |
|---|---|
| Lưu Flashcard phía người dùng | Chức năng tạo, sửa, xóa flashcard tại thư viện sử dụng `localStorage` để lưu nhanh dữ liệu trên trình duyệt. |
| Có tài khoản người dùng | Hệ thống bổ sung đăng ký, đăng nhập, đăng xuất bằng Express Session. |
| Có phân quyền Admin | Admin có quyền truy cập trang quản trị, xem thống kê, xóa phản hồi và sửa nội dung flashcard. |
| Có mã hóa mật khẩu | Mật khẩu người dùng được mã hóa bằng thư viện `bcrypt` trước khi lưu vào MySQL. |
| Có API Contact | Thông tin liên hệ được gửi qua API `/api/comments/contact` và lưu vào bảng `comments`. |
| Có thống kê lượt xem | Middleware `viewCounter` hỗ trợ ghi nhận lượt truy cập trang chủ. |

Cách tiếp cận sáng tạo của nhóm là chia hệ thống thành hai lớp thao tác: thao tác học nhanh trên trình duyệt bằng `localStorage`, đồng thời dùng Backend và MySQL cho các nghiệp vụ cần quản lý tập trung như tài khoản, phản hồi và trang Admin.

## 1.3. Bảng tổng kết chức năng

| STT | Chức năng | Trạng thái | Người phụ trách | Ghi chú |
|---|---|---|---|---|
| 1 | Tạo bộ Flashcard | Đã làm | Frontend 1 | Tạo bộ sưu tập qua modal |
| 2 | Thêm thẻ Flashcard | Đã làm | Frontend 1 | Nhập thuật ngữ/câu hỏi và định nghĩa/câu trả lời |
| 3 | Sửa thẻ Flashcard | Đã làm | Frontend 1 | Đưa dữ liệu cũ lên form và cập nhật |
| 4 | Xóa thẻ Flashcard | Đã làm | Frontend 2 | Có hộp thoại xác nhận |
| 5 | Xóa bộ Flashcard | Đã làm | Frontend 2 | Xóa khỏi `localStorage` |
| 6 | Học Flashcard | Đã làm | Frontend 2 | Lật thẻ, chuyển thẻ, đánh dấu nhớ/quên |
| 7 | Gửi Contact | Đã làm | Backend 1 + Frontend 2 | Gửi dữ liệu form về API |
| 8 | Đăng ký/đăng nhập | Đã làm | Backend 1 | Dùng Express Session và bcrypt |
| 9 | Trang Admin | Đã làm | Backend 2 | Xem thống kê, comment, flashcard |
| 10 | Sửa flashcard phía Admin | Đã làm | Backend 2 | Cập nhật bảng `contents` |
| 11 | Tối ưu CSDL nâng cao | Chưa hoàn thiện | Backend | Cấu trúc còn đơn giản |
| 12 | Đồng bộ flashcard client với CSDL | Chưa hoàn thiện | Cả nhóm | Flashcard người dùng chủ yếu lưu localStorage |

## 1.4. Bảng tổng kết đánh giá

| Tiêu chí | Tự đánh giá |
|---|---|
| Ưu điểm | Giao diện rõ ràng, có luồng tạo và học Flashcard trực quan; có Backend xử lý đăng nhập, phân quyền Admin và Contact; mật khẩu được mã hóa; có tổ chức thư mục theo routes/controllers/models/middleware. |
| Điểm mới lạ | Kết hợp học Flashcard dạng lật thẻ với quản trị phản hồi; có trạng thái học “đã nhớ/chưa nhớ”; có trang Admin riêng để theo dõi dữ liệu. |
| Hạn chế | Dữ liệu flashcard phía người dùng chưa đồng bộ hoàn toàn với MySQL; cơ sở dữ liệu chưa chuẩn hóa sâu; một số phần xử lý giao diện còn phụ thuộc vào `localStorage`; chưa có test tự động. |
| Hướng phát triển | Xây dựng API CRUD Flashcard đầy đủ, lưu toàn bộ flashcard vào CSDL theo từng tài khoản; bổ sung tìm kiếm, phân loại, thống kê tiến độ học; cải thiện bảo mật session và validation. |

## 1.5. Bảng phân công công việc

| Thành viên | Vai trò | Nhiệm vụ chính | Mức độ hoàn thành | Ghi chú |
|---|---|---|---|---|
| [Thành viên 1] | Backend | Xây dựng đăng ký, đăng nhập, đăng xuất, session, mã hóa mật khẩu | Tốt | Phụ trách `authRoutes`, `authController`, `auth` middleware |
| [Thành viên 2] | Backend | Xây dựng Admin, Contact API, kết nối MySQL, quản lý comment/flashcard | Tốt | Phụ trách `adminController`, `commentController`, `database.js` |
| [Thành viên 3] | Frontend | Xây dựng giao diện thư viện Flashcard, tạo/sửa/xóa thẻ | Tốt | Phụ trách `library1.html`, `library1.css`, `library1.js` |
| [Thành viên 4] | Frontend | Xây dựng trang học Flashcard, Contact, giao diện login/about/home | Đạt/Tốt | Phụ trách `flashcard.html`, `contact.html`, CSS và JS liên quan |

## 1.6. Bảng tổng kết kỹ thuật

| Chức năng | Người thực hiện | Các kỹ thuật sử dụng |
|---|---|---|
| Tạo Flashcard | Frontend 1 | HTML, CSS, JavaScript DOM, Modal, Input Form, `localStorage` |
| Sửa Flashcard | Frontend 1 | JavaScript Event Listener, cập nhật mảng dữ liệu, render lại UI |
| Xóa Flashcard | Frontend 2 | JavaScript, `confirm()`, xử lý mảng, lưu lại `localStorage` |
| Học Flashcard | Frontend 2 | CSS transform, JS DOM, trạng thái index, chuyển thẻ, đánh dấu nhớ/quên |
| Gửi Contact | Backend 1 + Frontend 2 | Input Form, Fetch API, Express Route, MySQL Insert |
| Đăng ký/Đăng nhập | Backend 1 | Express, API, Session, bcrypt, MySQL |
| Phân quyền Admin | Backend 2 | Middleware `isAdmin`, Session, Route Guard |
| Quản lý Comment | Backend 2 | REST API, DELETE method, MySQL, AJAX |
| Sửa nội dung Admin | Backend 2 | EJS View, Express Route, PUT API, MySQL UPDATE |
| Kết nối CSDL | Backend 2 | `mysql2`, Connection Pool, Promise API |

---

# PHẦN 2: THIẾT KẾ HỆ THỐNG

## 2.1. Sơ đồ hệ thống phần cứng

Hệ thống được triển khai theo mô hình Client - Server - Database.

- Client: trình duyệt web của người dùng, chạy HTML/CSS/JavaScript.
- Server: ứng dụng Node.js/Express xử lý route, API, session, middleware và render trang Admin bằng EJS.
- Database: MySQL lưu thông tin người dùng, bình luận/liên hệ, nội dung flashcard mẫu và dữ liệu thống kê.

Sơ đồ logic:

```text
+---------------------+
|      Client         |
| Browser HTML/CSS/JS |
+----------+----------+
           |
           | HTTP Request / Fetch API
           v
+---------------------+
|   Node.js Server    |
| Express + Session   |
| Routes/Controllers  |
| Middleware          |
+----------+----------+
           |
           | SQL Query
           v
+---------------------+
|       MySQL         |
| users               |
| comments            |
| contents            |
| homepage_views      |
+---------------------+
```

## 2.2. Kiến trúc phần mềm

Hệ thống được chia thành ba phần chính:

### Frontend

Frontend nằm chủ yếu trong thư mục `public`, bao gồm:

- Các trang HTML trong `public/pages`.
- Các file CSS trong `public/css`.
- Các file JavaScript trong `public/js`.
- Hình ảnh trong `public/images`.

Frontend chịu trách nhiệm hiển thị giao diện, nhận thao tác người dùng, kiểm tra dữ liệu cơ bản và gọi API bằng `fetch`.

Một số luồng xử lý chính:

- Trang thư viện Flashcard dùng `library1.js` để tạo, sửa, xóa bộ flashcard.
- Trang học Flashcard dùng `flashcard.js` để đọc dữ liệu từ `localStorage`, hiển thị từng thẻ và xử lý lật thẻ.
- Trang Contact gửi dữ liệu về API `/api/comments/contact`.

### Backend

Backend sử dụng Node.js và Express, bắt đầu từ file `server.js`.

Backend chịu trách nhiệm:

- Khởi tạo Express server.
- Cấu hình `express.json`, `express.urlencoded`.
- Cấu hình `express-session`.
- Kết nối route: `/admin`, `/api/comments`, `/api/auth`, `/api/views`.
- Phục vụ static file từ thư mục `public`.
- Render giao diện Admin bằng EJS.

### Cơ sở dữ liệu

CSDL MySQL được kết nối thông qua `mysql2`. Các bảng chính:

| Bảng | Vai trò |
|---|---|
| `users` | Lưu tài khoản, email, mật khẩu đã mã hóa, vai trò người dùng |
| `comments` | Lưu bình luận, đánh giá và thông tin Contact |
| `contents` | Lưu nội dung flashcard mẫu/quản trị |
| `homepage_views` hoặc dữ liệu lượt xem | Theo dõi lượt truy cập trang chủ |

## 2.3. Mô tả kiến trúc code

Sơ đồ tổ chức thư mục:

```text
final_bài tập lớn/
│
├── server.js
├── package.json
├── database.sql
├── index.html
│
├── public/
│   ├── pages/
│   │   ├── login.html
│   │   ├── library1.html
│   │   ├── flashcard.html
│   │   ├── contact.html
│   │   └── about_us.html
│   │
│   ├── css/
│   │   ├── login.css
│   │   ├── library1.css
│   │   ├── flashcard.css
│   │   ├── contact.css
│   │   ├── admin.css
│   │   └── about_us.css
│   │
│   ├── js/
│   │   ├── login.js
│   │   ├── library1.js
│   │   ├── flashcard.js
│   │   ├── comment.js
│   │   ├── admin.js
│   │   └── about_us.js
│   │
│   └── images/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── adminController.js
│   │   └── commentController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── viewCounter.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   ├── content.js
│   │   └── comment.js
│   │
│   └── routes/
│       ├── authRoutes.js
│       ├── admin.js
│       ├── comment.js
│       └── viewRoutes.js
│
└── views/
    └── admin/
        ├── index.ejs
        └── edit.ejs
```

## 2.4. Giải thích nhiệm vụ từng file/thư mục quan trọng

| File/Thư mục | Nhiệm vụ |
|---|---|
| `server.js` | File khởi động server Express, cấu hình session, middleware, route và static file. |
| `package.json` | Khai báo thông tin dự án và các thư viện phụ thuộc như `express`, `mysql2`, `bcrypt`, `ejs`, `express-session`. |
| `src/config/database.js` | Tạo connection pool đến MySQL, khởi tạo bảng và dữ liệu mẫu. |
| `src/routes/authRoutes.js` | Định nghĩa API đăng ký, đăng nhập, kiểm tra session và đăng xuất. |
| `src/controllers/authController.js` | Xử lý logic tài khoản, kiểm tra dữ liệu, mã hóa mật khẩu, tạo session. |
| `src/middleware/auth.js` | Chứa middleware `isAuthenticated` và `isAdmin` để kiểm tra quyền truy cập. |
| `src/routes/comment.js` | Định nghĩa API thêm/lấy comment và API Contact. |
| `src/controllers/commentController.js` | Xử lý thêm comment, lấy danh sách comment theo nội dung. |
| `src/routes/admin.js` | Định nghĩa route trang Admin, xóa comment, sửa flashcard. |
| `src/controllers/adminController.js` | Xử lý dashboard Admin, thống kê, xóa comment, cập nhật flashcard. |
| `public/pages/library1.html` | Giao diện thư viện Flashcard. |
| `public/js/library1.js` | Logic tạo, sửa, xóa bộ flashcard và lưu vào `localStorage`. |
| `public/pages/flashcard.html` | Giao diện học Flashcard. |
| `public/js/flashcard.js` | Logic đọc bộ flashcard đã chọn, lật thẻ, chuyển thẻ và đánh dấu trạng thái học. |
| `public/pages/contact.html` | Giao diện gửi thông tin liên hệ/phản hồi. |
| `views/admin/index.ejs` | Giao diện dashboard Admin. |
| `views/admin/edit.ejs` | Giao diện chỉnh sửa flashcard trong Admin. |

---

# PHẦN 3: DEMO VÀ HƯỚNG DẪN

## 3.1. Kịch bản chức năng Tạo/Sửa/Xóa Flashcard

### Chức năng tạo bộ Flashcard

**Vị trí chèn hình ảnh minh họa:**  
`[Chèn hình ảnh giao diện thư viện Flashcard tại đây]`

Bước 1: Người dùng truy cập trang “Thư viện Flashcard” -> Hệ thống hiển thị danh sách các bộ flashcard hiện có -> Kết thúc bước.

Bước 2: Người dùng nhấn nút “Tạo flashcard” -> Hệ thống mở modal nhập tên bộ flashcard -> Kết thúc bước.

Bước 3: Người dùng nhập tên bộ flashcard và nhấn “Tạo” -> Hệ thống tạo bộ flashcard mới, lưu vào `localStorage` và chuyển sang giao diện soạn thảo -> Kết thúc bước.

Bước 4: Người dùng nhập thuật ngữ/câu hỏi và định nghĩa/câu trả lời -> Hệ thống kiểm tra dữ liệu không được để trống -> Kết thúc bước.

Bước 5: Người dùng nhấn “Thêm thẻ” -> Hệ thống thêm thẻ vào bộ flashcard, render lại danh sách thẻ đã tạo -> Kết thúc.

### Chức năng sửa Flashcard

**Vị trí chèn hình ảnh minh họa:**  
`[Chèn hình ảnh thao tác sửa flashcard tại đây]`

Bước 1: Người dùng chọn một bộ flashcard trong thư viện -> Hệ thống đánh dấu bộ đang được chọn -> Kết thúc bước.

Bước 2: Người dùng nhấn “Sửa bộ sưu tập” -> Hệ thống mở giao diện soạn thảo với danh sách các thẻ trong bộ đó -> Kết thúc bước.

Bước 3: Người dùng nhấn nút “Sửa” tại một thẻ -> Hệ thống đưa dữ liệu cũ lên form nhập liệu -> Kết thúc bước.

Bước 4: Người dùng chỉnh sửa nội dung và nhấn “Lưu chỉnh sửa” -> Hệ thống cập nhật dữ liệu trong `localStorage`, render lại danh sách -> Kết thúc.

### Chức năng xóa Flashcard

**Vị trí chèn hình ảnh minh họa:**  
`[Chèn hình ảnh thao tác xóa flashcard tại đây]`

Bước 1: Người dùng mở bộ flashcard cần chỉnh sửa -> Hệ thống hiển thị danh sách các thẻ -> Kết thúc bước.

Bước 2: Người dùng nhấn nút “Xóa” tại một thẻ -> Hệ thống hiển thị hộp thoại xác nhận -> Kết thúc bước.

Bước 3: Người dùng xác nhận xóa -> Hệ thống xóa thẻ khỏi mảng dữ liệu, lưu lại vào `localStorage` và cập nhật giao diện -> Kết thúc.

## 3.2. Kịch bản chức năng Học Flashcard

**Vị trí chèn hình ảnh minh họa:**  
`[Chèn hình ảnh trang học flashcard tại đây]`

Bước 1: Người dùng chọn một bộ flashcard trong thư viện -> Hệ thống ghi nhận bộ đang được chọn -> Kết thúc bước.

Bước 2: Người dùng nhấn “Học flashcard” -> Hệ thống lưu ID bộ flashcard vào `localStorage` và chuyển sang trang học -> Kết thúc bước.

Bước 3: Hệ thống hiển thị mặt trước của thẻ đầu tiên, kèm tiến độ “Thẻ 1 / tổng số thẻ” -> Người dùng bắt đầu học -> Kết thúc bước.

Bước 4: Người dùng nhấn vào thẻ -> Hệ thống lật thẻ và hiển thị mặt sau chứa định nghĩa/câu trả lời -> Kết thúc bước.

Bước 5: Người dùng nhấn “Thẻ trước” hoặc “Thẻ sau” -> Hệ thống chuyển sang flashcard tương ứng và đưa thẻ về mặt trước -> Kết thúc bước.

Bước 6: Người dùng nhấn “Đã nhớ” hoặc “Chưa nhớ” -> Hệ thống lưu trạng thái học của thẻ hiện tại trong phiên học -> Kết thúc.

## 3.3. Kịch bản chức năng Gửi Contact

**Vị trí chèn hình ảnh minh họa:**  
`[Chèn hình ảnh form Contact tại đây]`

Bước 1: Người dùng truy cập trang Contact -> Hệ thống hiển thị thông tin liên hệ và form gửi phản hồi -> Kết thúc bước.

Bước 2: Người dùng nhập họ tên, email và nội dung tin nhắn -> Hệ thống kiểm tra các trường bắt buộc không được để trống -> Kết thúc bước.

Bước 3: Người dùng nhấn nút “Send” -> Frontend gửi request dạng JSON đến API `/api/comments/contact` -> Kết thúc bước.

Bước 4: Backend nhận dữ liệu, kiểm tra hợp lệ và lưu vào bảng `comments` trong MySQL -> Hệ thống trả về kết quả thành công -> Kết thúc bước.

Bước 5: Frontend nhận phản hồi thành công -> Hệ thống hiển thị thông báo cảm ơn và reset form -> Kết thúc.

## 3.4. Nhắc lại bảng tổng kết chức năng và người phụ trách

| Chức năng | Người phụ trách | Trạng thái |
|---|---|---|
| Tạo Flashcard | [Thành viên Frontend 1] | Đã hoàn thành |
| Sửa Flashcard | [Thành viên Frontend 1] | Đã hoàn thành |
| Xóa Flashcard | [Thành viên Frontend 2] | Đã hoàn thành |
| Học Flashcard | [Thành viên Frontend 2] | Đã hoàn thành |
| Gửi Contact | [Thành viên Backend 1] + [Thành viên Frontend 2] | Đã hoàn thành |
| Đăng ký/Đăng nhập | [Thành viên Backend 1] | Đã hoàn thành |
| Trang Admin | [Thành viên Backend 2] | Đã hoàn thành |
| Quản lý Comment/Contact | [Thành viên Backend 2] | Đã hoàn thành |

---

# PHẦN 4: TỔNG KẾT

## 4.1. Những gì còn tồn tại/chưa hoàn thiện

Dự án đã hoàn thành các chức năng chính theo yêu cầu, tuy nhiên vẫn còn một số điểm cần cải thiện:

- Flashcard do người dùng tạo đang lưu chủ yếu ở `localStorage`, chưa đồng bộ hoàn toàn với MySQL theo từng tài khoản.
- Cơ sở dữ liệu còn đơn giản, chưa tách rõ các bảng như `collections`, `cards`, `study_progress`.
- Chưa có chức năng tìm kiếm flashcard, phân loại theo chủ đề hoặc lọc theo trạng thái học.
- Chưa có hệ thống thống kê tiến độ học chi tiết cho từng người dùng.
- Chưa có kiểm thử tự động cho API và giao diện.
- Một số thông báo và validation có thể chuẩn hóa tốt hơn để tăng trải nghiệm người dùng.
- Cấu hình bảo mật session và thông tin kết nối CSDL nên được đưa vào biến môi trường khi triển khai thực tế.

## 4.2. Những kiến thức học được từ môn học Lập trình Web

Thông qua quá trình thực hiện bài tập lớn, nhóm đã củng cố được nhiều kiến thức quan trọng:

- Thiết kế giao diện web bằng HTML và CSS.
- Xử lý tương tác phía client bằng JavaScript DOM.
- Lưu trữ dữ liệu tạm thời trên trình duyệt bằng `localStorage`.
- Xây dựng server bằng Node.js và Express.
- Thiết kế API theo các route rõ ràng.
- Kết nối và thao tác dữ liệu với MySQL.
- Sử dụng mô hình route - controller - middleware để tổ chức Backend.
- Xử lý đăng ký, đăng nhập, session và phân quyền người dùng.
- Mã hóa mật khẩu bằng thư viện `bcrypt`.
- Render giao diện động phía server bằng EJS.
- Gửi dữ liệu từ Frontend đến Backend bằng Fetch API.
- Nhận thức rõ hơn về validation, bảo mật và tổ chức mã nguồn.

## 4.3. Kinh nghiệm tích lũy trong quá trình làm dự án

Trong quá trình làm dự án, nhóm tích lũy được các kinh nghiệm sau:

- Cần phân chia công việc rõ ràng giữa Frontend và Backend ngay từ đầu.
- Cần thống nhất cấu trúc dữ liệu trước khi triển khai giao diện và API.
- Nên thiết kế database sớm để tránh việc phải chỉnh sửa luồng dữ liệu nhiều lần.
- Khi làm nhóm, cần thường xuyên đồng bộ code, kiểm tra xung đột và thống nhất quy ước đặt tên.
- Giao diện cần được kiểm thử trên nhiều kích thước màn hình để tránh lỗi hiển thị.
- Backend cần xử lý lỗi rõ ràng để Frontend có thể hiển thị thông báo phù hợp.
- Các chức năng như đăng nhập, phân quyền và lưu dữ liệu cần được kiểm tra kỹ vì ảnh hưởng trực tiếp đến bảo mật và trải nghiệm người dùng.

---

# PHẦN PHỤ LỤC

## Phụ lục mẫu cho thành viên: [Họ tên thành viên Backend]

### 1. Lý do chọn Middleware/Thư viện bên thứ ba

Trong phần việc Backend, em lựa chọn sử dụng các thư viện và middleware sau:

| Middleware/Thư viện | Lý do sử dụng |
|---|---|
| `express` | Hỗ trợ xây dựng web server và API nhanh, rõ ràng, phù hợp với bài tập môn Lập trình Web. |
| `express-session` | Dùng để lưu trạng thái đăng nhập của người dùng sau khi xác thực thành công. |
| `bcrypt` | Dùng để mã hóa mật khẩu trước khi lưu vào CSDL, tránh lưu mật khẩu dạng văn bản thuần. |
| `mysql2` | Hỗ trợ kết nối MySQL, dùng được Promise API, phù hợp với xử lý bất đồng bộ trong Node.js. |
| Middleware `isAuthenticated` | Kiểm tra người dùng đã đăng nhập hay chưa trước khi cho phép gửi comment. |
| Middleware `isAdmin` | Kiểm tra quyền Admin trước khi truy cập trang quản trị. |

Việc sử dụng middleware giúp tách riêng phần kiểm tra quyền khỏi controller chính. Nhờ đó, code dễ đọc hơn, dễ bảo trì hơn và tránh lặp lại logic kiểm tra đăng nhập ở nhiều route.

### 2. Giải thích luồng đi của dữ liệu từ Request đến Response

Ví dụ luồng đăng nhập người dùng:

```text
Client
  |
  | POST /api/auth/signin
  | Body: { username, password }
  v
authRoutes.js
  |
  | Gọi controller signin
  v
authController.js
  |
  | Kiểm tra username/password
  | Truy vấn bảng users
  | So sánh mật khẩu bằng bcrypt.compare
  | Lưu thông tin user vào session
  v
MySQL
  |
  | Trả dữ liệu user
  v
Server Response
  |
  | JSON: { ok: true, msg, user }
  v
Client
```

Diễn giải chi tiết:

Bước 1: Người dùng nhập username và password trên giao diện đăng nhập.

Bước 2: Frontend gửi request `POST /api/auth/signin` đến server bằng Fetch API.

Bước 3: Route `/api/auth/signin` chuyển request đến hàm `signin` trong `authController.js`.

Bước 4: Controller kiểm tra dữ liệu đầu vào, sau đó truy vấn MySQL để tìm user theo username.

Bước 5: Nếu user tồn tại, hệ thống dùng `bcrypt.compare()` để so sánh mật khẩu người dùng nhập với mật khẩu đã mã hóa trong CSDL.

Bước 6: Nếu hợp lệ, server lưu thông tin user vào `req.session.user`.

Bước 7: Server trả response dạng JSON cho Frontend.

Bước 8: Frontend nhận kết quả và chuyển người dùng đến trang phù hợp.

### 3. Giải thích cách vận hành phần việc cá nhân trong website

Phần việc cá nhân của em là xây dựng chức năng xác thực và phân quyền người dùng.

Các file chính liên quan:

| File | Vai trò |
|---|---|
| `src/routes/authRoutes.js` | Khai báo các route đăng ký, đăng nhập, kiểm tra session, đăng xuất. |
| `src/controllers/authController.js` | Xử lý logic đăng ký, đăng nhập, mã hóa và kiểm tra mật khẩu. |
| `src/middleware/auth.js` | Kiểm tra trạng thái đăng nhập và quyền Admin. |
| `src/config/database.js` | Kết nối MySQL và khởi tạo bảng `users`. |
| `public/js/login.js` | Gửi dữ liệu đăng nhập/đăng ký từ giao diện lên server. |

Cách vận hành:

Bước 1: Khi người dùng đăng ký, hệ thống nhận username, email, password và confirmPassword.

Bước 2: Backend kiểm tra dữ liệu, kiểm tra username/email có bị trùng hay không.

Bước 3: Nếu hợp lệ, mật khẩu được mã hóa bằng `bcrypt.hash()` rồi lưu vào bảng `users`.

Bước 4: Khi đăng nhập, Backend lấy user theo username và dùng `bcrypt.compare()` để kiểm tra mật khẩu.

Bước 5: Nếu đăng nhập thành công, thông tin user được lưu vào session.

Bước 6: Khi người dùng truy cập route cần bảo vệ, middleware kiểm tra session.

Bước 7: Nếu là Admin, người dùng được phép vào trang `/admin`; nếu không đủ quyền, hệ thống trả về lỗi 403.

Nhờ cách tổ chức này, phần xác thực được tách riêng, dễ kiểm tra và có thể mở rộng thêm các quyền khác trong tương lai.
