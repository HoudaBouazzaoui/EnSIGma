-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Dec 18, 2020 at 02:00 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ensigma`
--

-- --------------------------------------------------------

--
-- Table structure for table `joueurs`
--

CREATE TABLE `joueurs` (
  `id` int(10) UNSIGNED NOT NULL,
  `pseudo` text,
  `score` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `joueurs`
--

INSERT INTO `joueurs` (`id`, `pseudo`, `score`) VALUES
(9, ' houdaB ', '00:09:44'),
(10, ' bouazzaoui ', '00:06:06'),
(11, ' soukayna ', '00:08:09'),
(12, ' Lauri ', '00:14:04');

-- --------------------------------------------------------

--
-- Table structure for table `objects`
--

CREATE TABLE `objects` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `minzoom` int(11) NOT NULL,
  `icone` text NOT NULL,
  `hint1` text NOT NULL,
  `hint2` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `objects`
--

INSERT INTO `objects` (`id`, `name`, `type`, `latitude`, `longitude`, `minzoom`, `icone`, `hint1`, `hint2`) VALUES
(1, 'mdp', 'recuperable', 10.46, -66.86, 9, 'mdp.png', 'Récupérons le Mot de passe !', NULL),
(2, 'tel', 'bloqué par code', 9.07, -69.01, 8, 'tel.png', 'Récupérons le Téléphone !', 'Le téléphone est verrouillé . Cherchons son mot de passe'),
(3, 'qrcode', 'recuperable', 8.21, -69.32, 9, 'qrcode.png', 'Récupérons le code QR on va s\'en servir !', NULL),
(4, 'position', 'bloqué par code', 9.39, -65.64, 8, 'position.png', 'Tu étais au rendez-vous ! Récupérons cette position pour trouver les autres objets !', 'Pour accéder a cet endroit il faut utiliser le code QR. Trouvons-le!'),
(5, 'contact', 'recuperable', 9.46, -62.64, 9, 'contact.png', 'Récupérons le contact de voiture !', NULL),
(6, 'voiture', 'bloqué par objet', 10.15, -68, 8, 'voiture.png', 'Bravo ! tu as pu nous joindre tu es en sécurité maintenant !Mais c\'est pas fini! On par tous ensemble dans une aventure au USA. Attention on va traverser la Mer des Caraibes.Vous devez chercher un bateau.\r\n', 'Oups, Il te faut la contact de la voiture. Cherchons le!'),
(7, 'bateau', 'recuperable', 10.94, -71.22, 8, 'bateau.png', 'Récupérons le bateau ! Vous allez prendre le bateau et aller au Etats Unis.Le Big Boss vous envoie en mission pour récupérer un coffre secret. Donc faites vite car il y a une grande récompense pour vous!', NULL),
(9, 'ticket', 'recuperable', 32.37, -83.45, 9, 'ticket.png', 'Récupérons le ticket !', NULL),
(10, 'train', 'bloqué par objet', 34.5, -84.58, 7, 'train.png', 'Et prenons le train pour arriver au poste office', 'Oups.il vous faut un ticket. Cherchons le !'),
(11, 'post office', 'bloqué par objet', 38.65, -103.6, 7, 'post office.png', 'Vous êtes à la post office ! retrouvez les objets qui sons là', 'Oups, Il  faut prendre le tramway pour arriver à la poste office!'),
(12, 'mall', 'bloqué par objet', 36.17, -115.07, 7, 'mall.png', 'Vous êtes au Mall ! retrouvez les objets qui sont au dépôt du mall', NULL),
(13, 'archive', 'recuperable', 35.46, -108.77, 8, 'archive.png', 'Récupérons cet archive !', NULL),
(14, 'sheet', 'bloqué par objet', 36.64, -107.88, 7, 'sheet.png', '!!! 1ère partie du code !!!\r\n52\r\n!!!!!!Souviens toi de la valeur.\r\nAllons y cherchons la deuxième partie du code au mall\r\n \r\n', 'Oups! Il faut trouver l\'archive en premier.'),
(15, 'depot', 'recuperable', 35.35, -118.2, 8, 'depot.png', 'tu est au dépôt !', NULL),
(16, 'cutter', 'recuperable', 38.42, -122.51, 8, 'cutter.png', 'Récupérons le cutteur ! ', NULL),
(17, 'box', 'bloqué par objet', 40.12, -112.97, 9, 'box.png', 'Ouvrons le box! ', 'Oups, Il te faut le cutteur pour pouvoir ouvrir le box. Cherchons-le !'),
(18, 'code', 'bloqué par objet', 38.83, -106.2, 7, 'code.png', '!!! 2ème partie du code !!!\r\n86\r\n!!!!!!Souviens toi de la valeur\r\n', 'Oups, Il faut trouver le box en premier!'),
(19, 'coffre', 'bloqué par code', 41.8, -87.66, 8, 'coffre.png', 'Entrer le code !!', 'Code erroné. Réessayer !');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `objects`
--
ALTER TABLE `objects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
