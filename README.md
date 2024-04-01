# Ecommerce React App

Este es un proyecto de aplicación web de ecommerce desarrollado en React, utilizando Firebase como backend para el almacenamiento de datos y la autenticación de usuarios.

## Descripción

La aplicación consta de las siguientes características principales:

- **NavBar:** Barra de navegación que permite al usuario acceder a diferentes secciones de la aplicación, como la lista de productos, el carrito de compras y el formulario de checkout.

- **CartWidget:** Widget que muestra la cantidad de productos en el carrito y permite al usuario acceder al carrito de compras.

- **ItemListContainer:** Componente que muestra una lista de productos. Puede filtrar los productos por categoría.

- **ItemList:** Componente que muestra una lista de productos individuales.

- **ItemDetailContainer:** Componente que muestra los detalles de un producto seleccionado.

- **ItemDetail:** Componente que muestra los detalles específicos de un producto, como su nombre, imagen, categoría, precio y disponibilidad en stock. También permite al usuario agregar el producto al carrito de compras.

- **ItemCount:** Componente que permite al usuario seleccionar la cantidad de un producto que desea agregar al carrito.

- **Checkout:** Componente que muestra un resumen de la compra y un formulario de envío. Una vez completado, procesa la compra y actualiza el stock de los productos en Firebase.

- **Brief:** Componente que muestra un resumen de la compra una vez realizada.

## Instalación

1. Clona este repositorio en tu máquina local.

2. Instala las dependencias utilizando npm:

```bash
npm install
