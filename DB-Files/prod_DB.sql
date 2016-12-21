-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2016 at 10:18 AM
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
CREATE DATABASE IF NOT EXISTS `facilitymgmt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `facilitymgmt`;

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

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`ID`, `title`, `room`, `category`, `status`, `description`, `usercreate`, `userfacman`, `data`, `moment`) VALUES
(1, 'Beamer kaputt in Hörsaal 6', 1, 2, 1, 'Mit Beamer im hörsaal 6 kann keine verbindung aufgenommen werden', 'Felix Gillissen', NULL, NULL, '2016-10-19 18:38:58'),
(2, 'Mülleimer übefüllt', 2, 1, 2, 'Mülleimer im Hörsaal 4 läuft über, der raum ist verdreckt', 'Felix Gillissen', 'Admin', NULL, '2016-11-09 16:48:52'),
(82, 'Fenster kaputt', 5, 3, 1, 'Fenster in Raum 0002 wurde beschädigt. Es waren vermutlich studenten', 'Admin', '', NULL, '2016-12-19 20:01:33'),
(83, 'Beamer funktioniert nicht mehr', 11, 3, 1, 'Beamer im Raum 306 ist nicht mehr funktionsfähig', 'Admin', 'Sachbearbeiter', NULL, '2016-12-19 20:02:16'),
(84, 'Fenster kaputt', 3, 3, 1, 'Das Fenster in der Bibliothek in Gebäude A ist kaputt und sollte repariert werden.', 'Admin', '', NULL, '2016-12-20 10:25:45'),
(85, 'Titel', 12, 1, NULL, ' moin moin moinm monm mon', 'Student', NULL, NULL, '2016-12-20 10:41:46'),
(86, 'LAUCH GESICHTET', 5, 4, 3, 'keine ahnung was der da zu suchen hat, macht ihn weg!!!!', 'Student', 'Manfred', 'userPhoto-86.jpg', '2016-12-20 10:42:55'),
(87, 'Da liegt ein Lauch rum', 5, 4, 2, 'Ich glaube in die Uni hat sich ein Lauch verirrt', 'Student', 'Laura', 'userPhoto-87.jpg', '2016-12-20 11:54:55'),
(88, 'Fenster kaputt', 3, 3, NULL, 'Das Fenster in der Bibliothek in Gebäude A ist kaputt und sollte repariert werden.', 'Admin', NULL, NULL, '2016-12-20 11:59:25');

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
(4, 'Raum001', 0, 2),
(5, 'Raum002', 0, 2),
(6, 'R108', 1, 2),
(7, 'Max001', 0, 3),
(8, 'Max102', 1, 3),
(9, 'Max201', 2, 3),
(10, 'Trans160', 1, 4),
(11, 'Trans306', 3, 4),
(12, 'Mensa', 0, 1),
(13, 'Testraum', 1, 3),
(14, 'Testraum', 1, 3),
(15, 'Testraum', 1, 3);

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
('Laura', '47a81c33610cf7b9850404d63aec1721', 'advisor'),
('Manfred', '4cdec908de5ca1dcf6c910b685bc6469', 'advisor'),
('Sachbearbeiter', '05a671c66aefea124cc08b76ea6d30bb', 'advisor'),
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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
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
