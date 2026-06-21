
CREATE database web_login_db;
USE web_login_db;
DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contentId` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` VARCHAR(255) NULL,
  `content` TEXT NOT NULL,
  `rating` int DEFAULT '5',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `comments` VALUES (1,'1','thuong','thuong@gmail.com','Flashcard rất hay!',5,'2026-06-09 01:42:19'),(2,'1','duc','duc@gmail.com','Cần thêm ví dụ',4,'2026-06-09 01:42:19'),(3,'2','thao','thao@gmail.com','Giao diện đẹp!',5,'2026-06-09 01:42:19');


DROP TABLE IF EXISTS `contents`;

CREATE TABLE `contents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `body` text NOT NULL,
  `type` varchar(50) DEFAULT 'flashcard',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `contents` VALUES (1,'Động từ bất quy tắc - Go','Go - Went - Gone','flashcard','2026-06-09 01:42:19'),(2,'Từ vựng gia đình','Father, Mother, Brother, Sister','flashcard','2026-06-09 01:42:19'),(3,'Thời tiết','Sunny, Rainy, Cloudy, Windy','flashcard','2026-06-09 01:42:19');


DROP TABLE IF EXISTS `page_views`;
CREATE TABLE `page_views` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_url` varchar(255) NOT NULL,
  `view_date` date NOT NULL,
  `view_count` int DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_view` (`page_url`,`view_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `users` VALUES (14,'admin','admin@gmail.com','$2b$10$5hv73i63rh7UG406rgl6NOsn20/QdhjAyU5o9HcrBpAhgYufl3uUi','admin','2026-03-09 14:13:49');

DROP TABLE IF EXISTS `view_logs`;

CREATE TABLE `view_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_url` varchar(255) NOT NULL,
  `visitor_id` varchar(100) DEFAULT NULL,
  `visited_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `flashcard_cards`;
DROP TABLE IF EXISTS `flashcard_collections`;

CREATE TABLE `flashcard_collections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(200) NOT NULL,
  `status` varchar(50) DEFAULT 'Đang học',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `flashcard_collections_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `flashcard_cards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `collection_id` int NOT NULL,
  `term` varchar(500) NOT NULL,
  `definition` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `collection_id` (`collection_id`),
  CONSTRAINT `flashcard_cards_collection_fk` FOREIGN KEY (`collection_id`) REFERENCES `flashcard_collections` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Thêm bảng lưu phản hồi
CREATE TABLE `feedback_replies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int NOT NULL,
  `admin_username` varchar(50) NOT NULL,
  `reply` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `feedback_replies_comment_fk` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Thêm bảng lưu thông báo
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `type` varchar(50) DEFAULT 'info',
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
