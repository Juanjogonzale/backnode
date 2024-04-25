-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2024 a las 08:21:56
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectopow`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproductos` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(15,0) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `imagen` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproductos`, `nombre`, `descripcion`, `precio`, `stock`, `imagen`) VALUES
(1, 'Memoria RAM DDR4 16GB', 'Memoria RAM DDR4 de 16GB para mejorar el rendimiento de tu computadora.', 51, 4, ''),
(2, 'SSD 500GB SATA', 'Unidad de estado sólido (SSD) de 500GB con interfaz SATA para almacenamiento rápido y confiable.', 80, 6, ''),
(3, 'Disco Duro Externo 1TB USB 3.0', 'Disco duro externo de 1TB con conexión USB 3.0 para almacenamiento adicional y portabilidad.', 65, 4, ''),
(4, 'Mouse Inalámbrico', 'Mouse inalámbrico ergonómico para un control preciso y sin cables.', 20, 6, ''),
(5, 'Monitor Curvo 27 Pulgadas', 'Monitor curvo de 27 pulgadas con resolución Full HD para una experiencia de visualización inmersiva.', 250, 1, ''),
(6, 'Portátil 15.6 Pulgadas', 'Portátil ligero y potente con pantalla de 15.6 pulgadas, procesador Intel Core i5 y 8GB de RAM.', 700, 0, ''),
(7, 'PC Gamer Ryzen 7', 'PC gamer de alto rendimiento con procesador AMD Ryzen 7, tarjeta gráfica NVIDIA GeForce RTX 3060 y 16GB de RAM.', 1300, 0, ''),
(8, 'Auriculares Inalámbricos Bluetooth', 'Auriculares inalámbricos con tecnología Bluetooth para disfrutar de tu música favorita sin cables.', 40, 4, ''),
(9, 'Impresora Multifuncional WiFi', 'Impresora multifuncional con conexión WiFi para imprimir, escanear y copiar desde cualquier dispositivo.', 90, 8, ''),
(10, 'Cámara de Seguridad IP', 'Cámara de seguridad IP con resolución Full HD y visión nocturna para monitorear tu hogar o negocio.', 50, 9, ''),
(11, 'Memoria RAM DDR4 16GB', 'Memoria RAM DDR4 de 16GB para mejorar el rendimiento de tu computadora.', 51, 8, ''),
(12, 'SSD 500GB SATA', 'Unidad de estado sólido (SSD) de 500GB con interfaz SATA para almacenamiento rápido y confiable.', 80, 7, ''),
(13, 'Disco Duro Externo 1TB USB 3.0', 'Disco duro externo de 1TB con conexión USB 3.0 para almacenamiento adicional y portabilidad.', 65, 6, ''),
(14, 'Mouse Inalámbrico', 'Mouse inalámbrico ergonómico para un control preciso y sin cables.', 20, 7, ''),
(15, 'Monitor Curvo 27 Pulgadas', 'Monitor curvo de 27 pulgadas con resolución Full HD para una experiencia de visualización inmersiva.', 250, 6, ''),
(16, 'Portátil 15.6 Pulgadas', 'Portátil ligero y potente con pantalla de 15.6 pulgadas, procesador Intel Core i5 y 8GB de RAM.', 700, 8, ''),
(17, 'PC Gamer Ryzen 7', 'PC gamer de alto rendimiento con procesador AMD Ryzen 7, tarjeta gráfica NVIDIA GeForce RTX 3060 y 16GB de RAM.', 1300, 8, ''),
(18, 'Auriculares Inalámbricos Bluetooth', 'Auriculares inalámbricos con tecnología Bluetooth para disfrutar de tu música favorita sin cables.', 40, 7, ''),
(19, 'Impresora Multifuncional WiFi', 'Impresora multifuncional con conexión WiFi para imprimir, escanear y copiar desde cualquier dispositivo.', 90, 4, ''),
(20, 'Cámara de Seguridad IP', 'Cámara de seguridad IP con resolución Full HD y visión nocturna para monitorear tu hogar o negocio.', 50, 4, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproductos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproductos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
