// Model user dùng MySQL trực tiếp trong authController.js
// Cấu trúc bảng users trong MySQL:
//
// CREATE TABLE users (
//   id         INT AUTO_INCREMENT PRIMARY KEY,
//   username   VARCHAR(50)  NOT NULL UNIQUE,
//   email      VARCHAR(100) NOT NULL UNIQUE,
//   password   VARCHAR(255) NOT NULL,
//   role       ENUM('admin','user') DEFAULT 'user',
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

module.exports = {};