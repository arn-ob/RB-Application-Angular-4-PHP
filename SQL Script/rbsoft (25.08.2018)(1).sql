-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2018 at 01:14 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rbsoft`
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

INSERT INTO `account` (`BillNo`, `AIid`, `quantity`, `totalSFT`, `type`, `PricePerSft`, `amount`, `advance`, `Due`, `CreatedTime`, `CreatedDate`, `LastModifiedDate`, `LastModifiedTime`) VALUES
('67ff6a7086d261dc943a2e7338ca6ab8', '2', '2', 'undefined', '', '15', '1470', '123', '1347', '09:46:23am', '2018/08/19', '2018/08/19', '04:25:38pm'),
('67ff6a7086d261dc943a2e7338ca6ab8', '1', '3', '4', '', '15', '1470', '123', '1347', '09:46:23am', '2018/08/19', '2018/08/19', '04:25:38pm'),
('1cb0bf133d9dfa367508dca27a5f8036', '2', '4', '12', '', '15', '990', '123', '867', '02:26:48pm', '2018/08/19', '2018/08/19', '04:11:50pm'),
('1cb0bf133d9dfa367508dca27a5f8036', '1', '3', '6', '', '15', '990', '123', '867', '02:26:48pm', '2018/08/19', '2018/08/19', '04:11:50pm'),
('948d9f505bde3f9fd14f4730928c22bd', '4', '', '9', '', '', '', '', '', '10:00:42pm', '2018/08/20', '', ''),
('948d9f505bde3f9fd14f4730928c22bd', '5', '', '9', '', '', '', '', '', '10:00:57pm', '2018/08/20', '', ''),
('948d9f505bde3f9fd14f4730928c22bd', '6', '', '9', '', '', '', '', '', '10:01:43pm', '2018/08/20', '', ''),
('948d9f505bde3f9fd14f4730928c22bd', '8', '', '9', '', '', '', '', '', '10:02:20pm', '2018/08/20', '', ''),
('6b05c03be267db43a5f671e4f319ebe9', '1', '2', '4', '', '', '', '', '', '10:02:53pm', '2018/08/20', '', ''),
('13a3a9ca54ca0b97628465ebb5d650ec', '1', '2', '4', '', '', '', '', '', '10:03:29pm', '2018/08/20', '', ''),
('13a3a9ca54ca0b97628465ebb5d650ec', '2', '2', '4', '', '', '', '', '', '10:03:44pm', '2018/08/20', '', ''),
('13a3a9ca54ca0b97628465ebb5d650ec', '3', '2', '4', '', '', '', '', '', '10:04:13pm', '2018/08/20', '', ''),
('13a3a9ca54ca0b97628465ebb5d650ec', '4', '2', '4', '', '', '', '', '', '10:04:56pm', '2018/08/20', '', ''),
('00019cf13a5968dde57dfbcdb45871c8', '1', '2', '44', '', '', '', '', '', '10:05:35pm', '2018/08/20', '', ''),
('83b39321764da50675e16cc4b3743efa', '1', '2', '4', '', '', '', '', '', '10:06:13pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '1', '', '0', '', '', '', '', '', '10:08:29pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '2', '3', '9', '', '', '', '', '', '10:08:56pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '3', '3', '9', '', '', '', '', '', '10:09:16pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '4', '3', '9', '', '', '', '', '', '10:09:34pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '6', '3', '9', '', '', '', '', '', '10:09:40pm', '2018/08/20', '', ''),
('f157827d8423eabdfac9b88988a887b6', '5', '3', '9', '', '', '', '', '', '10:09:40pm', '2018/08/20', '', ''),
('06ef61fb6f341c597977fd910caa5906', '1', '2', '4', '', '', '', '', '', '10:20:43am', '2018/08/02', '', ''),
('281f0f6779076e865a8466b7dacf5bc7', '2', '2', '4', '', '', '', '', '', '12:43:50am', '2018/08/23', '', ''),
('299378a4b1a5a47d4b70c14f3fd8f523', '2', '1', '20', '', '15', '300', '200', '100', '12:57:28pm', '2018/08/23', '2018/08/23', '12:58:00pm'),
('3107f633fef52b81627a14c58b6640a3', '1', '2', '4', '', '', '', '', '', '01:07:28pm', '2018/08/23', '', ''),
('0c9d9c710eb5009f1ba190f5948b00c8', '1', '1', '8', 'PVC', '15', '120', '1', '119', '11:05:47am', '2018/08/25', '2018/08/25', '12:23:07pm'),
('adbedd25f6f2cef0501fb5e090e075d9', '1', '19', '50', 'Pana', '15', '14250', '123', '14127', '12:17:19pm', '2018/08/25', '2018/08/25', '12:18:00pm'),
('a40ce87efad5bc409cc832b711922d8a', '1', '4', '4', 'PVC', '15', '240', '100', '140', '12:24:19pm', '2018/08/25', '2018/08/25', '12:24:44pm'),
('6ce6f40258b6ca847ec6c2b6e40b2661', '1', '', '0', '', '', '', '', '', '04:21:26pm', '2018/08/25', '', ''),
('eb3e972d2d102bcdd2f946d1667c982e', '1', '', '0', '', '', '', '', '', '04:22:13pm', '2018/08/25', '', ''),
('0754b3d5562de4c22871e94f7626c568', '1', '', '0', '', '', '', '', '', '04:22:58pm', '2018/08/25', '', ''),
('1257805889eafe4d43fc4b131eba6679', '2', '3', '46', 'PVC', '15', '17250', '232', '17018', '05:03:32pm', '2018/08/25', '2018/08/25', '05:04:28pm'),
('1257805889eafe4d43fc4b131eba6679', '1', '2', '506', 'Pana', '15', '17250', '232', '17018', '05:03:32pm', '2018/08/25', '2018/08/25', '05:04:28pm');

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
('rr', '2', 'tt', '213', '123', '67ff6a7086d261dc943a2e7338ca6ab8', 'asdcd2', '09:46:23am', '2018/08/19'),
('rr', '1', 'tt', '213', '123', '67ff6a7086d261dc943a2e7338ca6ab8', 'asdcd', '09:46:23am', '2018/08/19'),
('adsaddasdsad', '1', 'asdasdsad', '22', '22', '1cb0bf133d9dfa367508dca27a5f8036', 'dasd', '02:26:48pm', '2018/08/19'),
('adsaddasdsad', '2', 'asdasdsad', '22', '22', '1cb0bf133d9dfa367508dca27a5f8036', 'dasd', '02:26:48pm', '2018/08/19'),
('sdfdsf', '4', 'sfsdf', '342', '234', '948d9f505bde3f9fd14f4730928c22bd', '234', '10:00:42pm', '2018/08/20'),
('sdfdsf', '5', 'sfsdf', '342', '234', '948d9f505bde3f9fd14f4730928c22bd', '234', '10:00:57pm', '2018/08/20'),
('sdfdsf', '6', 'sfsdf', '342', '234', '948d9f505bde3f9fd14f4730928c22bd', '234', '10:01:43pm', '2018/08/20'),
('sdfdsf', '8', 'sfsdf', '342', '234', '948d9f505bde3f9fd14f4730928c22bd', '234', '10:02:20pm', '2018/08/20'),
('2', '1', '2', '2', '2', '6b05c03be267db43a5f671e4f319ebe9', '2', '10:02:53pm', '2018/08/20'),
('2', '1', '2', '2', '2', '13a3a9ca54ca0b97628465ebb5d650ec', '2', '10:03:29pm', '2018/08/20'),
('2', '2', '2', '2', '2', '13a3a9ca54ca0b97628465ebb5d650ec', '2', '10:03:44pm', '2018/08/20'),
('2', '3', '2', '2', '2', '13a3a9ca54ca0b97628465ebb5d650ec', '2', '10:04:13pm', '2018/08/20'),
('2', '4', '2', '2', '2', '13a3a9ca54ca0b97628465ebb5d650ec', '2', '10:04:56pm', '2018/08/20'),
('2', '1', '2', '2', '2', '00019cf13a5968dde57dfbcdb45871c8', '2', '10:05:35pm', '2018/08/20'),
('22', '1', '2', '2', '2', '83b39321764da50675e16cc4b3743efa', '2', '10:06:13pm', '2018/08/20'),
('', '1', '', '', '', 'f157827d8423eabdfac9b88988a887b6', '', '10:08:29pm', '2018/08/20'),
('sfds', '2', 'sdf', '3', '3', 'f157827d8423eabdfac9b88988a887b6', '3', '10:08:56pm', '2018/08/20'),
('sfds', '3', 'sdf', '3', '3', 'f157827d8423eabdfac9b88988a887b6', '3', '10:09:16pm', '2018/08/20'),
('sfds', '4', 'sdf', '3', '3', 'f157827d8423eabdfac9b88988a887b6', '3', '10:09:34pm', '2018/08/20'),
('sfds', '6', 'sdf', '3', '3', 'f157827d8423eabdfac9b88988a887b6', '3', '10:09:40pm', '2018/08/20'),
('sfds', '5', 'sdf', '3', '3', 'f157827d8423eabdfac9b88988a887b6', '3', '10:09:40pm', '2018/08/20'),
('2', '1', '2', '2', '2', '06ef61fb6f341c597977fd910caa5906', '2', '10:20:43am', '2018/08/02'),
('2', '2', '2', '2', '2', '281f0f6779076e865a8466b7dacf5bc7', '2', '12:43:50am', '2018/08/23'),
('Arnob', '2', 'Aaaa', '19', '17', '299378a4b1a5a47d4b70c14f3fd8f523', 'asdasdasd', '12:57:28pm', '2018/08/23'),
('sa', '1', 'asx', '0177', '0177', '3107f633fef52b81627a14c58b6640a3', 'dasd', '01:07:28pm', '2018/08/23'),
('name', '1', 'add', '0213', '0312', '0c9d9c710eb5009f1ba190f5948b00c8', 'adsadasdsad', '11:05:47am', '2018/08/25'),
('afafd', '1', 'ad', '01092108210', '01091029', 'adbedd25f6f2cef0501fb5e090e075d9', 'jik', '12:17:19pm', '2018/08/25'),
('slkg', '1', 'srfkls', '0234', '03', 'a40ce87efad5bc409cc832b711922d8a', 'efs', '12:24:19pm', '2018/08/25'),
('', '1', '', '0undefined', '0undefined', '6ce6f40258b6ca847ec6c2b6e40b2661', '', '04:21:26pm', '2018/08/25'),
('', '1', '', '0undefined', '0undefined', 'eb3e972d2d102bcdd2f946d1667c982e', '', '04:22:13pm', '2018/08/25'),
('', '1', '', '0undefined', '0undefined', '0754b3d5562de4c22871e94f7626c568', '', '04:22:58pm', '2018/08/25'),
('asdad', '2', 'sad', '0213', '0123', '1257805889eafe4d43fc4b131eba6679', '123', '05:03:32pm', '2018/08/25'),
('asdasd', '1', 'asd', '0123', '0123', '1257805889eafe4d43fc4b131eba6679', 'adsadasdsad', '05:03:32pm', '2018/08/25');

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
  `Frame` varchar(50) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL,
  `LastModifiedDate` varchar(50) NOT NULL,
  `LastModifiedTime` varchar(50) NOT NULL,
  `FileName` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `printdetails`
--

INSERT INTO `printdetails` (`BillNo`, `AIid`, `printName`, `PrintType`, `wide`, `height`, `sft`, `quantity`, `Frame`, `CreatedTime`, `CreatedDate`, `LastModifiedDate`, `LastModifiedTime`, `FileName`) VALUES
('67ff6a7086d261dc943a2e7338ca6ab8', '2', '', 'PVC', '8', '5', '40', '2', 'No', '09:46:23am', '2018/08/19', '', '', '33123'),
('67ff6a7086d261dc943a2e7338ca6ab8', '1', '', 'Pana', '3', '2', '4', '3', 'No', '09:46:23am', '2018/08/19', '', '', '33'),
('1cb0bf133d9dfa367508dca27a5f8036', '2', '', 'PVC', '3', '4', '12', '4', 'Yes', '02:26:48pm', '2018/08/19', '', '', 'adasdsa'),
('1cb0bf133d9dfa367508dca27a5f8036', '1', '', 'PVC', '2', '3', '6', '3', 'Yes', '02:26:48pm', '2018/08/19', '', '', 'adasdsa'),
('948d9f505bde3f9fd14f4730928c22bd', '4', '', 'PVC', '3', '3', '9', '', 'No', '10:00:42pm', '2018/08/20', '', '', '3'),
('948d9f505bde3f9fd14f4730928c22bd', '5', '', 'PVC', '3', '3', '9', '', 'No', '10:00:57pm', '2018/08/20', '', '', '3'),
('948d9f505bde3f9fd14f4730928c22bd', '6', '', 'PVC', '3', '3', '9', '', 'No', '10:01:43pm', '2018/08/20', '', '', '3'),
('948d9f505bde3f9fd14f4730928c22bd', '8', '', 'PVC', '3', '3', '9', '', 'No', '10:02:20pm', '2018/08/20', '', '', '3'),
('6b05c03be267db43a5f671e4f319ebe9', '1', '', 'PVC', '2', '2', '4', '2', 'Yes', '10:02:53pm', '2018/08/20', '', '', '2'),
('13a3a9ca54ca0b97628465ebb5d650ec', '1', '', 'Pana', '2', '2', '4', '2', 'Yes', '10:03:29pm', '2018/08/20', '', '', '2'),
('13a3a9ca54ca0b97628465ebb5d650ec', '2', '', 'Pana', '2', '2', '4', '2', 'Yes', '10:03:44pm', '2018/08/20', '', '', '2'),
('13a3a9ca54ca0b97628465ebb5d650ec', '3', '', 'Pana', '2', '2', '4', '2', 'Yes', '10:04:13pm', '2018/08/20', '', '', '2'),
('13a3a9ca54ca0b97628465ebb5d650ec', '4', '', 'Pana', '2', '2', '4', '2', 'Yes', '10:04:56pm', '2018/08/20', '', '', '2'),
('00019cf13a5968dde57dfbcdb45871c8', '1', '', 'PVC', '2', '22', '44', '2', 'Yes', '10:05:35pm', '2018/08/20', '', '', '2'),
('83b39321764da50675e16cc4b3743efa', '1', '', 'PVC', '2', '2', '4', '2', 'Yes', '10:06:13pm', '2018/08/20', '', '', '2'),
('f157827d8423eabdfac9b88988a887b6', '1', '', '', '', '', '0', '', '', '10:08:29pm', '2018/08/20', '', '', ''),
('f157827d8423eabdfac9b88988a887b6', '2', '', 'Pana', '3', '3', '9', '3', 'Yes', '10:08:56pm', '2018/08/20', '', '', '3'),
('f157827d8423eabdfac9b88988a887b6', '3', '', 'Pana', '3', '3', '9', '3', 'Yes', '10:09:16pm', '2018/08/20', '', '', '3'),
('f157827d8423eabdfac9b88988a887b6', '4', '', 'Pana', '3', '3', '9', '3', 'Yes', '10:09:34pm', '2018/08/20', '', '', '3'),
('f157827d8423eabdfac9b88988a887b6', '6', '', 'Pana', '3', '3', '9', '3', 'Yes', '10:09:40pm', '2018/08/20', '', '', '3'),
('f157827d8423eabdfac9b88988a887b6', '5', '', 'Pana', '3', '3', '9', '3', 'Yes', '10:09:40pm', '2018/08/20', '', '', '3'),
('06ef61fb6f341c597977fd910caa5906', '1', '', 'PVC', '2', '2', '4', '2', 'Yes', '10:20:43am', '2018/08/02', '', '', '2'),
('281f0f6779076e865a8466b7dacf5bc7', '2', '', 'Pana', '2', '2', '4', '2', 'Yes', '12:43:50am', '2018/08/23', '', '', '2'),
('299378a4b1a5a47d4b70c14f3fd8f523', '2', '', 'Pana', '5', '4', '20', '1', 'No', '12:57:28pm', '2018/08/23', '', '', 'asdasdasdasd'),
('3107f633fef52b81627a14c58b6640a3', '1', '', 'PVC', '2', '2', '4', '2', 'Yes', '01:07:28pm', '2018/08/23', '', '', 'azdas'),
('0c9d9c710eb5009f1ba190f5948b00c8', '1', '', 'PVC', '2', '4', '8', '1', 'No', '11:05:47am', '2018/08/25', '', '', 'asdsad'),
('adbedd25f6f2cef0501fb5e090e075d9', '1', '', 'Pana', '5', '10', '50', '19', 'Yes', '12:17:19pm', '2018/08/25', '', '', 'zzzaai'),
('a40ce87efad5bc409cc832b711922d8a', '1', '', 'PVC', '2', '2', '4', '4', 'No', '12:24:19pm', '2018/08/25', '', '', 'sfdc'),
('6ce6f40258b6ca847ec6c2b6e40b2661', '1', '', '', '', '', '0', '', '', '04:21:26pm', '2018/08/25', '', '', ''),
('eb3e972d2d102bcdd2f946d1667c982e', '1', '', '', '', '', '0', '', '', '04:22:13pm', '2018/08/25', '', '', ''),
('0754b3d5562de4c22871e94f7626c568', '1', '', '', '', '', '0', '', '', '04:22:58pm', '2018/08/25', '', '', ''),
('1257805889eafe4d43fc4b131eba6679', '2', 'adsd', 'PVC', '23', '2', '46', '3', 'No', '05:03:32pm', '2018/08/25', '', '', 'ads'),
('1257805889eafe4d43fc4b131eba6679', '1', 'asdasd', 'Pana', '22', '23', '506', '2', 'No', '05:03:32pm', '2018/08/25', '', '', 'qdsa');

-- --------------------------------------------------------

--
-- Table structure for table `printstatus`
--

CREATE TABLE `printstatus` (
  `BilNo` varchar(1000) NOT NULL,
  `AIid` int(11) NOT NULL,
  `ClientName` varchar(100) NOT NULL,
  `FileName` varchar(1000) NOT NULL,
  `sft` varchar(1000) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `CreatedDate` varchar(50) NOT NULL,
  `CreatedTime` varchar(50) NOT NULL,
  `Status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `printstatus`
--
ALTER TABLE `printstatus`
  ADD PRIMARY KEY (`AIid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `printstatus`
--
ALTER TABLE `printstatus`
  MODIFY `AIid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
