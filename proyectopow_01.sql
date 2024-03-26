-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema proyectopow
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyectopow
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyectopow` DEFAULT CHARACTER SET utf8 ;
USE `proyectopow` ;

-- -----------------------------------------------------
-- Table `proyectopow`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`usuarios` (
  `idusuarios` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NULL,
  `apellidos` VARCHAR(150) NULL,
  `cedula` INT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `direccion` VARCHAR(255) NULL,
  `ciudad` VARCHAR(100) NULL,
  `rol` VARCHAR(70) NULL,
  `estado` VARCHAR(70) NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyectopow`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`pedidos` (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` TIMESTAMP NULL,
  `estado` VARCHAR(50) NULL,
  `usuarios_idusuarios` INT NOT NULL,
  PRIMARY KEY (`idpedidos`),
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_idusuarios` ASC),
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_idusuarios`)
    REFERENCES `proyectopow`.`usuarios` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyectopow`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`facturas` (
  `idfacturas` INT NOT NULL AUTO_INCREMENT,
  `numero_factura` VARCHAR(100) NULL,
  `fecha_emision` DATE NULL,
  `monto_total` DECIMAL(15) NULL,
  `descuento` DECIMAL(15) NULL,
  `impuesto` DECIMAL(15) NULL,
  `metodo_pago` VARCHAR(55) NULL,
  `estado` VARCHAR(55) NULL,
  `idpedidos` INT NOT NULL,
  PRIMARY KEY (`idfacturas`),
  INDEX `fk_facturas_pedidos1_idx` (`idpedidos` ASC),
  CONSTRAINT `fk_facturas_pedidos1`
    FOREIGN KEY (`idpedidos`)
    REFERENCES `proyectopow`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyectopow`.`transacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`transacciones` (
  `idtransacciones` INT NOT NULL AUTO_INCREMENT,
  `monto_total` DECIMAL(15) NULL,
  `metodo_pago` VARCHAR(55) NULL,
  `estado` VARCHAR(50) NULL,
  `fecha` TIMESTAMP NULL,
  `idpedidos` INT NOT NULL,
  PRIMARY KEY (`idtransacciones`),
  INDEX `fk_transacciones_pedidos1_idx` (`idpedidos` ASC),
  CONSTRAINT `fk_transacciones_pedidos1`
    FOREIGN KEY (`idpedidos`)
    REFERENCES `proyectopow`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyectopow`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL,
  `descripcion` VARCHAR(255) NULL,
  `precio` DECIMAL(15) NULL,
  `stock` INT NULL,
  `imagen` BLOB NULL,
  PRIMARY KEY (`idproductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyectopow`.`detalles_pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyectopow`.`detalles_pedidos` (
  `iddetalles_pedidos` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL,
  `precio_unitario` DECIMAL(15) NULL,
  `idproductos` INT NOT NULL,
  `idpedidos` INT NOT NULL,
  PRIMARY KEY (`iddetalles_pedidos`),
  INDEX `fk_detalles_pedidos_productos_idx` (`idproductos` ASC),
  INDEX `fk_detalles_pedidos_pedidos1_idx` (`idpedidos` ASC),
  CONSTRAINT `fk_detalles_pedidos_productos`
    FOREIGN KEY (`idproductos`)
    REFERENCES `proyectopow`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalles_pedidos_pedidos1`
    FOREIGN KEY (`idpedidos`)
    REFERENCES `proyectopow`.`pedidos` (`idpedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
