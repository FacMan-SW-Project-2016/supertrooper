

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
DROP DATABASE IF EXISTS facilitymgmt;

CREATE DATABASE IF NOT EXISTS `facilitymgmt` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `facilitymgmt`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `ID` int(11) NOT NULL,
  `type` char(15) NOT NULL,
  `text` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
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

DROP TABLE IF EXISTS `report`;
CREATE TABLE IF NOT EXISTS `report` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` char(30) DEFAULT NULL,
  `room` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `description` char(250) DEFAULT NULL,
  `usercreate` char(20) DEFAULT NULL,
  `userfacman` char(20) DEFAULT NULL,
  `data` blob,
  `moment` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `raum` (`room`),
  KEY `kategorie_ID` (`category`),
  KEY `status_id` (`status`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`ID`, `title`, `room`, `category`, `status`, `description`, `usercreate`, `userfacman`, `data`, `moment`) VALUES
(1, 'Beamer kaputt in Hörsaal 6', 1, 2, 1, 'Mit Beamer im hörsaal 6 kann keine verbindung aufgenommen werden', 'Felix Gillissen', NULL, NULL, '2016-10-19 18:38:58'),
(2, 'Mülleimer übefüllt', 2, 1, 2, 'Mülleimer im Hörsaal 4 läuft über, der raum ist verdreckt', 'Felix Gillissen', 'Thomas Hammer', NULL, '2016-10-19 18:38:58'),
(3, 'Penis bild auf Tafel', 1, 4, 2, 'Bild eines Penis wurde auf die Tafel des Hörsaal 6 gemalt.', 'Felix Gillissen', '', NULL, '2016-10-19 18:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `ID` int(11) NOT NULL,
  `name` char(20) NOT NULL,
  `floor` int(11) NOT NULL,
  `building` char(20) NOT NULL,
  `address` char(30) NOT NULL,
  PRIMARY KEY (`ID`)
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

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `ID` int(11) NOT NULL,
  `type` char(15) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`ID`, `type`) VALUES
(1, 'active'),
(2, 'processing'),
(3, 'done');

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