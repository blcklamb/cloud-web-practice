-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema shopping_mall_1006
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shopping_mall_1006
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shopping_mall_1006` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`category` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`category` (
  `id` INT NOT NULL,
  `upper` VARCHAR(20) NOT NULL,
  `lower` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`seller`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`seller` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`seller` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `manager_name` VARCHAR(45) NOT NULL,
  `boss_name` VARCHAR(45) NOT NULL,
  `phone_number` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`product` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `left` INT NOT NULL,
  `discount` INT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `category_id` INT NOT NULL,
  `seller_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_product_category_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_product_seller1_idx` (`seller_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `shopping_mall_1006`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_seller1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `shopping_mall_1006`.`seller` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`shipper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`shipper` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`shipper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `delivery_duration` INT NOT NULL,
  `delivery_region` VARCHAR(45) NOT NULL,
  `manager_name` VARCHAR(20) NOT NULL,
  `manager_phone_number` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `manager_phone_number_UNIQUE` (`manager_phone_number` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`customer` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `nickname` VARCHAR(45) NULL,
  `phone_number` VARCHAR(11) NOT NULL,
  `level` VARCHAR(10) NOT NULL DEFAULT 'BASIC',
  `birth` VARCHAR(8) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`review` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`review` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(300) NULL,
  `rating` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` INT NOT NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`id`, `product_id`),
  INDEX `fk_review_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_review_customer1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_mall_1006`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_review_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `shopping_mall_1006`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`purchase`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`purchase` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`purchase` (
  `customer_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `review_id` INT NOT NULL,
  `id` INT NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `shipper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_customer_has_product_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_customer_has_product_customer1_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_customer_has_product_review1_idx` (`review_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_purchase_shipper1_idx` (`shipper_id` ASC) VISIBLE,
  CONSTRAINT `fk_customer_has_product_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `shopping_mall_1006`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customer_has_product_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_mall_1006`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customer_has_product_review1`
    FOREIGN KEY (`review_id`)
    REFERENCES `shopping_mall_1006`.`review` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchase_shipper1`
    FOREIGN KEY (`shipper_id`)
    REFERENCES `shopping_mall_1006`.`shipper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`delivery`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`delivery` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`delivery` (
  `status` VARCHAR(10) NOT NULL DEFAULT '상품 준비 중',
  `start_date` DATETIME NULL,
  `ETA` VARCHAR(45) NULL,
  `purchase_shipping_dept_id` INT NOT NULL,
  `purchase_id` INT NOT NULL,
  PRIMARY KEY (`purchase_shipping_dept_id`),
  INDEX `fk_delivery_purchase1_idx` (`purchase_id` ASC) VISIBLE,
  CONSTRAINT `fk_delivery_purchase1`
    FOREIGN KEY (`purchase_id`)
    REFERENCES `shopping_mall_1006`.`purchase` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shopping_mall_1006`.`address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_mall_1006`.`address` ;

CREATE TABLE IF NOT EXISTS `shopping_mall_1006`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL DEFAULT '기본 배송지',
  `address` VARCHAR(45) NOT NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_address_customer1_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_customer1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `shopping_mall_1006`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
