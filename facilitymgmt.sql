-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2016 at 10:27 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `category`
--
CREATE DATABASE facilitymgmt; USE facilitymgmt;

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `type` char(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `type`) VALUES
(1, 'waste'),
(2, 'technical'),
(3, 'defective'),
(4, 'vandalism');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `ID` int(11) NOT NULL,
  `title` char(30) NOT NULL,
  `room` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `description` text NOT NULL,
  `usercreate` char(20) NOT NULL,
  `userfacman` char(20) DEFAULT NULL,
  `data` blob,
  `moment` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`ID`, `title`, `room`, `category`, `status`, `description`, `usercreate`, `userfacman`, `data`, `moment`) VALUES
(1, 'Beamer kaputt in Hörsaal 6', 1, 2, 1, 'Mit Beamer im hörsaal 6 kann keine verbindung aufgenommen werden  ', 'Felix Gillissen', NULL, NULL, '2016-10-19 18:38:58'),
(2, 'Mülleimer übefüllt', 2, 1, 2, 'Mülleimer im Hörsaal 4 läuft über, der raum ist verdreckt ', 'Felix Gillissen', 'Thomas Hammer', NULL, '2016-10-19 18:38:58'),
(3, 'Penis bild auf Tafel', 1, 4, 2, 'Bild eines Penis wurde auf die Tafel des Hörsaal 6 gemalt. ', 'Felix Gillissen', '', NULL, '2016-10-19 18:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `ID` int(11) NOT NULL,
  `name` text NOT NULL,
  `floor` int(11) NOT NULL,
  `building` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`ID`, `name`, `floor`, `building`, `address`) VALUES
(1, 'Hörsaal 6', 1, 'Transatlantik Institut', 'Turmstrasse 8, 67059 Ludwigshafen-Rhein'),
(2, 'Hörsaal 4', 1, 'Transatlantik-Institut', 'Turmstrasse 8, 67059 Ludwigshafen-Rhein');

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
