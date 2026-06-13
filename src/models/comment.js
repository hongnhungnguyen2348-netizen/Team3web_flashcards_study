// Model comment đã được chuyển sang dùng MySQL trực tiếp trong commentController.js
// File này giữ lại để tham khảo cấu trúc bảng comments trong MySQL:
//
// CREATE TABLE comments (
//   id          INT AUTO_INCREMENT PRIMARY KEY,
//   contentId   VARCHAR(100) NOT NULL,
//   username    VARCHAR(50)  NOT NULL,
//   content     TEXT         NOT NULL,
//   rating      INT          DEFAULT 5,
//   createdAt   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
// );

module.exports = {}; 