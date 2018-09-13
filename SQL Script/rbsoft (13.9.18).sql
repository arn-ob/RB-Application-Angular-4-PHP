-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2018 at 12:21 PM
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
('1151198fa01', '1', '5', '25', 'PVC', '15', '', '1875', '1000', '875', '11:54:40am', '2018/09/09', '2018/09/09', '12:11:29pm'),
('123245168b1', '2', '4', '4', 'Pana', '15', '', '1500', '0', '1000', '12:33:48pm', '2018/09/09', '2018/09/13', '12:26:10pm'),
('123245168b1', '1', '4', '25', 'PVC', '12', '', '1500', '0', '1000', '12:33:48pm', '2018/09/09', '2018/09/13', '12:26:10pm'),
('1657295e9f9', '1', '2', '4', 'PVC', '15', '0', '570', '0', '570', '04:58:45pm', '2018/09/09', '2018/09/09', '05:05:06pm'),
('1657295e9f9', '2', '2', '15', 'PVC', '15', '0', '570', '0', '570', '04:58:45pm', '2018/09/09', '2018/09/09', '05:05:06pm'),
('17732b40c', '1', '2', '46', 'PVC', '15', '0', '1380', '0', '1380', '05:08:04pm', '2018/09/09', '2018/09/09', '05:11:42pm'),
('1718447c384', '1', '2', '4', 'Pana', '15', '0', '120', '0', '120', '05:18:29pm', '2018/09/09', '2018/09/09', '05:18:52pm'),
('1721451cdc1', '1', '2', '4', 'PVC', '15', '0', '120', '0', '120', '05:21:50pm', '2018/09/09', '2018/09/09', '05:22:23pm'),
('17223297196', '1', '3', 'undefined', 'PVC', '15', '20', '830', '400', '430', '05:23:12pm', '2018/09/09', '2018/09/09', '05:23:20pm'),
('17251409608', '1', '2', '4', 'Pana', '15', '0', '120', '120', '0', '05:25:21pm', '2018/09/09', '2018/09/09', '05:25:27pm'),
('1726352215c', '1', '22', '4', 'Pana', '15', '0', '1320', '0', '1320', '05:26:27pm', '2018/09/09', '2018/09/09', '05:26:31pm'),
('123123685de', '1', '3', '4', 'PVC', '15', '0', '180', '80', '100', '12:31:45pm', '2018/09/13', '2018/09/13', '12:34:55pm'),
('13106672864', '1', '22', '4', 'PVC', '15', '20', '1340', '0', '1340', '01:11:21pm', '2018/09/13', '2018/09/13', '04:15:12pm'),
('161787198d', '1', '3', '4', 'PVC', '15', '0', '', '', '', '04:02:18pm', '2018/09/13', '', '');

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
('Hemal Rana', '1', 'Bangladesh Eidgah', '01712646680', '00', '1151198fa01', 'Hemal rana', '11:54:40am', '2018/09/09'),
('FHVHV', '2', 'GHVHBVHNQ', '022', '00', '123245168b1', '33', '12:33:48pm', '2018/09/09'),
('hgbn', '1', 'ghvhn', '022', '00', '123245168b1', 'HJ', '12:33:48pm', '2018/09/09'),
('Aa', '1', 'asdasd', '023', '00', '1657295e9f9', 'None', '04:58:45pm', '2018/09/09'),
('Aa', '2', 'asdasd', '023', '00', '1657295e9f9', 'None', '04:58:45pm', '2018/09/09'),
('ad', '1', 'adas', '023', '00', '17732b40c', 'None', '05:08:04pm', '2018/09/09'),
('asd', '1', 'asd', '023', '00', '1718447c384', 'None', '05:18:29pm', '2018/09/09'),
('asd', '1', 'asd', '02', '00', '1721451cdc1', '', '05:21:50pm', '2018/09/09'),
('sdfd', '1', 'sfdsdf', '03', '00', '17223297196', '', '05:23:12pm', '2018/09/09'),
('asd', '1', 'asd', '02', '00', '17251409608', 'asdcd', '05:25:21pm', '2018/09/09'),
('asd', '1', 'asd', '02', '00', '1726352215c', 'None', '05:26:27pm', '2018/09/09'),
('cc', '1', '13dscsdc', '32432423', '0', '123123685de', 'None', '12:31:45pm', '2018/09/13'),
('dasdsa', '1', 'adasd', '23', '0', '13106672864', 'None', '01:11:21pm', '2018/09/13'),
('asd', '1', 'asd', '23', '0', '161787198d', 'None', '04:02:18pm', '2018/09/13');

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
('cHJpbnQ=', 'cHJpbnQ=', 'cHJpbnQ=', 'Account');

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
('1151198fa01', '1', 'BNP', 'PVC', '5', '5', '25', '5', 'No', '11:54:40am', '2018/09/09', '', '', 'BNP PVC 3.5x5x5'),
('123245168b1', '2', 'GFGFG', 'Pana', '2', '2', '4', '5', 'Yes', '12:33:48pm', '2018/09/09', '', '', 'GFGFG Pana 3x2x4'),
('123245168b1', '1', 'gyhgv', 'PVC', '5', '5', '25', '4', 'No', '12:33:48pm', '2018/09/09', '', '', 'gyhgv PVC 45x5x4'),
('1657295e9f9', '1', 'Arnob', 'PVC', '2', '2', '4', '2', 'None', '04:58:45pm', '2018/09/09', '', '', 'Arnob PVC 2x2x2'),
('1657295e9f9', '2', 'Arnob', 'PVC', '3', '5', '15', '2', 'None', '04:58:45pm', '2018/09/09', '', '', 'Arnob PVC 5x3x2'),
('17732b40c', '1', 'adasd', 'PVC', '23', '2', '46', '2', 'None', '05:08:04pm', '2018/09/09', '', '', 'adasd PVC 2x23x2'),
('1718447c384', '1', 'sad', 'Pana', '2', '2', '4', '2', 'None', '05:18:29pm', '2018/09/09', '', '', 'sad Pana 2x2x2'),
('1721451cdc1', '1', '1aasdsad', 'PVC', '2', '2', '4', '2', 'None', '05:21:50pm', '2018/09/09', '', '', '1aasdsad PVC 2x2x2'),
('17223297196', '1', 'sedsd', 'PVC', '6', '3', '18', '4', 'None', '05:23:12pm', '2018/09/09', '', '', 'sedsd PVC 3x3x3'),
('17251409608', '1', 'asd', 'Pana', '2', '2', '4', '2', 'None', '05:25:21pm', '2018/09/09', '', '', 'asd Pana 2x2x2'),
('1726352215c', '1', 'asd', 'Pana', '2', '2', '4', '22', 'None', '05:26:27pm', '2018/09/09', '', '', 'asd Pana 2x2x22'),
('123123685de', '1', 'Arnob', 'PVC', '2', '2', '4', '3', '2', '12:31:45pm', '2018/09/13', '', '', 'Arnob PVC 2x2x3'),
('13106672864', '1', 'Arasdas', 'PVC', '2', '2', '4', '23', 'ads', '01:11:21pm', '2018/09/13', '', '', 'Arasdas PVC 2x2x23'),
('161787198d', '1', 'vadsa', 'PVC', '2', '2', '4', '3', 'None', '04:02:18pm', '2018/09/13', '', '', 'vadsa PVC 2x2x3');

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
('13106672864', 'dasdsa', 'Arasdas PVC 2x2x23', '4', '23', '2018/09/13', '01:11:21pm', 'Error_in_Printing', 'admin'),
('161787198d', 'asd', 'vadsa PVC 2x2x3', '4', '3', '2018/09/13', '04:02:18pm', 'Design_Complete', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
