-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2016 at 11:08 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `facilitymgmt`
--
DROP DATABASE IF EXISTS facilitymgmt;

CREATE DATABASE IF NOT EXISTS `facilitymgmt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `facilitymgmt`;
-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `type` char(15) NOT NULL,
  `text` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `type`, `text`) VALUES
(1, 'waste', 'Schmutz'),
(2, 'technical', 'Technisch'),
(3, 'defective', 'Defekt'),
(4, 'vandalism', 'Vandalismus'),
(5, 'other', 'Sonstiges');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `ID` int(11) NOT NULL,
  `title` char(30) DEFAULT NULL,
  `room` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `description` char(250) DEFAULT NULL,
  `usercreate` char(20) DEFAULT NULL,
  `userfacman` char(20) DEFAULT NULL,
  `data` varchar(30) DEFAULT NULL,
  `moment` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`ID`, `title`, `room`, `category`, `status`, `description`, `usercreate`, `userfacman`, `data`, `moment`) VALUES
(1, 'Beamer kaputt in Hörsaal 6', 1, 2, 1, 'Mit Beamer im hörsaal 6 kann keine verbindung aufgenommen werden', 'Felix Gillissen', NULL, NULL, '2016-10-19 18:38:58'),
(2, 'Mülleimer übefüllt', 2, 1, 2, 'Mülleimer im Hörsaal 4 läuft über, der raum ist verdreckt', 'Felix Gillissen', 'Thomas Hammer', NULL, '2016-10-19 18:38:58'),
(3, 'Penis bild auf Tafel', 1, 4, 2, 'Bild eines Penis wurde auf die Tafel des Hörsaal 6 gemalt.', 'Felix Gillissen', '', NULL, '2016-10-19 18:38:58'),
(9, 'Test Titel', NULL, 1, NULL, 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.', NULL, NULL, NULL, '2016-10-22 15:55:02'),
(10, 'hallo', 1, 2, 3, 'Test Beschreibung', 'Creator66', 'FacMaster', NULL, '2016-10-24 08:19:35'),
(11, 'hallo', 1, 2, 3, 'Test Beschreibung', 'Creator66', 'FacMaster', NULL, '2016-10-24 08:20:39'),
(12, 'hallo', 1, 2, 3, 'Test Beschreibung', 'Creator66', 'FacMaster', NULL, '2016-10-24 08:20:49'),
(13, 'hallo', 1, 2, 3, 'Test Beschreibung', 'Creator66', 'FacMaster', 'userPhoto-13.jpg', '2016-10-24 08:49:29'),
(14, 'hallo', 1, 2, 3, 'Test Beschreibung', 'Creator66', 'FacMaster', NULL, '2016-10-24 08:24:29');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `ID` int(11) NOT NULL,
  `name` char(20) NOT NULL,
  `floor` int(11) NOT NULL,
  `building` char(20) NOT NULL,
  `address` char(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`ID`, `name`, `floor`, `building`, `address`) VALUES
(1, 'Hörsaal 6', 1, 'Transatlantik Instit', 'Turmstrasse 8, 67059 Ludwigsha'),
(2, 'Hörsaal 4', 1, 'Transatlantik-Instit', 'Turmstrasse 8, 67059 Ludwigsha');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `ID` int(11) NOT NULL,
  `type` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`ID`, `type`) VALUES
(1, 'active'),
(2, 'processing'),
(3, 'done');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `raum` (`room`),
  ADD KEY `kategorie_ID` (`category`),
  ADD KEY `status_id` (`status`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `kategorie_ID` FOREIGN KEY (`category`) REFERENCES `category` (`ID`),
  ADD CONSTRAINT `raum` FOREIGN KEY (`room`) REFERENCES `room` (`ID`),
  ADD CONSTRAINT `status_id` FOREIGN KEY (`status`) REFERENCES `status` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
