/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `assignments`;
CREATE TABLE `assignments` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính bài tập',
  `class_id` int NOT NULL COMMENT 'Lớp được giao bài',
  `teacher_id` int NOT NULL COMMENT 'Giáo viên tạo bài',
  `title` varchar(255) NOT NULL COMMENT 'Tên bài tập',
  `description` text COMMENT 'Nội dung bài tập',
  `attachment` varchar(500) DEFAULT NULL COMMENT 'File đính kèm',
  `due_date` datetime DEFAULT NULL COMMENT 'Hạn nộp bài',
  `status` enum('DRAFT','PUBLISHED','CLOSED') DEFAULT 'DRAFT' COMMENT 'Trạng thái bài tập',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_assignment_class` (`class_id`),
  KEY `fk_assignment_teacher` (`teacher_id`),
  CONSTRAINT `fk_assignment_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_assignment_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu bài tập của lớp học';

DROP TABLE IF EXISTS `attendance`;
CREATE TABLE `attendance` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính điểm danh',
  `enrollment_id` int NOT NULL COMMENT 'Học viên trong lớp',
  `class_id` int NOT NULL COMMENT 'Lớp học',
  `attendance_date` date NOT NULL COMMENT 'Ngày điểm danh',
  `status` enum('PRESENT','ABSENT','LATE','EXCUSED') DEFAULT 'PRESENT' COMMENT 'Trạng thái điểm danh',
  `note` varchar(255) DEFAULT NULL COMMENT 'Ghi chú nghỉ học hoặc đi trễ',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo bản ghi',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_attendance` (`enrollment_id`,`attendance_date`),
  KEY `fk_attendance_class` (`class_id`),
  CONSTRAINT `fk_attendance_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_attendance_enrollment` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu điểm danh học viên';

DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính lớp học',
  `course_id` int NOT NULL COMMENT 'Khóa học của lớp',
  `schedule_id` int DEFAULT NULL COMMENT 'Đợt khai giảng tạo lớp',
  `teacher_id` int DEFAULT NULL COMMENT 'Giáo viên phụ trách',
  `class_code` varchar(50) NOT NULL COMMENT 'Mã lớp học',
  `name` varchar(150) NOT NULL COMMENT 'Tên lớp học',
  `start_date` date NOT NULL COMMENT 'Ngày bắt đầu học',
  `end_date` date DEFAULT NULL COMMENT 'Ngày kết thúc dự kiến',
  `study_time` varchar(255) DEFAULT NULL COMMENT 'Lịch học',
  `room` varchar(100) DEFAULT NULL COMMENT 'Phòng học',
  `max_students` int DEFAULT '20' COMMENT 'Số lượng học viên tối đa',
  `status` enum('PLANNING','OPEN','RUNNING','FINISHED','CANCELLED') DEFAULT 'PLANNING' COMMENT 'Trạng thái lớp học',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo lớp',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `class_code` (`class_code`),
  KEY `fk_classes_course` (`course_id`),
  KEY `fk_classes_schedule` (`schedule_id`),
  KEY `fk_classes_teacher` (`teacher_id`),
  CONSTRAINT `fk_classes_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_classes_schedule` FOREIGN KEY (`schedule_id`) REFERENCES `opening_schedules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_classes_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu các lớp học đang mở';

DROP TABLE IF EXISTS `course_categories`;
CREATE TABLE `course_categories` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính danh mục khóa học',
  `name` varchar(100) NOT NULL COMMENT 'Tên danh mục khóa học',
  `slug` varchar(120) NOT NULL COMMENT 'Chuỗi URL thân thiện SEO',
  `description` text COMMENT 'Mô tả danh mục khóa học',
  `image` varchar(500) DEFAULT NULL COMMENT 'Ảnh đại diện danh mục',
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE' COMMENT 'Trạng thái danh mục',
  `sort_order` int DEFAULT '0' COMMENT 'Thứ tự hiển thị',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu nhóm danh mục khóa học';

DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính khóa học',
  `category_id` int NOT NULL COMMENT 'Danh mục khóa học',
  `title` varchar(150) NOT NULL COMMENT 'Tên khóa học',
  `slug` varchar(180) NOT NULL COMMENT 'Đường dẫn SEO của khóa học',
  `short_description` varchar(500) DEFAULT NULL COMMENT 'Mô tả ngắn hiển thị danh sách khóa học',
  `description` longtext COMMENT 'Nội dung giới thiệu chi tiết khóa học',
  `image` varchar(500) DEFAULT NULL COMMENT 'Ảnh đại diện khóa học',
  `target_students` text COMMENT 'Đối tượng học viên phù hợp',
  `level` varchar(100) DEFAULT NULL COMMENT 'Trình độ đầu vào hoặc trình độ đạt được',
  `duration` varchar(100) DEFAULT NULL COMMENT 'Thời lượng khóa học',
  `study_method` enum('OFFLINE','ONLINE','BOTH') DEFAULT 'OFFLINE' COMMENT 'Hình thức học',
  `status` enum('ACTIVE','INACTIVE','DRAFT') DEFAULT 'ACTIVE' COMMENT 'Trạng thái khóa học',
  `featured` tinyint(1) DEFAULT '0' COMMENT 'Khóa học nổi bật trên trang chủ',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo khóa học',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật khóa học',
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `fk_courses_category` (`category_id`),
  CONSTRAINT `fk_courses_category` FOREIGN KEY (`category_id`) REFERENCES `course_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu thông tin các khóa học';

DROP TABLE IF EXISTS `enrollments`;
CREATE TABLE `enrollments` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính đăng ký lớp học',
  `class_id` int NOT NULL COMMENT 'Lớp học tham gia',
  `student_id` int NOT NULL COMMENT 'Tài khoản học viên',
  `enrollment_date` date DEFAULT (curdate()) COMMENT 'Ngày nhập học',
  `status` enum('PENDING','ACTIVE','COMPLETED','DROPPED','CANCELLED') DEFAULT 'PENDING' COMMENT 'Trạng thái học viên trong lớp',
  `final_score` decimal(5,2) DEFAULT NULL COMMENT 'Điểm tổng kết cuối khóa',
  `note` text COMMENT 'Ghi chú về học viên',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo đăng ký',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_student_class` (`class_id`,`student_id`),
  KEY `fk_enrollment_student` (`student_id`),
  CONSTRAINT `fk_enrollment_class` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_enrollment_student` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu học viên tham gia lớp học';

DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính điểm số',
  `enrollment_id` int NOT NULL COMMENT 'Học viên trong lớp',
  `teacher_id` int NOT NULL COMMENT 'Giáo viên nhập điểm',
  `name` varchar(150) NOT NULL COMMENT 'Tên bài kiểm tra',
  `score` decimal(5,2) NOT NULL COMMENT 'Điểm số',
  `max_score` decimal(5,2) DEFAULT '10.00' COMMENT 'Điểm tối đa',
  `note` text COMMENT 'Nhận xét của giáo viên',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_grade_enrollment` (`enrollment_id`),
  KEY `fk_grade_teacher` (`teacher_id`),
  CONSTRAINT `fk_grade_enrollment` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_grade_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu điểm học viên';

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính bài viết',
  `category_id` int NOT NULL COMMENT 'Danh mục bài viết',
  `author_id` int NOT NULL COMMENT 'Người tạo bài viết',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề bài viết',
  `slug` varchar(255) NOT NULL COMMENT 'URL SEO bài viết',
  `short_description` varchar(500) DEFAULT NULL COMMENT 'Mô tả ngắn hiển thị danh sách',
  `content` longtext NOT NULL COMMENT 'Nội dung chi tiết bài viết',
  `image` varchar(500) DEFAULT NULL COMMENT 'Ảnh đại diện bài viết',
  `status` enum('DRAFT','PUBLISHED','HIDDEN') DEFAULT 'DRAFT' COMMENT 'Trạng thái bài viết',
  `published_at` datetime DEFAULT NULL COMMENT 'Thời gian xuất bản',
  `view_count` int DEFAULT '0' COMMENT 'Số lượt xem',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `fk_news_category` (`category_id`),
  KEY `fk_news_author` (`author_id`),
  CONSTRAINT `fk_news_author` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_news_category` FOREIGN KEY (`category_id`) REFERENCES `news_categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu bài viết tin tức';

DROP TABLE IF EXISTS `news_categories`;
CREATE TABLE `news_categories` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính danh mục tin tức',
  `name` varchar(100) NOT NULL COMMENT 'Tên danh mục tin tức',
  `slug` varchar(120) NOT NULL COMMENT 'URL SEO của danh mục',
  `description` text COMMENT 'Mô tả danh mục',
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE' COMMENT 'Trạng thái danh mục',
  `sort_order` int DEFAULT '0' COMMENT 'Thứ tự hiển thị',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu danh mục bài viết tin tức';

DROP TABLE IF EXISTS `opening_schedules`;
CREATE TABLE `opening_schedules` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính lịch khai giảng',
  `course_id` int NOT NULL COMMENT 'Khóa học được mở',
  `teacher_id` int DEFAULT NULL COMMENT 'Giáo viên phụ trách lớp',
  `start_date` date NOT NULL COMMENT 'Ngày khai giảng',
  `end_date` date DEFAULT NULL COMMENT 'Ngày kết thúc dự kiến',
  `study_time` varchar(255) DEFAULT NULL COMMENT 'Lịch học trong tuần',
  `study_method` enum('OFFLINE','ONLINE','BOTH') DEFAULT 'OFFLINE' COMMENT 'Hình thức học',
  `room` varchar(100) DEFAULT NULL COMMENT 'Phòng học nếu học offline',
  `max_students` int DEFAULT '20' COMMENT 'Số lượng học viên tối đa',
  `current_students` int DEFAULT '0' COMMENT 'Số lượng học viên hiện tại',
  `tuition` decimal(12,2) DEFAULT NULL COMMENT 'Học phí của đợt khai giảng',
  `status` enum('OPEN','FULL','STARTED','CLOSED') DEFAULT 'OPEN' COMMENT 'Trạng thái lớp khai giảng',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  KEY `fk_schedule_course` (`course_id`),
  KEY `fk_schedule_teacher` (`teacher_id`),
  CONSTRAINT `fk_schedule_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_schedule_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu lịch khai giảng các lớp học';

DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính thanh toán',
  `enrollment_id` int NOT NULL COMMENT 'Đăng ký lớp học',
  `amount` decimal(12,2) NOT NULL COMMENT 'Số tiền thanh toán',
  `payment_method` enum('CASH','BANK_TRANSFER','ONLINE') DEFAULT 'CASH' COMMENT 'Phương thức thanh toán',
  `transaction_code` varchar(100) DEFAULT NULL COMMENT 'Mã giao dịch',
  `status` enum('PENDING','PAID','FAILED','REFUNDED') DEFAULT 'PENDING' COMMENT 'Trạng thái thanh toán',
  `paid_at` datetime DEFAULT NULL COMMENT 'Thời gian thanh toán',
  `note` text COMMENT 'Ghi chú',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_payment_enrollment` (`enrollment_id`),
  CONSTRAINT `fk_payment_enrollment` FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng quản lý thanh toán học phí';

DROP TABLE IF EXISTS `placement_tests`;
CREATE TABLE `placement_tests` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính bài kiểm tra trình độ',
  `user_id` int DEFAULT NULL COMMENT 'Tài khoản người làm bài nếu có',
  `recommended_course_id` int DEFAULT NULL COMMENT 'Khóa học được đề xuất sau kiểm tra',
  `full_name` varchar(100) NOT NULL COMMENT 'Họ tên người kiểm tra',
  `email` varchar(150) DEFAULT NULL COMMENT 'Email liên hệ',
  `phone` varchar(20) DEFAULT NULL COMMENT 'Số điện thoại',
  `total_questions` int DEFAULT '0' COMMENT 'Tổng số câu hỏi',
  `correct_answers` int DEFAULT '0' COMMENT 'Số câu trả lời đúng',
  `score` decimal(5,2) DEFAULT NULL COMMENT 'Điểm kiểm tra',
  `level_result` varchar(100) DEFAULT NULL COMMENT 'Trình độ đánh giá',
  `recommendation` text COMMENT 'Tư vấn sau khi kiểm tra',
  `status` enum('STARTED','COMPLETED','CONSULTED') DEFAULT 'STARTED' COMMENT 'Trạng thái bài kiểm tra',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày bắt đầu kiểm tra',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  KEY `fk_test_user` (`user_id`),
  KEY `fk_test_course` (`recommended_course_id`),
  CONSTRAINT `fk_test_course` FOREIGN KEY (`recommended_course_id`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_test_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu kết quả kiểm tra trình độ đầu vào';

DROP TABLE IF EXISTS `registrations`;
CREATE TABLE `registrations` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính yêu cầu đăng ký',
  `user_id` int DEFAULT NULL COMMENT 'Tài khoản nếu khách đã đăng nhập',
  `course_id` int DEFAULT NULL COMMENT 'Khóa học khách quan tâm',
  `full_name` varchar(100) NOT NULL COMMENT 'Họ tên người đăng ký',
  `phone` varchar(20) NOT NULL COMMENT 'Số điện thoại liên hệ',
  `email` varchar(150) DEFAULT NULL COMMENT 'Email liên hệ',
  `message` text COMMENT 'Nội dung yêu cầu tư vấn',
  `source` enum('CONTACT_PAGE','COURSE_PAGE','TRIAL','OTHER') DEFAULT 'CONTACT_PAGE' COMMENT 'Nguồn tạo đăng ký',
  `status` enum('NEW','CONTACTED','CONSULTING','CONFIRMED','CANCELLED') DEFAULT 'NEW' COMMENT 'Trạng thái xử lý',
  `note` text COMMENT 'Ghi chú của nhân viên tư vấn',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo yêu cầu',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  KEY `fk_registration_user` (`user_id`),
  KEY `fk_registration_course` (`course_id`),
  CONSTRAINT `fk_registration_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_registration_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu yêu cầu đăng ký và tư vấn của khách hàng';

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính của bảng quyền',
  `name` varchar(50) NOT NULL COMMENT 'Tên quyền: ADMIN, TEACHER, STUDENT',
  `description` varchar(255) DEFAULT NULL COMMENT 'Mô tả quyền',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Thời gian tạo bản ghi',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu các nhóm quyền trong hệ thống';

DROP TABLE IF EXISTS `teacher_courses`;
CREATE TABLE `teacher_courses` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính quan hệ giáo viên - khóa học',
  `teacher_id` int NOT NULL COMMENT 'ID giáo viên',
  `course_id` int NOT NULL COMMENT 'ID khóa học',
  `role` varchar(100) DEFAULT NULL COMMENT 'Vai trò của giáo viên trong khóa học',
  `assigned_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày phân công giảng dạy',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_teacher_course` (`teacher_id`,`course_id`),
  KEY `fk_teacher_courses_course` (`course_id`),
  CONSTRAINT `fk_teacher_courses_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_teacher_courses_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng liên kết giáo viên và khóa học';

DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính hồ sơ giáo viên',
  `user_id` int NOT NULL COMMENT 'Liên kết tài khoản đăng nhập của giáo viên',
  `specialization` varchar(150) DEFAULT NULL COMMENT 'Chuyên môn giảng dạy',
  `experience` varchar(100) DEFAULT NULL COMMENT 'Số năm kinh nghiệm',
  `education` varchar(255) DEFAULT NULL COMMENT 'Trình độ học vấn/chứng chỉ',
  `introduction` text COMMENT 'Giới thiệu chi tiết về giáo viên',
  `avatar` varchar(500) DEFAULT NULL COMMENT 'Ảnh đại diện giáo viên',
  `phone` varchar(20) DEFAULT NULL COMMENT 'Số điện thoại liên hệ công việc',
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE' COMMENT 'Trạng thái giáo viên',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo hồ sơ',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật hồ sơ',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `fk_teachers_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu thông tin hồ sơ giáo viên';

DROP TABLE IF EXISTS `trial_registrations`;
CREATE TABLE `trial_registrations` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính đăng ký học thử',
  `user_id` int DEFAULT NULL COMMENT 'Tài khoản người đăng ký nếu có',
  `course_id` int DEFAULT NULL COMMENT 'Khóa học muốn học thử',
  `full_name` varchar(100) NOT NULL COMMENT 'Họ tên học viên',
  `phone` varchar(20) NOT NULL COMMENT 'Số điện thoại liên hệ',
  `email` varchar(150) DEFAULT NULL COMMENT 'Email liên hệ',
  `age` int DEFAULT NULL COMMENT 'Độ tuổi học viên',
  `current_level` varchar(100) DEFAULT NULL COMMENT 'Trình độ hiện tại',
  `preferred_time` varchar(255) DEFAULT NULL COMMENT 'Thời gian mong muốn học thử',
  `note` text COMMENT 'Ghi chú thêm',
  `trial_date` date DEFAULT NULL COMMENT 'Ngày học thử được sắp xếp',
  `status` enum('NEW','SCHEDULED','COMPLETED','CANCELLED') DEFAULT 'NEW' COMMENT 'Trạng thái học thử',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày đăng ký',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  KEY `fk_trial_user` (`user_id`),
  KEY `fk_trial_course` (`course_id`),
  CONSTRAINT `fk_trial_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_trial_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu đăng ký học thử miễn phí';

DROP TABLE IF EXISTS `tuition_plans`;
CREATE TABLE `tuition_plans` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính gói học phí',
  `course_id` int NOT NULL COMMENT 'Khóa học áp dụng học phí',
  `name` varchar(150) NOT NULL COMMENT 'Tên gói học phí',
  `price` decimal(12,2) NOT NULL COMMENT 'Giá tiền khóa học',
  `original_price` decimal(12,2) DEFAULT NULL COMMENT 'Giá gốc trước giảm giá',
  `duration` varchar(100) DEFAULT NULL COMMENT 'Thời gian áp dụng gói học phí',
  `description` text COMMENT 'Mô tả chi tiết gói học phí',
  `benefits` text COMMENT 'Quyền lợi trong gói học phí',
  `is_discount` tinyint(1) DEFAULT '0' COMMENT 'Có đang giảm giá hay không',
  `discount_percent` int DEFAULT '0' COMMENT 'Phần trăm giảm giá',
  `status` enum('ACTIVE','INACTIVE') DEFAULT 'ACTIVE' COMMENT 'Trạng thái gói học phí',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật',
  PRIMARY KEY (`id`),
  KEY `fk_tuition_course` (`course_id`),
  CONSTRAINT `fk_tuition_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu các gói học phí của khóa học';

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Khóa chính của tài khoản',
  `role_id` int NOT NULL COMMENT 'ID quyền của người dùng',
  `full_name` varchar(100) NOT NULL COMMENT 'Họ và tên người dùng',
  `email` varchar(150) NOT NULL COMMENT 'Email đăng nhập',
  `phone` varchar(20) DEFAULT NULL COMMENT 'Số điện thoại',
  `password_hash` varchar(255) NOT NULL COMMENT 'Mật khẩu đã mã hóa',
  `avatar` varchar(500) DEFAULT NULL COMMENT 'Đường dẫn hình đại diện',
  `date_of_birth` date DEFAULT NULL COMMENT 'Ngày sinh',
  `gender` enum('MALE','FEMALE','OTHER') DEFAULT NULL COMMENT 'Giới tính',
  `address` varchar(255) DEFAULT NULL COMMENT 'Địa chỉ',
  `status` enum('ACTIVE','INACTIVE','BLOCKED') DEFAULT 'ACTIVE' COMMENT 'Trạng thái tài khoản',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Ngày tạo tài khoản',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Ngày cập nhật cuối cùng',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_users_roles` (`role_id`),
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Bảng lưu tài khoản người dùng trong hệ thống';


INSERT INTO `attendance` (`id`, `enrollment_id`, `class_id`, `attendance_date`, `status`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2026-08-01', 'PRESENT', NULL, '2026-07-20 15:03:08', '2026-07-20 15:03:08');
INSERT INTO `classes` (`id`, `course_id`, `schedule_id`, `teacher_id`, `class_code`, `name`, `start_date`, `end_date`, `study_time`, `room`, `max_students`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 'TA-GT-2026-01', 'Tiếng Anh giao tiếp buổi tối K1', '2026-08-01', NULL, 'Thứ 2 - 4 - 6 (18:00 - 20:00)', 'Phòng A101', 20, 'OPEN', '2026-07-20 14:58:54', '2026-07-20 14:58:54');
INSERT INTO `course_categories` (`id`, `name`, `slug`, `description`, `image`, `status`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Tiếng Anh thiếu nhi', 'tieng-anh-thieu-nhi', 'Chương trình tiếng Anh dành cho trẻ em.', NULL, 'ACTIVE', 1, '2026-07-20 14:31:58', '2026-07-20 14:31:58'),
(2, 'Tiếng Anh thiếu niên', 'tieng-anh-thieu-nien', 'Chương trình tiếng Anh dành cho học sinh.', NULL, 'ACTIVE', 2, '2026-07-20 14:31:58', '2026-07-20 14:31:58'),
(3, 'Tiếng Anh giao tiếp', 'tieng-anh-giao-tiep', 'Khóa học phát triển kỹ năng nghe nói và phản xạ.', NULL, 'ACTIVE', 3, '2026-07-20 14:31:58', '2026-07-20 14:31:58'),
(4, 'Luyện thi chứng chỉ', 'luyen-thi-chung-chi', 'Ôn luyện IELTS, TOEIC và các chứng chỉ quốc tế.', NULL, 'ACTIVE', 4, '2026-07-20 14:31:58', '2026-07-20 14:31:58');
INSERT INTO `courses` (`id`, `category_id`, `title`, `slug`, `short_description`, `description`, `image`, `target_students`, `level`, `duration`, `study_method`, `status`, `featured`, `created_at`, `updated_at`) VALUES
(1, 3, 'Tiếng Anh giao tiếp', 'tieng-anh-giao-tiep', 'Cải thiện khả năng nghe nói và phản xạ tiếng Anh.', 'Khóa học giúp học viên tự tin giao tiếp trong công việc và cuộc sống.', NULL, NULL, 'Cơ bản - Trung cấp', '6 tháng', 'BOTH', 'ACTIVE', 1, '2026-07-20 14:32:56', '2026-07-20 14:32:56'),
(2, 1, 'Tiếng Anh thiếu nhi', 'tieng-anh-thieu-nhi', 'Chương trình tiếng Anh dành cho trẻ em.', 'Giúp trẻ xây dựng nền tảng tiếng Anh thông qua hoạt động tương tác.', NULL, NULL, 'Cơ bản', '8 tháng', 'OFFLINE', 'ACTIVE', 1, '2026-07-20 14:32:56', '2026-07-20 14:32:56'),
(3, 4, 'Luyện thi chứng chỉ', 'luyen-thi-chung-chi', 'Ôn luyện IELTS, TOEIC và chứng chỉ quốc tế.', 'Lộ trình học tập giúp học viên đạt mục tiêu điểm số.', NULL, NULL, 'Trung cấp - Nâng cao', '4-6 tháng', 'BOTH', 'ACTIVE', 0, '2026-07-20 14:32:56', '2026-07-20 14:32:56');
INSERT INTO `enrollments` (`id`, `class_id`, `student_id`, `enrollment_date`, `status`, `final_score`, `note`, `created_at`, `updated_at`) VALUES
(1, 1, 3, '2026-07-20', 'ACTIVE', NULL, NULL, '2026-07-20 15:01:56', '2026-07-20 15:01:56');

INSERT INTO `news` (`id`, `category_id`, `author_id`, `title`, `slug`, `short_description`, `content`, `image`, `status`, `published_at`, `view_count`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Khai giảng lớp tiếng Anh giao tiếp tháng 8', 'khai-giang-lop-tieng-anh-giao-tiep', 'Khóa học giúp học viên cải thiện nghe nói và tự tin giao tiếp.', 'Nội dung chi tiết bài viết...', NULL, 'PUBLISHED', '2026-07-20 14:43:17', 0, '2026-07-20 14:43:17', '2026-07-20 14:43:17'),
(2, 2, 1, 'Hoạt động ngoại khóa dành cho học viên thiếu nhi', 'hoat-dong-ngoai-khoa-thieu-nhi', 'Các hoạt động giúp học viên học tiếng Anh tự nhiên hơn.', 'Nội dung chi tiết bài viết...', NULL, 'PUBLISHED', '2026-07-20 14:43:17', 0, '2026-07-20 14:43:17', '2026-07-20 14:43:17');
INSERT INTO `news_categories` (`id`, `name`, `slug`, `description`, `status`, `sort_order`, `created_at`, `updated_at`) VALUES
(1, 'Khai giảng', 'khai-giang', 'Thông tin các lớp học sắp khai giảng.', 'ACTIVE', 1, '2026-07-20 14:42:31', '2026-07-20 14:42:31'),
(2, 'Hoạt động', 'hoat-dong', 'Các hoạt động ngoại khóa và sự kiện của trung tâm.', 'ACTIVE', 2, '2026-07-20 14:42:31', '2026-07-20 14:42:31'),
(3, 'Kinh nghiệm học', 'kinh-nghiem-hoc', 'Chia sẻ phương pháp học ngoại ngữ hiệu quả.', 'ACTIVE', 3, '2026-07-20 14:42:31', '2026-07-20 14:42:31'),
(4, 'Thông báo', 'thong-bao', 'Các thông báo mới từ trung tâm.', 'ACTIVE', 4, '2026-07-20 14:42:31', '2026-07-20 14:42:31');
INSERT INTO `opening_schedules` (`id`, `course_id`, `teacher_id`, `start_date`, `end_date`, `study_time`, `study_method`, `room`, `max_students`, `current_students`, `tuition`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2026-08-01', '2027-01-31', 'Thứ 2 - 4 - 6 (18:00 - 20:00)', 'OFFLINE', 'Phòng A101', 20, 0, '3500000.00', 'OPEN', '2026-07-20 14:44:33', '2026-07-20 14:44:33');

INSERT INTO `placement_tests` (`id`, `user_id`, `recommended_course_id`, `full_name`, `email`, `phone`, `total_questions`, `correct_answers`, `score`, `level_result`, `recommendation`, `status`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Nguyễn Văn Bình', 'binh@gmail.com', '0909123456', 50, 32, '64.00', 'Cơ bản', 'Nên tham gia khóa Tiếng Anh giao tiếp cơ bản.', 'COMPLETED', '2026-07-20 14:53:31', '2026-07-20 14:53:31');
INSERT INTO `registrations` (`id`, `user_id`, `course_id`, `full_name`, `phone`, `email`, `message`, `source`, `status`, `note`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Nguyễn Văn An', '0909123456', 'an@gmail.com', 'Muốn học tiếng Anh giao tiếp cho người mất gốc', 'COURSE_PAGE', 'NEW', NULL, '2026-07-20 14:49:38', '2026-07-20 14:49:38');
INSERT INTO `roles` (`id`, `name`, `description`, `created_at`) VALUES
(1, 'ADMIN', 'Quản trị hệ thống', '2026-07-20 14:27:55'),
(2, 'TEACHER', 'Giáo viên', '2026-07-20 14:27:55'),
(3, 'STUDENT', 'Học viên', '2026-07-20 14:27:55');
INSERT INTO `teacher_courses` (`id`, `teacher_id`, `course_id`, `role`, `assigned_at`) VALUES
(7, 1, 1, 'MAIN_TEACHER', '2026-07-20 14:39:21');
INSERT INTO `teachers` (`id`, `user_id`, `specialization`, `experience`, `education`, `introduction`, `avatar`, `phone`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Giáo viên tiếng Anh giao tiếp', '8 năm kinh nghiệm', 'Cử nhân Ngôn ngữ Anh', 'Chuyên đào tạo giao tiếp thực tế, phát âm và phản xạ tiếng Anh.', NULL, NULL, 'ACTIVE', '2026-07-20 14:34:29', '2026-07-20 14:34:29');
INSERT INTO `trial_registrations` (`id`, `user_id`, `course_id`, `full_name`, `phone`, `email`, `age`, `current_level`, `preferred_time`, `note`, `trial_date`, `status`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 'Trần Minh Anh', '0912345678', 'minhanh@gmail.com', 18, 'Cơ bản', 'Buổi tối thứ 2-4-6', NULL, NULL, 'NEW', '2026-07-20 14:50:44', '2026-07-20 14:50:44');
INSERT INTO `tuition_plans` (`id`, `course_id`, `name`, `price`, `original_price`, `duration`, `description`, `benefits`, `is_discount`, `discount_percent`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Gói tiêu chuẩn', '3500000.00', '4000000.00', '6 tháng', 'Khóa học tiếng Anh giao tiếp cơ bản.', 'Tài liệu miễn phí; Hỗ trợ giáo viên; Kiểm tra đầu vào', 1, 12, 'ACTIVE', '2026-07-20 14:47:56', '2026-07-20 14:47:56');
INSERT INTO `users` (`id`, `role_id`, `full_name`, `email`, `phone`, `password_hash`, `avatar`, `date_of_birth`, `gender`, `address`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Administrator', 'admin@xuanloc.edu.vn', '0123456789', '$2a$10$qL.HqfnkVr6xrs0yBVQ3CeYFgAdYZUKPtHZwBwCi1ZA2/M7WDxmTO', NULL, NULL, NULL, NULL, 'ACTIVE', '2026-07-20 14:30:24', '2026-07-20 14:30:24'),
(2, 2, 'Nguyễn Thị Minh Anh', 'minhanh@xuanloc.edu.vn', NULL, '$2a$10$qL.HqfnkVr6xrs0yBVQ3CeYFgAdYZUKPtHZwBwCi1ZA2/M7WDxmTO', NULL, NULL, NULL, NULL, 'ACTIVE', '2026-07-20 14:34:10', '2026-07-20 14:34:10'),
(3, 3, 'Nguyễn Văn A', 'student01@xuanloc.edu.vn', '0909123456', '$2a$10$qL.HqfnkVr6xrs0yBVQ3CeYFgAdYZUKPtHZwBwCi1ZA2/M7WDxmTO', NULL, NULL, NULL, NULL, 'ACTIVE', '2026-07-20 15:01:30', '2026-07-20 15:06:16');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;