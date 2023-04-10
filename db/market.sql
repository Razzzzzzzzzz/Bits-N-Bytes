-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2023 at 02:48 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `market`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `date_inserted` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `date_inserted`) VALUES
(1, 'Add-on Cards', '2023-02-04 10:01:08'),
(2, 'Cables and Adapters', '2023-02-04 10:05:36'),
(3, 'Casings and Power Supplies', '2023-02-04 10:05:36'),
(4, 'CD/DVD-R/RW Drives', '2023-02-04 10:05:36'),
(5, 'Cooling Devices', '2023-02-04 10:05:36'),
(6, 'Desktops Systems', '2023-02-04 10:05:36'),
(7, 'Digital Media Players', '2023-02-04 10:05:36'),
(8, 'Digital and Web Cameras', '2023-02-04 10:05:36'),
(9, 'Game Consoles', '2023-02-04 10:05:36'),
(10, 'Game Controllers', '2023-02-04 10:05:36'),
(11, 'Games and Software', '2023-02-04 10:05:36'),
(12, 'Graphics Cards', '2023-02-04 10:05:36'),
(13, 'Hard Disk Drives', '2023-02-04 10:05:36'),
(14, 'IT Books and References', '2023-02-04 10:05:36'),
(15, 'LAN and Net Devices', '2023-02-04 10:05:36'),
(16, 'Laptops and PDAs', '2023-02-04 10:05:36'),
(17, 'Laptops/PDA Accessories/Parts', '2023-02-04 10:05:36'),
(18, 'Media Players', '2023-02-04 10:05:36'),
(19, 'Memory Modules', '2023-02-04 10:05:36'),
(20, 'Mice, Keyboards', '2023-02-04 10:05:36'),
(21, 'Monitors, CRT/LCD', '2023-02-04 10:05:36'),
(22, 'Motherboards', '2023-02-04 10:05:36'),
(23, 'Multiple Items/Combos', '2023-02-04 10:05:36'),
(24, 'Portable Media Drives', '2023-02-04 10:05:36'),
(25, 'Portable Media and Storage', '2023-02-04 10:05:36'),
(26, 'Printers /Scanners', '2023-02-04 10:05:36'),
(27, 'Printers Inks/CIS/Toner', '2023-02-04 10:05:36'),
(28, 'Processors', '2023-02-04 10:05:36'),
(29, 'Repair Services PC/Laptop', '2023-02-04 10:05:36'),
(30, 'Sound Cards', '2023-02-04 10:05:36'),
(31, 'Speakers, Headsets, Mics', '2023-02-04 10:05:36'),
(32, 'Tech/IT Services', '2023-02-04 10:05:36'),
(33, 'UPS and AVRs', '2023-02-04 10:05:36'),
(34, 'Other PC Devices', '2023-02-04 10:05:36'),
(35, 'Smartphones', '2023-02-04 10:05:36');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` longtext DEFAULT NULL,
  `commentor` int(12) NOT NULL DEFAULT 0,
  `product_id` int(12) NOT NULL DEFAULT 0,
  `date_commented` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `commentor`, `product_id`, `date_commented`) VALUES
(3, 'Hahahaha nice product recommended!!', 5, 3, '2023-01-30 15:53:16'),
(4, 'I have received the product it is good.', 14, 3, '2023-01-30 16:12:08'),
(5, 'Hahsdhsadhasd sad life', 5, 1, '2023-01-31 09:38:31'),
(6, 'Ca we be partners?? haha\n', 1, 4, '2023-02-01 10:05:34');

-- --------------------------------------------------------

--
-- Table structure for table `group_chat`
--

CREATE TABLE `group_chat` (
  `id` int(11) NOT NULL,
  `sender` int(223) NOT NULL DEFAULT 0,
  `receiver` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_chat`
--

INSERT INTO `group_chat` (`id`, `sender`, `receiver`) VALUES
(1, 5, 1),
(2, 5, 6),
(3, 1, 6),
(5, 14, 6),
(6, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `text` longtext DEFAULT NULL,
  `sender` int(225) NOT NULL DEFAULT 0,
  `receiver` int(255) NOT NULL DEFAULT 0,
  `group_id` int(233) NOT NULL DEFAULT 0,
  `date_inserted` datetime NOT NULL DEFAULT current_timestamp(),
  `seen_status` int(122) NOT NULL DEFAULT 0,
  `file_status` int(23) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `text`, `sender`, `receiver`, `group_id`, `date_inserted`, `seen_status`, `file_status`) VALUES
(1, 'hi', 5, 1, 1, '2023-02-01 16:27:36', 1, 0),
(2, 'Hahahaha', 1, 5, 1, '2023-02-01 16:27:48', 1, 0),
(3, 'How you doing?', 1, 5, 1, '2023-02-01 16:27:48', 1, 0),
(4, 'hi', 5, 6, 2, '2023-02-02 09:29:35', 0, 0),
(5, 'Hadasdsadsad', 6, 5, 2, '2023-02-02 09:30:43', 1, 0),
(6, 'asdasdsad', 6, 5, 2, '2023-02-02 09:30:43', 1, 0),
(7, 'assets/images/faces/1.jpg', 6, 5, 2, '2023-02-02 09:30:43', 1, 1),
(8, 'hi!!', 1, 6, 3, '2023-02-03 08:55:11', 1, 0),
(10, 'hahahaha', 6, 5, 2, '2023-02-03 11:06:15', 0, 0),
(11, './img/1.png', 6, 1, 3, '2023-02-03 11:07:37', 1, 1),
(12, 'hey', 1, 6, 3, '2023-02-03 11:13:06', 1, 0),
(13, 'supp ?', 6, 1, 3, '2023-02-03 11:13:13', 1, 0),
(14, './img/2.jpg', 1, 6, 3, '2023-02-03 11:13:24', 1, 1),
(15, 'hi', 14, 6, 5, '2023-02-04 09:56:43', 0, 0),
(16, 'hi im a technician haha', 8, 1, 6, '2023-02-04 10:20:09', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `posted_product`
--

CREATE TABLE `posted_product` (
  `id` int(11) NOT NULL,
  `user_id` int(233) NOT NULL DEFAULT 0,
  `title` varchar(233) DEFAULT NULL,
  `details` longtext DEFAULT NULL,
  `price` double NOT NULL DEFAULT 0,
  `category` int(3) NOT NULL DEFAULT 0,
  `contact` varchar(100) NOT NULL DEFAULT '09000000000',
  `url_rand_id` int(233) NOT NULL DEFAULT 0,
  `date_posted` datetime NOT NULL DEFAULT current_timestamp(),
  `status` int(23) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posted_product`
--

INSERT INTO `posted_product` (`id`, `user_id`, `title`, `details`, `price`, `category`, `contact`, `url_rand_id`, `date_posted`, `status`) VALUES
(1, 1, 'For sale motherboard', 'This is a brand new Motherboard \nplease contact me if interested.', 5000, 1, '09759310456', 38421, '2023-01-28 11:24:48', 0),
(2, 1, 'Rgb fan for pc', 'Rgb fan for cooling inside system unit\nPm for inquiries.', 500, 5, '09759310455', 48774, '2023-01-28 11:52:15', 0),
(3, 1, 'SSD 240gb CDR King New', 'SSD 240 GB CDR King Original\nCall me for inquiries', 5300, 13, '5300', 43662, '2023-01-28 15:20:45', 0),
(4, 6, 'System unit for sale', 'This system unit is build with rgb fans and glass cover\nfor more info pm my account or call me.', 10000, 3, '09759310456', 37308, '2023-02-01 10:00:07', 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_photo`
--

CREATE TABLE `product_photo` (
  `id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `random_id` int(23) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_photo`
--

INSERT INTO `product_photo` (`id`, `url`, `random_id`) VALUES
(1, './products/3.png', 27826),
(2, './products/rgb.jfif', 56787),
(3, './products/motherboard.png', 38421),
(4, './products/rgb.jfif', 48774),
(5, './products/2.PNG', 48774),
(6, './products/3.png', 48774),
(7, './products/ssd2.jfif', 43662),
(8, './products/ssd.jfif', 43662),
(9, './products/ssd3.jpg', 43662),
(10, './products/4ba5cbec6104371f98dbc447a44328e6.jfif', 37308),
(11, './products/H73a45113eafa4434b5e7953bdec97d75I.jpg', 37308),
(12, './products/images.jfif', 37308),
(13, './products/1023eb1e3bcf3111e0594049dc08a97d.jfif', 37308);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `product_id` int(123) NOT NULL DEFAULT 0,
  `rater` int(12) NOT NULL DEFAULT 0,
  `date_rated` datetime NOT NULL DEFAULT current_timestamp(),
  `ratings` int(23) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `product_id`, `rater`, `date_rated`, `ratings`) VALUES
(1, 1, 5, '2023-01-30 13:42:21', 4),
(2, 1, 14, '2023-01-30 13:43:42', 5),
(4, 2, 14, '2023-01-30 14:17:47', 4),
(5, 3, 14, '2023-01-30 16:13:27', 3),
(6, 3, 5, '2023-01-31 08:09:20', 2),
(7, 4, 5, '2023-02-03 08:15:48', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(2) UNSIGNED NOT NULL DEFAULT 0,
  `verified` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `resettable` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
  `roles_mask` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `registered` int(10) UNSIGNED NOT NULL,
  `last_login` int(10) UNSIGNED DEFAULT NULL,
  `force_logout` mediumint(7) UNSIGNED NOT NULL DEFAULT 0,
  `user_status` int(100) NOT NULL DEFAULT 0,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` int(3) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `status`, `verified`, `resettable`, `roles_mask`, `registered`, `last_login`, `force_logout`, `user_status`, `url`, `active`) VALUES
(1, 'marben@gmail.com', '$2y$10$uU67zf74YlsGkrATTE3qiOHlO/vrOLxZJ14jHt.4bCJp9ZS/Z.T92', 'Bentong', 0, 1, 1, 0, 1670988342, 1675732962, 0, 1, 'assets/images/faces/1.jpg', 1),
(6, 'jakob@gmail.com', '$2y$10$uU67zf74YlsGkrATTE3qiOHlO/vrOLxZJ14jHt.4bCJp9ZS/Z.T92', 'Jakob', 0, 1, 1, 0, 1671149136, 1675392088, 0, 1, 'assets/images/faces/3.jpg', 0),
(5, 'marbz.gwapo@gmail.com', '$2y$10$loEDiaJZx3UoubNV6VKLZ.bnR1f.UQdM2rwZ.DEv1M.UUSZ.cyIFG', 'Dave123', 0, 1, 1, 0, 1670995406, 1675728864, 0, 0, './profile/mypic.jpg', 0),
(14, 'staff@gmail.com', '$2y$10$UwbBjJjAkchJNPC6jtPPt.LeNJtbn2llPn.esuZobhYILfLexQfsi', 'staff', 0, 1, 1, 0, 1674607153, 1675728852, 0, 0, './profile/mypic.jpg', 0),
(8, 'admin@gmail.com', '$2y$10$yowH4n5L/jc4ns2WZ1uNh.Qaufv74JIIEtPTO1PijhlkZwwGlBeWe', 'James Reid', 0, 1, 1, 0, 1671152327, 1675477164, 3, 2, './profile/mypic.jpg', 0),
(9, 'admin2@gmail.com', '$2y$10$ZL.MS5BKX74qZlQ5GL5g6.rM4iYz7ec/XsYo1xmNs6RIIeH2Z5F1G', 'admin2', 0, 1, 1, 0, 1671168131, NULL, 0, 2, './profile/mypic.jpg', 0),
(10, 'dave@gmail.com', '$2y$10$cRY1EgtSGJNsaPPjp/7uceaPaixXinjuxS.GRkLRHavmXB.06MnQu', 'dave', 0, 0, 1, 0, 1672707956, NULL, 0, 1, NULL, 0),
(11, '1@gmail.com', '$2y$10$Lt5LSdDVFxcpSlR6DAwhIumRHHQXiXuTNPNDuijJWlc3hoxEcMB3m', 'Jakob', 0, 1, 1, 0, 1672791361, 1674607075, 0, 1, NULL, 0),
(12, '2@gmail.com', '$2y$10$IUj4rHrXXuOhorewsyIjT.SLuPiEx2/jW6q/OOEu.y9nuSSAYyqBa', 'Jakob1212', 0, 0, 1, 0, 1672791390, NULL, 0, 1, NULL, 0),
(13, '34@gmail.com', '$2y$10$H4906GsTIMZZUoSRbjWGYu4rMRf6cqiq1yZHBF1Jlh.AeumRbwEP6', 'Jakob1212', 0, 0, 1, 0, 1672791439, NULL, 0, 1, NULL, 0),
(15, 'tech@gmail.com', '$2y$10$8M5bEl0pScI6cWtggqDzgOQ6y1Vg6xTF33FlaTKpVN7BI45h8QFsO', 'tech guy', 0, 1, 1, 0, 1675301162, NULL, 0, 2, 'assets/images/faces/1.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users_confirmations`
--

CREATE TABLE `users_confirmations` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selector` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_confirmations`
--

INSERT INTO `users_confirmations` (`id`, `user_id`, `email`, `selector`, `token`, `expires`) VALUES
(1, 1, 'marben@gmail.com', '6gN0B-FFnOpSdxUZ', '$2y$10$Q1LNfwXxOq.TB4MyWDFY7u47XlQHuQ4QdTpYXKeCCMU42MW68N1Fi', 1671074742),
(2, 2, 'dave@gmail.com', 'bcdv4miFGoUfFW-S', '$2y$10$VF5Pa/8oOdww1qpyKMU4q.NUVsKqPP/c/ho3CIKYGxAttdjm5c8wS', 1671076203),
(3, 3, 'marbenbenetez@gmail.com', 'hj6IHVbjso7uJEIy', '$2y$10$9MByKtQo8Aly6l3ILSyjnuwAhY9IM5G5Uu7fJaHwZryjImOttUDmi', 1671081568),
(4, 4, 'marbz.gwapo@gmail.com', 'amW2QGZ6Ae7GBzAu', '$2y$10$k2foEyDlVYvPYDCrCpgnn.TdIMULxdAQizy8HWIxPmia/hew.lrLS', 1671081680),
(5, 5, 'marbz.gwapo@gmail.com', 'eBmVdrrcEQTPw0V1', '$2y$10$kXR8YaiAllS.wzJ/B9zg/..kiGEokdmUX7m.dhT0gRfvvFrI/.LNS', 1671081806),
(6, 6, 'Jakob@gmail.com', 'ES3rMqEDU7C802jl', '$2y$10$PZDuAxdk0dBMAyN/T7p6w.vMpUIs0o.w6wXotoPhfVMc15.PSctiG', 1671235536),
(7, 7, 'polangui@gmail.com', 'N-tUi-PTRWISx9a6', '$2y$10$y/PtOTluVLbf56kBxhjG.O4ySr50iBs7thyppQO6CuMI8a3oM54IC', 1671235621),
(8, 8, 'admin@gmail.com', '5ezuZBG4FOycfdJs', '$2y$10$YDk8kTjXEJ9yTHcEfzGxpuWnquNlvUqYalYv1mL7uW8qN5rK8OwlG', 1671238727),
(9, 9, 'admin2@gmail.com', 'CdX25adWxZhhb6T4', '$2y$10$kKGwJ7SD8/AJuY7.pb.gqOMiDu8CugyMUHuT4C7gy8ryhOHfj0zoe', 1671254531),
(10, 10, 'dave@gmail.com', '2QAm1V0q_7L4Pk0d', '$2y$10$Q.2ko2B5BnVf.li8gN8qcOi8B0Y1kJ.e7LUtu97otaLlUx0QeZdlK', 1672794356),
(11, 11, '1@gmail.com', 'qV3gzXH7GiSmM4gM', '$2y$10$KBSPTSriLRlGNqgIX9ydvulZEhjIIcd4E.CzfreWC187eMm6FmcZy', 1672877761),
(12, 12, '2@gmail.com', 'oEXnGZJ8tKKZMw4g', '$2y$10$PrzGcDvhbRtjxIW7wkGb4eyHm0sAwX6no6Zira0FUGXGPQQyTYc8y', 1672877791),
(13, 13, '34@gmail.com', 'Yi4eO75lAi6rmR-l', '$2y$10$cl2.k9q.wnP5.voIBeC81.ByQajf3srUF2/Vz3iF61hvIWYasAqXO', 1672877839),
(14, 14, 'staff@gmail.com', 't81YfoxNF2i8oIIn', '$2y$10$kvE2xW4v7PD8lt9GiAgslOs01IuYZEsE993WqBCEDPzoJl1BYLKDy', 1674693553),
(15, 15, 'tech@gmail.com', 'W3nlmmix_eedncIt', '$2y$10$dN8A.ZF7OZabc1k13mYN0OGJTT1O1G2KsJoGqfrRfJ7RAt0uvhrlG', 1675387562);

-- --------------------------------------------------------

--
-- Table structure for table `users_remembered`
--

CREATE TABLE `users_remembered` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` int(10) UNSIGNED NOT NULL,
  `selector` varchar(24) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_resets`
--

CREATE TABLE `users_resets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` int(10) UNSIGNED NOT NULL,
  `selector` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_throttling`
--

CREATE TABLE `users_throttling` (
  `bucket` varchar(44) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `tokens` float UNSIGNED NOT NULL,
  `replenished_at` int(10) UNSIGNED NOT NULL,
  `expires_at` int(10) UNSIGNED NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_throttling`
--

INSERT INTO `users_throttling` (`bucket`, `tokens`, `replenished_at`, `expires_at`) VALUES
('ejWtPDKvxt-q7LZ3mFjzUoIWKJYzu47igC8Jd9mffFk', 72.1416, 1675732962, 1676272962),
('CUeQSH1MUnRpuE3Wqv_fI3nADvMpK_cg6VpYK37vgIw', 4, 1675301162, 1675733162),
('Jjl8HEbTSJpZBWoyXOajJXqciuUdngUbah061jwhliE', 19, 1675477157, 1675513157),
('1rTcy0YhWEFEeQZOh0tnQEcYLqb0-eu3ifKmraiKGow', 498.179, 1671170040, 1671342840),
('eGUCJnt1579e572UXuZGF7jbMfclc5DAVo1Hi_XssZY', 499, 1674867558, 1675040358),
('PjjNRSnirFPbKG1QbUDTnHEQyqaRlS59vSGT-2LqeBI', 499, 1675477157, 1675649957),
('NP-k5blCMEEfDghKXyYd4MpQk0TyN-qXsTGY-r0Keu4', 499, 1674607098, 1674779898);

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `user_id` int(233) NOT NULL DEFAULT 0,
  `address` varchar(255) NOT NULL DEFAULT '0',
  `contact` varchar(255) NOT NULL DEFAULT '0',
  `verified_id` varchar(255) NOT NULL DEFAULT '0',
  `verified_status` int(123) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `user_id`, `address`, `contact`, `verified_id`, `verified_status`) VALUES
(1, 15, 'Dumaguete City', '09759310456', '0', 1),
(2, 5, 'Tinoagan Bindoy Ph', '09759310456', '0', 0),
(3, 1, 'Dumaguete City', '09759310456', '0', 1),
(4, 14, '0', '0', '0', 0),
(5, 6, '54A Gulgowski Villages', '09759310456', '0', 1),
(6, 8, '0', '0', '0', 0),
(7, 9, '0', '0', '0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_chat`
--
ALTER TABLE `group_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posted_product`
--
ALTER TABLE `posted_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_photo`
--
ALTER TABLE `product_photo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users_confirmations`
--
ALTER TABLE `users_confirmations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `selector` (`selector`),
  ADD KEY `email_expires` (`email`,`expires`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users_remembered`
--
ALTER TABLE `users_remembered`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `selector` (`selector`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `users_resets`
--
ALTER TABLE `users_resets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `selector` (`selector`),
  ADD KEY `user_expires` (`user`,`expires`);

--
-- Indexes for table `users_throttling`
--
ALTER TABLE `users_throttling`
  ADD PRIMARY KEY (`bucket`),
  ADD KEY `expires_at` (`expires_at`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `group_chat`
--
ALTER TABLE `group_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `posted_product`
--
ALTER TABLE `posted_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `product_photo`
--
ALTER TABLE `product_photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users_confirmations`
--
ALTER TABLE `users_confirmations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users_remembered`
--
ALTER TABLE `users_remembered`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_resets`
--
ALTER TABLE `users_resets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
