-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2016 at 07:49 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `factest`
--

DROP DATABASE IF EXISTS `factest`;

CREATE DATABASE IF NOT EXISTS `factest` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `factest`;

-- --------------------------------------------------------

--
-- Table structure for table `building`
--

CREATE TABLE `building` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `building`
--

INSERT INTO `building` (`ID`, `name`, `address`) VALUES
(1, 'Hauptgebaeude A', 'Ernst-Boehe-Strasse, Ludwigsha'),
(2, 'Hauptgebaeude B', 'Ernst-Boehe-Strasse, Ludwigsha'),
(3, 'Maxstrasse', 'Max-Strasse, Ludwigshafen'),
(4, 'Transatlantik', 'Trans-Strasse, Ludwigshafen'),
(5, 'Turmstrasse', 'Turmstrasse 8');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `text` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `text`) VALUES
(1, 'Schmutz'),
(2, 'Technisch'),
(3, 'Defekt'),
(4, 'Vandalismus'),
(5, 'Sonstiges');

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
(43, 'Test Titel', 2, 2, NULL, 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.', NULL, NULL, 'userPhoto-43.jpg', '2016-10-24 17:28:12'),
(44, 'Test Titel', 2, 2, NULL, 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.', NULL, NULL, NULL, '2016-10-24 17:29:06'),
(45, 'Müll in Hörsaal 4', 1, 3, NULL, 'Toilette ist verstopft, bla bla blablablabla', NULL, NULL, NULL, '2016-10-29 07:02:07'),
(46, 'Felix Test', 1, 2, 2, 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.', NULL, '', NULL, '2016-11-03 11:39:48');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `ID` int(11) NOT NULL,
  `name` char(20) NOT NULL,
  `floor` int(11) NOT NULL,
  `building` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`ID`, `name`, `floor`, `building`) VALUES
(1, 'Hörsaal 6', 1, 5),
(2, 'Hörsaal 4', 1, 5),
(3, 'Bibliothek', 0, 1),
(4, 'Hörsaal 1', 2, 2),
(5, 'Hörsaal 2', 3, 3),
(6, 'Hörsaal 3', 1, 4);

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

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `name` char(40) NOT NULL,
  `password` char(32) NOT NULL,
  `role` enum('student','advisor','admin','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`name`, `password`, `role`) VALUES
('Admin', '25f9e794323b453885f5181f1b624d0b', 'admin'),
('Student', '6ebe76c9fb411be97b3b0d48b791a7c9', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `building`
--
ALTER TABLE `building`
  ADD PRIMARY KEY (`ID`);

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
  ADD PRIMARY KEY (`ID`),
  ADD KEY `building` (`building`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `building`
--
ALTER TABLE `building`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `Foreign Key` FOREIGN KEY (`building`) REFERENCES `building` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
