create SCHEMA IF NOT EXISTS `database` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `database`;

CREATE TABLE `traffic` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hostname` VARCHAR(40) NOT NULL,
  `created_at` DATETIME NOT NULL,
PRIMARY KEY (`id`));
