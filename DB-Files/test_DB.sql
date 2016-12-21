-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2016 at 10:19 AM
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
CREATE DATABASE IF NOT EXISTS `factest` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `factest`;

-- --------------------------------------------------------

--
-- Table structure for table `building`
--

CREATE TABLE `building` (
  `ID` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(60) NOT NULL
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
  `moment` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
('TestHorst', 'Test123Test', 'admin');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
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
