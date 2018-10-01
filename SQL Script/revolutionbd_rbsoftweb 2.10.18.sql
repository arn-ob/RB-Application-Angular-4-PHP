-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 01, 2018 at 08:02 PM
-- Server version: 10.1.35-MariaDB-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revolutionbd_rbsoftweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `BillNo` varchar(1000) NOT NULL,
  `AIid` varchar(500) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `totalSFT` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL,
  `PricePerSft` varchar(100) NOT NULL,
  `optionalPrice` varchar(50) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `advance` varchar(100) NOT NULL,
  `Due` varchar(100) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL,
  `LastModifiedDate` varchar(50) NOT NULL,
  `LastModifiedTime` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`BillNo`, `AIid`, `quantity`, `totalSFT`, `type`, `PricePerSft`, `optionalPrice`, `amount`, `advance`, `Due`, `CreatedTime`, `CreatedDate`, `LastModifiedDate`, `LastModifiedTime`) VALUES
('1745264be34', '1', '1', '6', 'PVC', '20', '0', '120', '120', '0', '05:45:48pm', '2018/09/13', '2018/09/13', '06:42:19pm'),
('1749799e4be', '1', '3', '9', 'PVC', '20', '0', '540', '400', '140', '05:50:00pm', '2018/09/13', '2018/09/13', '06:00:46pm'),
('1842586e5fe', '1', '5', 'undefined', 'PVC', '15', '0', '720', '123', '597', '06:43:10pm', '2018/09/13', '2018/09/13', '06:43:28pm'),
('12176507007', '1', '185', 'undefined', 'PVC', '18', '36', '10026', '10026', '0', '12:21:19pm', '2018/09/15', '2018/09/15', '12:25:34pm'),
('1314587102', '1', '10', '24', 'PVC', '12', '0', '2880', '1000', '1880', '01:15:59pm', '2018/09/15', '2018/09/15', '01:17:32pm'),
('1339126484e', '2', '1', '36', 'Frame (M/S)', '18', '0', '2880', '80', '2800', '01:42:34pm', '2018/09/15', '2018/09/15', '01:45:51pm'),
('1339126484e', '1', '1', '36', 'PVC', '62', '0', '2880', '80', '2800', '01:42:34pm', '2018/09/15', '2018/09/15', '01:45:50pm'),
('18382319b9f', '1', '10', '7', 'PVC', '20', '0', '1400', '1000', '400', '06:40:22pm', '2018/09/15', '2018/09/15', '06:40:54pm'),
('1325789d48b', '1', '1', '1', 'Frame (W)', '15', '0', '', '', '', '01:27:33pm', '2018/09/17', '', ''),
('20559542073', '1', '10', '15', 'PVC', '15', '500', '2750', '250', '2500', '08:58:21pm', '2018/09/18', '2018/09/18', '08:59:42pm'),
('10387607925', '1', '10', '10', 'PVC', '14', '1000', '4200', '2000', '2200', '10:41:33am', '2018/09/23', '2018/09/23', '10:46:31am'),
('10387607925', '2', '10', '7.5', 'PVC', '14', '750', '4200', '2000', '2200', '10:41:33am', '2018/09/23', '2018/09/23', '10:46:31am'),
('10426663c59', '1', '6', '18', 'PVC', '16', '0', '1728', '28', '1700', '10:44:00am', '2018/09/23', '2018/09/23', '10:50:55am'),
('105171669eb', '1', '1', '40', 'PVC', '1', '0', '', '', '', '10:54:25am', '2018/09/23', '', ''),
('1058153109e', '1', '1', '12', 'PVC', '1', '0', '', '', '', '11:13:01am', '2018/09/23', '', ''),
('11133433637', '1', '1', 'undefined', 'PVC', '16', '0', '1024', '1024', '0', '11:18:56am', '2018/09/23', '2018/09/23', '11:31:30am'),
('1131907cffe', '1', '2', '60', 'PVC', '14', '0', '', '', '', '11:36:10am', '2018/09/23', '', ''),
('1131907cffe', '2', '4', '30', 'PVC', '14', '0', '', '', '', '11:36:11am', '2018/09/23', '', ''),
('1136891a4a9', '1', '1', '52', 'PVC', '16', '0', '832', '832', '0', '11:39:20am', '2018/09/23', '2018/09/23', '11:40:23am'),
('11418292cc0', '1', '02', '15', 'PVC', '16', '6', '486', '486', '0', '11:43:18am', '2018/09/23', '', ''),
('11465411690', '1', '02', 'undefined', 'PVC', '16', '0', '48', '48', '0', '11:48:30am', '2018/09/23', '', ''),
('1442431faa', '2', '1', '21', 'PVC', '16', '0', '1104', '1104', '0', '02:46:47pm', '2018/09/23', '', ''),
('1442431faa', '1', '01', '24', 'PVC', '16', '0', '1104', '1104', '0', '02:46:47pm', '2018/09/23', '', ''),
('1442431faa', '3', '01', '24', 'PVC', '16', '0', '1104', '1104', '0', '02:46:48pm', '2018/09/23', '', ''),
('1459781c439', '1', '01', '6', 'PVC', '16', '25', '121', '121', '0', '03:03:24pm', '2018/09/23', '2018/09/23', '03:06:55pm'),
('158991f215', '1', '01', '3692', 'PVC', '1', '0', '', '', '', '03:11:20pm', '2018/09/23', '', ''),
('1512279e21b', '1', '01', '8', 'PVC', '16', '0', '128', '128', '0', '03:14:53pm', '2018/09/23', '', ''),
('15436628a0', '1', '32', '21', 'PVC', '12', '0', '8064', '2000', '6064', '03:54:53pm', '2018/09/23', '2018/09/23', '03:55:15pm'),
('1627161c14e', '1', '3', '6', 'PVC', '17', '0', '', '', '', '04:31:18pm', '2018/09/23', '', ''),
('1632868d369', '1', '01', '4', 'Vinyl Sticker', '30', '0', '120', '120', '0', '04:34:20pm', '2018/09/23', '2018/09/23', '04:34:55pm'),
('163558c102', '1', '01', '18', 'PVC', '16', '0', '384', '384', '0', '04:37:56pm', '2018/09/23', '2018/09/23', '04:38:56pm'),
('163558c102', '2', '01', '6', 'PVC', '16', '0', '384', '384', '0', '04:37:57pm', '2018/09/23', '2018/09/23', '04:38:56pm'),
('16389535f42', '1', '01', '112', 'PVC', '16', '0', '4032', '0', '4032', '04:40:34pm', '2018/09/23', '2018/09/23', '04:41:45pm'),
('16389535f42', '2', '02', '35', 'PVC', '16', '0', '4032', '0', '4032', '04:40:34pm', '2018/09/23', '2018/09/23', '04:41:45pm'),
('1642543d7ae', '1', '02', '3', 'Vinyl Sticker', '28', '0', '224', '220', '4', '04:44:10pm', '2018/09/23', '2018/09/23', '04:44:57pm'),
('1642543d7ae', '2', '02', '1', 'Vinyl Sticker', '28', '0', '224', '220', '4', '04:44:11pm', '2018/09/23', '2018/09/23', '04:44:57pm'),
('14518079063', '1', '1', '21', 'PVC', '18', '0', '728', '700', '28', '02:55:32pm', '2018/09/25', '', ''),
('14518079063', '2', '1', '10', 'Vinyl Sticker', '35', '0', '728', '700', '28', '02:55:32pm', '2018/09/25', '', ''),
('1737646d3de', '1', '01', '10', 'PVC', '18', '120', '300', '299', '1', '05:42:57pm', '2018/09/25', '', ''),
('1896295240', '1', '01', 'undefined', 'PVC', '13', '0', '325.5', '', '325.5', '06:10:09pm', '2018/09/25', '', ''),
('1896295240', '2', '01', '10', 'PVC', '15', '0', '325.5', '', '325.5', '06:10:09pm', '2018/09/25', '', ''),
('1814219b23d', '1', '01', '10', 'PVC', '18', '0', '180', '', '180', '06:19:55pm', '2018/09/25', '', ''),
('1820533f449', '1', '02', '7.5', 'PVC', '1', '10', '220', '', '220', '06:45:12pm', '2018/09/25', '', ''),
('1859404e0e9', '1', '02', '4', 'PVC', '16', '0', '128', '121', '7', '07:02:32pm', '2018/09/25', '2018/09/25', '07:03:04pm'),
('1957997cc2', '1', '01', '24', 'PVC', '35', '0', '840', '', '840', '07:06:25pm', '2018/09/25', '', ''),
('197553190', '1', '01', '32', 'PVC', '16', '0', '512', '511', '1', '07:11:04pm', '2018/09/25', '', ''),
('12271238a4c', '1', '01', '13.5', 'Vinyl Sticker', '35', '150', '832.5', '800', '32.5', '12:35:25pm', '2018/09/27', '', ''),
('12271238a4c', '2', '01', '6', 'Vinyl Sticker', '35', '0', '832.5', '800', '32.5', '12:35:25pm', '2018/09/27', '', ''),
('1250345c207', '1', '01', '18', 'PVC', '16', '0', '288', '285', '3', '12:52:20pm', '2018/09/27', '', ''),
('1310920e36a', '1', '02', '4', 'PVC', '15', '0', '', '', '', '01:14:40pm', '2018/09/27', '', ''),
('1314606bfab', '1', '1', '66', 'PVC', '14', '0', '924', '500', '424', '01:16:03pm', '2018/09/27', '', ''),
('131694ef79', '1', '01', '32', 'PVC', '14', '0', '448', '447', '1', '01:18:23pm', '2018/09/27', '', ''),
('13192961d10', '1', '01', '21', 'PVC', '16', '0', '1248', '', '1248', '01:21:47pm', '2018/09/27', '', ''),
('13192961d10', '2', '01', '18', 'PVC', '16', '0', '1248', '', '1248', '01:21:48pm', '2018/09/27', '', ''),
('155393e813', '1', '01', '36', 'PVC', '18', '0', '648', '', '648', '03:55:32pm', '2018/09/27', '', ''),
('1516344fed5', '1', '01', '4', 'Vinyl Sticker', '35', '0', '140', '139', '1', '04:52:30pm', '2018/09/29', '', ''),
('165587c08f', '1', '03', '28', 'PVC', '14', '0', '1904', '1904', '0', '04:58:57pm', '2018/09/29', '', ''),
('165587c08f', '2', '01', '52', 'PVC', '14', '0', '1904', '1904', '0', '04:58:57pm', '2018/09/29', '', ''),
('170239d1e1', '1', '01', '6', 'PVC', '16', '0', '96', '95', '1', '05:03:47pm', '2018/09/29', '', ''),
('1743128819', '3', '01', '48', 'PVC', '18', '0', '2220', '500', '1720', '05:17:24pm', '2018/09/29', '', ''),
('1743128819', '2', '01', '24', 'PVC', '18', '0', '2220', '500', '1720', '05:17:23pm', '2018/09/29', '', ''),
('1743128819', '4', '01', '20', 'PVC', '18', '0', '2220', '500', '1720', '05:17:24pm', '2018/09/29', '', ''),
('1743128819', '1', '01', '18', 'PVC', '18', '0', '2220', '500', '1720', '05:17:24pm', '2018/09/29', '', ''),
('1743128819', '5', '02', '3.75', 'PVC', '18', '0', '2220', '500', '1720', '05:17:24pm', '2018/09/29', '', ''),
('1743128819', '6', '02', '1.5', 'Vinyl Sticker', '35', '0', '2220', '500', '1720', '05:17:24pm', '2018/09/29', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `CashINOUT`
--

CREATE TABLE `CashINOUT` (
  `entryid` varchar(50) NOT NULL,
  `porpose` varchar(50) NOT NULL,
  `details` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CashINOUT`
--

INSERT INTO `CashINOUT` (`entryid`, `porpose`, `details`, `amount`, `type`, `updateby`, `CreatedTime`, `CreatedDate`) VALUES
('1712262b710', 'ads', 'asd', '22', 'in', 'admin', '5:12:56pm', '2018/8/5'),
('17144933e42', 'asd', 'assd', '22', 'in', 'admin', '5:14:2pm', '2018/8/5'),
('1715868853', 'df', 'sdf', '33', 'in', 'admin', '5:15:5pm', '2018/8/5'),
('1313393b4a2', 'TA', 'Marketing', '50', 'out', '', '1:13:59pm', '2018/8/6'),
('212811492a', 'Nasta', 'Singara', '50', 'out', 'admin', '9:2:30pm', '2018/8/2'),
('1420965af82', 'Media', 'MD pay', '8000', 'in', 'Accounts', '2:20:12pm', '2018/8/0'),
('1420269848', 'Media', 'MD pay', '8000', 'in', 'Accounts', '2:20:20pm', '2018/8/0'),
('1420620c0ae', 'Media', 'PVC 8.5', '7900', 'out', 'Accounts', '2:20:58pm', '2018/8/0'),
('1441272b45c', 'MD', 'Dhaka Bank', '1000', 'in', 'admin', '2:41:42pm', '2018/8/2'),
('144287b220', 'Dhaka Bank', 'Kisti', '1000', 'out', 'admin', '2:42:9pm', '2018/8/2'),
('2059211f6e', 'MD', 'Given', '2000', 'in', 'Accounts', '8:5:37pm', '2018/8/2'),
('2065054060', 'MD', 'Given', '2500', 'in', 'Accounts', '8:6:11pm', '2018/8/2'),
('2072297695', 'solim vai', 'banner', '2000', 'out', 'Accounts', '8:7:8pm', '2018/8/2'),
('20717283f5', 'mariya impress', 'stiker', '410', 'out', 'Accounts', '8:7:53pm', '2018/8/2'),
('208940b772', 'Employer', 'Daily ammount', '280', 'out', 'Accounts', '8:8:53pm', '2018/8/2');

-- --------------------------------------------------------

--
-- Table structure for table `client_details`
--

CREATE TABLE `client_details` (
  `name` varchar(100) NOT NULL,
  `AIid` varchar(500) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phoneNo1` varchar(50) NOT NULL,
  `phoneNo2` varchar(50) NOT NULL,
  `BillNo` varchar(1000) NOT NULL,
  `PartyName` varchar(100) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client_details`
--

INSERT INTO `client_details` (`name`, `AIid`, `address`, `phoneNo1`, `phoneNo2`, `BillNo`, `PartyName`, `CreatedTime`, `CreatedDate`) VALUES
('Arnob', '1', 'shalgaria', '01746110246', '0', '1745264be34', 'None', '05:45:48pm', '2018/09/13'),
('asd', '1', 'asd', '2324334', '0', '1749799e4be', 'None', '05:50:00pm', '2018/09/13'),
('fdg', '1', 'dfg', '4353', '0', '1842586e5fe', 'None', '06:43:10pm', '2018/09/13'),
('Mamun', '1', 'Nurpur', '01743927502', '0', '12176507007', 'Abdullah Al Mamun', '12:21:19pm', '2018/09/15'),
('Hemal', '1', 'Bangladesh Eid Gah', '01712356581', '0', '1314587102', 'Hemal Rana', '01:15:59pm', '2018/09/15'),
('Master', '2', 'Mujahid Club, Pabna', '01711421325', '0', '1339126484e', 'Head Sir', '01:42:34pm', '2018/09/15'),
('Master', '1', 'Mujahid Club, Pabna', '01711421325', '0', '1339126484e', 'Head Sir', '01:42:34pm', '2018/09/15'),
('Towhid', '1', 'Iswardi', '01717736210', '0', '18382319b9f', 'Mr. Towhid', '06:40:22pm', '2018/09/15'),
('kbh', '1', 'bhk', 'h', 'b', '1325789d48b', 'hjb', '01:27:33pm', '2018/09/17'),
('Kumer', '1', 'Pabna', '01937411466', '0', '20559542073', '-', '08:58:21pm', '2018/09/18'),
('Shipon', '1', 'Shalgaria, Pabna', '01719664848', '0', '10387607925', 'Shipon', '10:41:33am', '2018/09/23'),
('Shipon', '2', 'Shalgaria, Pabna', '01719664848', '0', '10387607925', 'Shipon', '10:41:33am', '2018/09/23'),
('Hannan Sir', '1', 'Pabna', '01718282359', '0', '10426663c59', 'Bonomali Shilpokola Accademy', '10:44:00am', '2018/09/23'),
('AD', '1', 'Zilla Education', '01716585397', '0', '105171669eb', 'AD', '10:54:25am', '2018/09/23'),
('Golam Ajom', '1', 'pabna ', '0173847653', '0', '1058153109e', 'Golam Ajom', '11:13:01am', '2018/09/23'),
('DSA', '1', 'Pabna', '017', '0', '11133433637', 'DSA', '11:18:56am', '2018/09/23'),
('D. Shamsul Alom', '1', 'Sathia,Pabna', '01740559615', '0', '1131907cffe', 'D. Samsul Alam', '11:36:10am', '2018/09/23'),
('D. Shamsul Alom', '2', 'Sathia,Pabna', '01740559615', '0', '1131907cffe', 'D. Samsul Alam', '11:36:11am', '2018/09/23'),
('Vumi office', '1', 'Pabna', '01731080880', '0', '1136891a4a9', 'Vumi office', '11:39:20am', '2018/09/23'),
('UHC', '1', 'Pabna', '01712669380', '0', '11418292cc0', 'UHC', '11:43:18am', '2018/09/23'),
('Nahid', '1', 'Chokchatiani,pabna', '01708543159', '0', '11465411690', 'Nahid', '11:48:30am', '2018/09/23'),
('Square school', '2', 'Pabna', '01733485017', '0', '1442431faa', 'Square school', '02:46:47pm', '2018/09/23'),
('Square school', '1', 'Pabna', '01733485017', '0', '1442431faa', 'Square school', '02:46:47pm', '2018/09/23'),
('Square school', '3', 'Pabna', '01733485017', '0', '1442431faa', 'Square school', '02:46:48pm', '2018/09/23'),
('Mukta medical', '1', 'Pabna', '01715210087', '0', '1459781c439', 'Mukta Medical', '03:03:24pm', '2018/09/23'),
('Principal', '1', 'pabna', '017', '0', '158991f215', 'Principal', '03:11:20pm', '2018/09/23'),
('Square school', '1', 'Pabna', '01778859167', '0', '1512279e21b', 'Apurb', '03:14:53pm', '2018/09/23'),
('Shisir', '1', 'pabna', '017', '0', '15436628a0', 'shisir', '03:54:53pm', '2018/09/23'),
('Sabbir', '1', 'Ataikula', '01735300107', '0', '1627161c14e', 'Sabbir', '04:31:18pm', '2018/09/23'),
('Events Pabna', '1', 'Pabna', '01719664848', '0', '1632868d369', 'Events Pabna', '04:34:20pm', '2018/09/23'),
('Shopon', '1', 'Pabna', '01718325753', '0', '163558c102', 'Shopon', '04:37:56pm', '2018/09/23'),
('Shopon', '2', 'Pabna', '01718325753', '0', '163558c102', 'Shopon', '04:37:57pm', '2018/09/23'),
('Yamin vai', '1', 'pabna', '017', '0', '16389535f42', 'Yamin', '04:40:34pm', '2018/09/23'),
('Yamin vai', '2', 'pabna', '017', '0', '16389535f42', 'Yamin', '04:40:34pm', '2018/09/23'),
('Ahmed Mehedi', '1', 'Pabna', '01912050505', '0', '1642543d7ae', 'Ahmed Mehedi', '04:44:10pm', '2018/09/23'),
('Ahmed Mehedi', '2', 'Pabna', '01912050505', '0', '1642543d7ae', 'Ahmed Mehedi', '04:44:11pm', '2018/09/23'),
('MT motors', '1', 'Pabna', '01767004849', '0', '14518079063', 'MT motors', '02:55:32pm', '2018/09/25'),
('MT motors', '2', 'Pabna', '01767004849', '0', '14518079063', 'MT motors', '02:55:32pm', '2018/09/25'),
('Amar bari', '1', 'Gobinda,pabna ', '01714332109', '0', '1737646d3de', 'Amar bari', '05:42:57pm', '2018/09/25'),
('BL computer', '1', 'Pabna', '017', '0', '1896295240', 'BL computer', '06:10:09pm', '2018/09/25'),
('BL computer', '2', 'Pabna', '017', '0', '1896295240', 'BL computer', '06:10:09pm', '2018/09/25'),
('Rasel', '1', 'Sujanogor,pabna', '01727949093', '0', '1814219b23d', 'Rasel', '06:19:55pm', '2018/09/25'),
('Events Pabna', '1', 'Pabna', '01719664848 ', '0', '1820533f449', 'Events Pabna', '06:45:12pm', '2018/09/25'),
('Manik', '1', 'Pabna', '01732054543', '0', '1859404e0e9', 'Manik', '07:02:32pm', '2018/09/25'),
('Latif Real state', '1', 'Pabna', '017', '0', '1957997cc2', 'Latif Real state', '07:06:25pm', '2018/09/25'),
('Bosto odhidoptor', '1', 'Rajshahi', '01721772518', '0', '197553190', 'Bosto odhidoptor', '07:11:04pm', '2018/09/25'),
('Bismillah Auto', '1', 'Pabna', '017`', '0', '12271238a4c', 'Bismillah Auto', '12:35:25pm', '2018/09/27'),
('Bismillah Auto', '2', 'Pabna', '017`', '0', '12271238a4c', 'Bismillah Auto', '12:35:25pm', '2018/09/27'),
('Nasir uddin', '1', 'Tebunia', '01716307317', '0', '1250345c207', 'Nasir uddin', '12:52:20pm', '2018/09/27'),
('Manik', '1', 'Pabna', '01732054543', '0', '1310920e36a', 'Manik', '01:14:40pm', '2018/09/27'),
('Munna Art', '1', 'Pabna', '01731480267', '0', '1314606bfab', 'Munna Art', '01:16:03pm', '2018/09/27'),
('Adarsha Girls', '1', 'pabna', '01716982949', '0', '131694ef79', 'Adarsha Girls', '01:18:23pm', '2018/09/27'),
('Manik', '1', 'Sujanogor,pabna', '01', '0', '13192961d10', 'Manik', '01:21:47pm', '2018/09/27'),
('Manik', '2', 'Sujanogor,pabna', '01', '0', '13192961d10', 'Manik', '01:21:48pm', '2018/09/27'),
('Setelment office', '1', 'Pabna', '01716142039', '0', '155393e813', 'Setelment office', '03:55:32pm', '2018/09/27'),
('Emon', '1', 'pabna', '01719209374', '0', '1516344fed5', 'Emon', '04:52:30pm', '2018/09/29'),
('Joynal Abedin', '1', 'Dulai.pabna', '01715151059', '0', '165587c08f', 'Joynal Abedin', '04:58:57pm', '2018/09/29'),
('Joynal Abedin', '2', 'Dulai.pabna', '01715151059', '0', '165587c08f', 'Joynal Abedin', '04:58:57pm', '2018/09/29'),
('Manik', '1', 'Pabna', '01720432981', '0', '170239d1e1', 'Manik', '05:03:47pm', '2018/09/29'),
('Nazim uddin', '1', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:24pm', '2018/09/29'),
('Nazim uddin', '3', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:24pm', '2018/09/29'),
('Nazim uddin', '2', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:23pm', '2018/09/29'),
('Nazim uddin', '4', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:24pm', '2018/09/29'),
('Nazim uddin', '5', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:24pm', '2018/09/29'),
('Nazim uddin', '6', 'Sathia', '01717487736', '0', '1743128819', ' Nazim uddin', '05:17:24pm', '2018/09/29');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` varchar(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `role`) VALUES
('YWRtaW4=', 'YWRtaW4=', 'YWRtaW4=', 'Admin'),
('QWNjb3VudHM=', 'QWNjb3VudHM=', 'YWNjb3VudHM=', 'Account'),
('T3V0cHV0', 'T3V0cHV0', 'MTIzNDU2', 'Print');

-- --------------------------------------------------------

--
-- Table structure for table `printdetails`
--

CREATE TABLE `printdetails` (
  `BillNo` varchar(1000) NOT NULL,
  `AIid` varchar(500) NOT NULL,
  `printName` varchar(100) NOT NULL,
  `PrintType` varchar(50) NOT NULL,
  `wide` varchar(50) NOT NULL,
  `height` varchar(50) NOT NULL,
  `sft` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `option` varchar(50) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL,
  `LastModifiedDate` varchar(50) NOT NULL,
  `LastModifiedTime` varchar(50) NOT NULL,
  `FileName` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `printdetails`
--

INSERT INTO `printdetails` (`BillNo`, `AIid`, `printName`, `PrintType`, `wide`, `height`, `sft`, `quantity`, `option`, `CreatedTime`, `CreatedDate`, `LastModifiedDate`, `LastModifiedTime`, `FileName`) VALUES
('1745264be34', '1', 'Arnob', 'PVC', '2', '3', '6', '1', 'None', '05:45:48pm', '2018/09/13', '', '', 'Arnob PVC 3x2x1'),
('1749799e4be', '1', 'sad', 'PVC', '3', '3', '9', '3', 'None', '05:50:00pm', '2018/09/13', '', '', 'sad PVC 3x3x3'),
('1842586e5fe', '1', 'vgxfg', 'PVC', '4', '2', '8', '6', 'None', '06:43:10pm', '2018/09/13', '', '', 'vgxfg PVC 5x4x5'),
('12176507007', '1', 'mp ', 'PVC', '1.5', '2', '3', '1', 'Frame (W)', '12:21:19pm', '2018/09/15', '', '', 'mp  PVC 3x1.5x185'),
('1314587102', '1', 'BNP', 'PVC', '4', '6', '24', '10', 'N/A', '01:15:59pm', '2018/09/15', '', '', 'BNP PVC 6x4x10'),
('1339126484e', '2', 'School 52-71', 'Frame (M/S)', '4.5', '8', '36', '1', 'None', '01:42:34pm', '2018/09/15', '', '', 'School 52-71 Frame (M/S) 8x4.5x1'),
('1339126484e', '1', 'School 52-71', 'PVC', '4.5', '8', '36', '1', 'None', '01:42:34pm', '2018/09/15', '', '', 'School 52-71 PVC 8x4.5x1'),
('18382319b9f', '1', 'Water Leflate', 'PVC', '2', '3.5', '7', '10', 'Festoon Making', '06:40:22pm', '2018/09/15', '', '', 'Water Leflate PVC 3.5x2x10'),
('1325789d48b', '1', 'afa', 'Frame (W)', '1', '1', '1', '1', '', '01:27:33pm', '2018/09/17', '', '', 'afa Frame (W) 1x1x1'),
('20559542073', '1', 'Ashis', 'PVC', '3', '5', '15', '10', 'Frame', '08:58:21pm', '2018/09/18', '', '', 'Ashis PVC 5x3x10'),
('10387607925', '1', 'Events Pabna', 'PVC', '4', '2.5', '10', '10', 'Fream', '10:41:33am', '2018/09/23', '', '', 'Events Pabna PVC 2.5x4x10'),
('10387607925', '2', 'Events Pabna', 'PVC', '3', '2.5', '7.5', '10', 'Fream', '10:41:33am', '2018/09/23', '', '', 'Events Pabna PVC 2.5x3x10'),
('10426663c59', '1', 'Bonomali', 'PVC', '6', '3', '18', '6', 'N/A', '10:44:00am', '2018/09/23', '', '', 'Bonomali PVC 3x6x6'),
('105171669eb', '1', 'Motbinimoy', 'PVC', '10', '4', '40', '1', 'N/A', '10:54:25am', '2018/09/23', '', '', 'Motbinimoy PVC 4x10x1'),
('1058153109e', '1', '', 'PVC', '8', '1.5', '12', '1', 'N/A', '11:13:01am', '2018/09/23', '', '', ' PVC 1.5x8x1'),
('11133433637', '1', 'DSA', 'PVC', '4', '16', '64', '1', 'N/A', '11:18:56am', '2018/09/23', '', '', 'DSA PVC 6x4x1'),
('1131907cffe', '1', 'sathia mohila collage', 'PVC', '20', '3', '60', '2', 'N/A', '11:36:10am', '2018/09/23', '', '', 'sathia mohila collage PVC 3x20x2'),
('1131907cffe', '2', 'sathia mohila collage', 'PVC', '10', '3', '30', '2', 'N/A', '11:36:11am', '2018/09/23', '', '', 'sathia mohila collage PVC 3x10x2'),
('1136891a4a9', '1', 'vumi Office', 'PVC', '4', '13', '52', '1', 'N/A', '11:39:20am', '2018/09/23', '', '', 'vumi Office PVC 13x4x1'),
('11418292cc0', '1', 'UHC', 'PVC', '3', '5', '15', '02', 'N/A', '11:43:18am', '2018/09/23', '', '', 'UHC PVC 5x3x02'),
('11465411690', '1', 'Nahid', 'PVC', '1.5', '1', '1.5', '02', 'N/A', '11:48:30am', '2018/09/23', '', '', 'Nahid PVC 6x8x02'),
('1442431faa', '2', 'Square school', 'PVC', '3', '7', '21', '1', 'N/A', '02:46:47pm', '2018/09/23', '', '', 'Square school PVC 7x3x1'),
('1442431faa', '1', 'Square school', 'PVC', '3', '8', '24', '01', 'N/A', '02:46:47pm', '2018/09/23', '', '', 'Square school PVC 8x3x01'),
('1442431faa', '3', 'Square school', 'PVC', '3', '8', '24', '01', 'N/A', '02:46:48pm', '2018/09/23', '', '', 'Square school PVC 8x3x01'),
('1459781c439', '1', 'Mukta medical', 'PVC', '3', '2', '6', '01', 'Fastone', '03:03:24pm', '2018/09/23', '', '', 'Mukta medical PVC 2x3x01'),
('158991f215', '1', 'Collector School And Collage', 'PVC', '52', '71', '3692', '01', 'N/A', '03:11:20pm', '2018/09/23', '', '', 'Collector School And Collage PVC 71x52x01'),
('1512279e21b', '1', 'Apurbo', 'PVC', '4', '2', '8', '01', 'N/A', '03:14:53pm', '2018/09/23', '', '', 'Apurbo PVC 2x4x01'),
('15436628a0', '1', 'Banner', 'PVC', '3.5', '6', '21', '32', 'N/A', '03:54:53pm', '2018/09/23', '', '', 'Banner PVC 6x3.5x32'),
('1627161c14e', '1', 'Sabbir', 'PVC', '3', '2', '6', '3', 'N/A', '04:31:18pm', '2018/09/23', '', '', 'Sabbir PVC 2x3x3'),
('1632868d369', '1', 'Events Pabna', 'Vinyl Sticker', '1', '4', '4', '01', 'N/A', '04:34:20pm', '2018/09/23', '', '', 'Events Pabna Vinyl Sticker 4x1x01'),
('163558c102', '1', 'PUST', 'PVC', '3', '6', '18', '01', 'N/A', '04:37:56pm', '2018/09/23', '', '', 'PUST PVC 6x3x01'),
('163558c102', '2', 'PUST', 'PVC', '2', '3', '6', '01', 'N/A', '04:37:57pm', '2018/09/23', '', '', 'PUST PVC 3x2x01'),
('16389535f42', '1', 'Yamin Vai', 'PVC', '8', '14', '112', '01', 'N/A', '04:40:34pm', '2018/09/23', '', '', 'Yamin Vai PVC 14x8x01'),
('16389535f42', '2', 'Yamin Vai', 'PVC', '7', '5', '35', '4', 'N/A', '04:40:34pm', '2018/09/23', '', '', 'Yamin Vai PVC 5x7x02'),
('1642543d7ae', '1', 'Ahmed Mehedi', 'Vinyl Sticker', '1.5', '2', '3', '02', 'N/A', '04:44:10pm', '2018/09/23', '', '', 'Ahmed Mehedi Vinyl Sticker 2x1.5x02'),
('1642543d7ae', '2', 'Ahmed Mehedi', 'Vinyl Sticker', '1', '1', '1', '02', 'N/A', '04:44:11pm', '2018/09/23', '', '', 'Ahmed Mehedi Vinyl Sticker 1x1x02'),
('14518079063', '1', 'MT motors', 'PVC', '3', '7', '21', '1', 'N/A', '02:55:32pm', '2018/09/25', '', '', 'MT motors PVC 7x3x1'),
('14518079063', '2', 'MT motors', 'Vinyl Sticker', '1', '10', '10', '1', 'N/A', '02:55:32pm', '2018/09/25', '', '', 'MT motors Vinyl Sticker 10x1x1'),
('1737646d3de', '1', 'Amar bari', 'PVC', '2.5', '4', '10', '01', 'Fastone', '05:42:57pm', '2018/09/25', '', '', 'Amar bari PVC 4x2.5x01'),
('1896295240', '1', 'BL computer', 'PVC', '1.5', '9', '13.5', '01', 'N/A', '06:10:09pm', '2018/09/25', '', '', 'BL computer PVC 9x1.5x01'),
('1896295240', '2', 'BL computer', 'PVC', '2.5', '4', '10', '01', 'N/A', '06:10:09pm', '2018/09/25', '', '', 'BL computer PVC 4x2.5x01'),
('1814219b23d', '1', 'Rasel', 'PVC', '2.5', '4', '10', '01', 'N/A', '06:19:55pm', '2018/09/25', '', '', 'Rasel PVC 4x2.5x01'),
('1820533f449', '1', 'Events Pabna', 'PVC', '3', '2.5', '7.5', '2', 'Fream', '06:45:12pm', '2018/09/25', '', '', 'Events Pabna PVC 2.5x3x02'),
('1859404e0e9', '1', 'Manik', 'PVC', '2', '2', '4', '02', 'N/A', '07:02:32pm', '2018/09/25', '', '', 'Manik PVC 2x2x02'),
('1957997cc2', '1', 'Latif Real state', 'PVC', '4', '6', '24', '01', 'N/A', '07:06:25pm', '2018/09/25', '', '', 'Latif Real state PVC 6x4x01'),
('197553190', '1', 'Bosto odhidoptor', 'PVC', '4', '8', '32', '01', 'N/A', '07:11:04pm', '2018/09/25', '', '', 'Bosto odhidoptor PVC 8x4x01'),
('12271238a4c', '1', 'Bismillah Auto', 'Vinyl Sticker', '9', '1.5', '13.5', '01', 'Fitting charge', '12:35:25pm', '2018/09/27', '', '', 'Bismillah Auto Vinyl Sticker 1.5x9x01'),
('12271238a4c', '2', 'Bismillah Auto', 'Vinyl Sticker', '4', '1.5', '6', '01', 'None', '12:35:25pm', '2018/09/27', '', '', 'Bismillah Auto Vinyl Sticker 1.5x4x01'),
('1250345c207', '1', 'Nasir uddin', 'PVC', '3', '6', '18', '01', 'N/A', '12:52:20pm', '2018/09/27', '', '', 'Nasir uddin PVC 6x3x01'),
('1310920e36a', '1', 'Manik', 'PVC', '2', '2', '4', '02', 'N/A', '01:14:40pm', '2018/09/27', '', '', 'Manik PVC 2x2x02'),
('1314606bfab', '1', 'Munna Art', 'PVC', '22', '3', '66', '1', 'N/A', '01:16:03pm', '2018/09/27', '', '', 'Munna Art PVC 3x22x1'),
('131694ef79', '1', 'Adarsha Girls', 'PVC', '8', '4', '32', '01', 'N/A', '01:18:23pm', '2018/09/27', '', '', 'Adarsha Girls PVC 4x8x01'),
('13192961d10', '1', 'Manik', 'PVC', '3', '7', '21', '2', 'N/A', '01:21:47pm', '2018/09/27', '', '', 'Manik PVC 7x3x01'),
('13192961d10', '2', 'Manik', 'PVC', '3', '6', '18', '2', 'N/A', '01:21:48pm', '2018/09/27', '', '', 'Manik PVC 6x3x01'),
('155393e813', '1', 'Setelment office', 'PVC', '3', '12', '36', '01', 'N/A', '03:55:32pm', '2018/09/27', '', '', 'Setelment office PVC 12x3x01'),
('1516344fed5', '1', 'Emon', 'Vinyl Sticker', '4', '1', '4', '01', 'N/A', '04:52:30pm', '2018/09/29', '', '', 'Emon Vinyl Sticker 1x4x01'),
('165587c08f', '1', 'Joynal Abedin', 'PVC', '7', '4', '28', '03', 'N/A', '04:58:57pm', '2018/09/29', '', '', 'Joynal Abedin PVC 4x7x03'),
('165587c08f', '2', 'Joynal Abedin', 'PVC', '4', '13', '52', '01', 'N/A', '04:58:57pm', '2018/09/29', '', '', 'Joynal Abedin PVC 13x4x01'),
('170239d1e1', '1', 'Manik', 'PVC', '1', '6', '6', '01', 'N/A', '05:03:47pm', '2018/09/29', '', '', 'Manik PVC 6x1x01'),
('1743128819', '3', 'Nazim uddin', 'PVC', '6', '8', '48', '01', 'N/A', '05:17:24pm', '2018/09/29', '', '', 'Nazim uddin PVC 8x6x01'),
('1743128819', '4', 'Nazim uddin', 'PVC', '10', '2', '20', '01', 'N/A', '05:17:24pm', '2018/09/29', '', '', 'Nazim uddin PVC 2x10x01'),
('1743128819', '2', 'Nazim uddin', 'PVC', '4', '6', '24', '01', 'N/A', '05:17:23pm', '2018/09/29', '', '', 'Nazim uddin PVC 6x4x01'),
('1743128819', '1', 'Nazim uddin', 'PVC', '3', '6', '18', '01', 'N/A', '05:17:24pm', '2018/09/29', '', '', 'Nazim uddin PVC 6x3x01'),
('1743128819', '5', 'Nazim uddin', 'PVC', '2.5', '1.5', '3.75', '02', 'N/A', '05:17:24pm', '2018/09/29', '', '', 'Nazim uddin PVC 1.5x2.5x02'),
('1743128819', '6', 'Nazim uddin', 'Vinyl Sticker', '1', '1.5', '1.5', '02', 'N/A', '05:17:24pm', '2018/09/29', '', '', 'Nazim uddin Vinyl Sticker 1.5x1x02');

-- --------------------------------------------------------

--
-- Table structure for table `printstatus`
--

CREATE TABLE `printstatus` (
  `BillNo` varchar(1000) NOT NULL,
  `ClientName` varchar(100) NOT NULL,
  `FileName` varchar(1000) NOT NULL,
  `sft` varchar(1000) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `updateBy` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `printstatus`
--

INSERT INTO `printstatus` (`BillNo`, `ClientName`, `FileName`, `sft`, `quantity`, `CreatedDate`, `CreatedTime`, `Status`, `updateBy`) VALUES
('1745264be34', 'Arnob', 'Arnob PVC 3x2x1', '6', '1', '2018/09/13', '05:45:48pm', 'Printing', 'admin'),
('1749799e4be', 'asd', 'sad PVC 3x3x3', '9', '3', '2018/09/13', '05:50:00pm', 'Complete_Printing', 'admin'),
('1842586e5fe', 'fdg', 'vgxfg PVC 5x4x5', '20', '5', '2018/09/13', '06:43:10pm', 'Printing', 'admin'),
('12176507007', 'Mamun', 'mp  PVC 3x1.5x185', '4.5', '185', '2018/09/15', '12:21:19pm', 'Printing', 'admin'),
('1314587102', 'Hemal', 'BNP PVC 6x4x10', '24', '10', '2018/09/15', '01:15:59pm', 'Design_Complete', ''),
('1339126484e', 'Master', 'School 52-71 Frame (M/S) 8x4.5x1', '36', '1', '2018/09/15', '01:42:34pm', 'Design_Complete', ''),
('1339126484e', 'Master', 'School 52-71 PVC 8x4.5x1', '36', '1', '2018/09/15', '01:42:34pm', 'Not_Selected', 'admin'),
('18382319b9f', 'Towhid', 'Water Leflate PVC 3.5x2x10', '7', '10', '2018/09/15', '06:40:22pm', 'Design_Complete', ''),
('1325789d48b', 'kbh', 'afa Frame (W) 1x1x1', '1', '1', '2018/09/17', '01:27:33pm', 'Design_Complete', ''),
('20559542073', 'Kumer', 'Ashis PVC 5x3x10', '15', '10', '2018/09/18', '08:58:21pm', 'Design_Complete', ''),
('10387607925', 'Shipon', 'Events Pabna PVC 2.5x4x10', '10', '10', '2018/09/23', '10:41:33am', 'Printing', ''),
('10387607925', 'Shipon', 'Events Pabna PVC 2.5x3x10', '7.5', '10', '2018/09/23', '10:41:33am', 'Design_Processing', ''),
('10426663c59', 'Hannan Sir', 'Bonomali PVC 3x6x6', '18', '6', '2018/09/23', '10:44:00am', 'Complete_Printing', 'Accounts'),
('105171669eb', 'AD', 'Motbinimoy PVC 4x10x1', '40', '1', '2018/09/23', '10:54:25am', 'Design_Complete', ''),
('1058153109e', 'Golam Ajom', ' PVC 1.5x8x1', '12', '1', '2018/09/23', '11:13:01am', 'Printing', ''),
('11133433637', 'DSA', 'DSA PVC 6x4x1', '24', '1', '2018/09/23', '11:18:56am', 'Printing', ''),
('1131907cffe', 'D. Shamsul Alom', 'sathia mohila collage PVC 3x20x2', '60', '2', '2018/09/23', '11:36:10am', 'Design_Complete', ''),
('1131907cffe', 'D. Shamsul Alom', 'sathia mohila collage PVC 3x10x2', '30', '2', '2018/09/23', '11:36:11am', 'Design_Complete', ''),
('1136891a4a9', 'Vumi office', 'vumi Office PVC 13x4x1', '52', '1', '2018/09/23', '11:39:20am', 'Printing', ''),
('11418292cc0', 'UHC', 'UHC PVC 5x3x02', '15', '02', '2018/09/23', '11:43:18am', 'Complete_Printing', 'admin'),
('11465411690', 'Nahid', 'Nahid PVC 6x8x02', '48', '02', '2018/09/23', '11:48:30am', 'Printing', 'admin'),
('1442431faa', 'Square school', 'Square school PVC 7x3x1', '21', '1', '2018/09/23', '02:46:47pm', 'Printing', ''),
('1442431faa', 'Square school', 'Square school PVC 8x3x01', '24', '01', '2018/09/23', '02:46:47pm', 'Printing', ''),
('1442431faa', 'Square school', 'Square school PVC 8x3x01', '24', '01', '2018/09/23', '02:46:48pm', 'Printing', ''),
('1459781c439', 'Mukta medical', 'Mukta medical PVC 2x3x01', '6', '01', '2018/09/23', '03:03:24pm', 'Design_Complete', ''),
('158991f215', 'Principal', 'Collector School And Collage PVC 71x52x01', '3692', '01', '2018/09/23', '03:11:20pm', 'Design_Complete', ''),
('1512279e21b', 'Square school', 'Apurbo PVC 2x4x01', '8', '01', '2018/09/23', '03:14:53pm', 'Design_Complete', ''),
('15436628a0', 'Shisir', 'Banner PVC 6x3.5x32', '21', '32', '2018/09/23', '03:54:53pm', 'Printing', ''),
('1627161c14e', 'Sabbir', 'Sabbir PVC 2x3x3', '6', '3', '2018/09/23', '04:31:18pm', 'Design_Complete', ''),
('1632868d369', 'Events Pabna', 'Events Pabna Vinyl Sticker 4x1x01', '4', '01', '2018/09/23', '04:34:20pm', 'Design_Complete', ''),
('163558c102', 'Shopon', 'PUST PVC 6x3x01', '18', '01', '2018/09/23', '04:37:56pm', 'Design_Complete', ''),
('163558c102', 'Shopon', 'PUST PVC 3x2x01', '6', '01', '2018/09/23', '04:37:57pm', 'Design_Complete', ''),
('16389535f42', 'Yamin vai', 'Yamin Vai PVC 14x8x01', '112', '01', '2018/09/23', '04:40:34pm', 'Printing', ''),
('16389535f42', 'Yamin vai', 'Yamin Vai PVC 5x7x02', '35', '02', '2018/09/23', '04:40:34pm', 'Printing', ''),
('1642543d7ae', 'Ahmed Mehedi', 'Ahmed Mehedi Vinyl Sticker 2x1.5x02', '3', '02', '2018/09/23', '04:44:10pm', 'Printing', ''),
('1642543d7ae', 'Ahmed Mehedi', 'Ahmed Mehedi Vinyl Sticker 1x1x02', '1', '02', '2018/09/23', '04:44:11pm', 'Printing', ''),
('14518079063', 'MT motors', 'MT motors PVC 7x3x1', '21', '1', '2018/09/25', '02:55:32pm', 'Printing', ''),
('14518079063', 'MT motors', 'MT motors Vinyl Sticker 10x1x1', '10', '1', '2018/09/25', '02:55:32pm', 'Design_Complete', ''),
('1737646d3de', 'Amar bari', 'Amar bari PVC 4x2.5x01', '10', '01', '2018/09/25', '05:42:57pm', 'Design_Complete', ''),
('1896295240', 'BL computer', 'BL computer PVC 9x1.5x01', '13.5', '01', '2018/09/25', '06:10:09pm', 'Design_Complete', ''),
('1896295240', 'BL computer', 'BL computer PVC 4x2.5x01', '10', '01', '2018/09/25', '06:10:09pm', 'Design_Complete', ''),
('1814219b23d', 'Rasel', 'Rasel PVC 4x2.5x01', '10', '01', '2018/09/25', '06:19:55pm', 'Printing', ''),
('1820533f449', 'Events Pabna', 'Events Pabna PVC 2.5x3x02', '7.5', '02', '2018/09/25', '06:45:12pm', 'Printing', ''),
('1859404e0e9', 'Manik', 'Manik PVC 2x2x02', '4', '02', '2018/09/25', '07:02:32pm', 'Design_Complete', ''),
('1957997cc2', 'Latif Real state', 'Latif Real state PVC 6x4x01', '24', '01', '2018/09/25', '07:06:25pm', 'Printing', ''),
('197553190', 'Bosto odhidoptor', 'Bosto odhidoptor PVC 8x4x01', '32', '01', '2018/09/25', '07:11:04pm', 'Printing', ''),
('12271238a4c', 'Bismillah Auto', 'Bismillah Auto Vinyl Sticker 1.5x9x01', '13.5', '01', '2018/09/27', '12:35:25pm', 'Design_Complete', ''),
('12271238a4c', 'Bismillah Auto', 'Bismillah Auto Vinyl Sticker 1.5x4x01', '6', '01', '2018/09/27', '12:35:25pm', 'Printing', ''),
('1250345c207', 'Nasir uddin', 'Nasir uddin PVC 6x3x01', '18', '01', '2018/09/27', '12:52:20pm', 'Printing', ''),
('1310920e36a', 'Manik', 'Manik PVC 2x2x02', '4', '02', '2018/09/27', '01:14:40pm', 'Printing', ''),
('1314606bfab', 'Munna Art', 'Munna Art PVC 3x22x1', '66', '1', '2018/09/27', '01:16:03pm', 'Printing', ''),
('131694ef79', 'Adarsha Girls', 'Adarsha Girls PVC 4x8x01', '32', '01', '2018/09/27', '01:18:23pm', 'Printing', ''),
('13192961d10', 'Manik', 'Manik PVC 7x3x01', '21', '01', '2018/09/27', '01:21:47pm', 'Printing', ''),
('13192961d10', 'Manik', 'Manik PVC 6x3x01', '18', '01', '2018/09/27', '01:21:48pm', 'Printing', ''),
('155393e813', 'Setelment office', 'Setelment office PVC 12x3x01', '36', '01', '2018/09/27', '03:55:32pm', 'Printing', ''),
('1516344fed5', 'Emon', 'Emon Vinyl Sticker 1x4x01', '4', '01', '2018/09/29', '04:52:30pm', 'Design_Complete', ''),
('165587c08f', 'Joynal Abedin', 'Joynal Abedin PVC 4x7x03', '28', '03', '2018/09/29', '04:58:57pm', 'Design_Complete', ''),
('165587c08f', 'Joynal Abedin', 'Joynal Abedin PVC 13x4x01', '52', '01', '2018/09/29', '04:58:57pm', 'Printing', ''),
('170239d1e1', 'Manik', 'Manik PVC 6x1x01', '6', '01', '2018/09/29', '05:03:47pm', 'Printing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin PVC 6x4x01', '24', '01', '2018/09/29', '05:17:23pm', 'Design_Processing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin PVC 8x6x01', '48', '01', '2018/09/29', '05:17:24pm', 'Design_Processing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin PVC 2x10x01', '20', '01', '2018/09/29', '05:17:24pm', 'Design_Processing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin PVC 6x3x01', '18', '01', '2018/09/29', '05:17:24pm', 'Design_Processing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin PVC 1.5x2.5x02', '3.75', '02', '2018/09/29', '05:17:24pm', 'Design_Processing', ''),
('1743128819', 'Nazim uddin', 'Nazim uddin Vinyl Sticker 1.5x1x02', '1.5', '02', '2018/09/29', '05:17:24pm', 'Design_Processing', '');

-- --------------------------------------------------------

--
-- Table structure for table `printtype`
--

CREATE TABLE `printtype` (
  `CreatedDate` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `printtype`
--

INSERT INTO `printtype` (`CreatedDate`, `type`) VALUES
('9/13/2018:311:37', 'PVC'),
('9/15/2018:648:37', 'Pena Flex'),
('9/15/2018:375:49', 'Vinyl Sticker'),
('9/15/2018:636:29', 'Frame (W)'),
('9/15/2018:285:43', 'Frame (M/S)'),
('9/29/2018:45:52', 'Offset Print');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` varchar(50) NOT NULL,
  `details` varchar(50) NOT NULL,
  `media` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `mediawhere` varchar(50) NOT NULL,
  `created_time` varchar(50) NOT NULL,
  `created_date` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
