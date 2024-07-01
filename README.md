# Gamma Technical test
Este es mi solución al reto **"Shopping Cart"**

La prueba consiste en el desarollo de una aplicación de carrito de compras simple con los siguientes requisitos:

- Ver una lista de productos
- Agregar productos al carrito
- Ver el carrito de compras
- Eliminar productos del carrito
- Aplicar cupones

## Tecnología utilizadas

- Vue.js (framework)
- Vue Router (para el enrutamiento)
- Pinia (para manejar el estado)
- Tailwind CSS (para los estilos)

## Pasos para ejecutar ambiente de desarrollo local

Clona el repositorio y sigue estas instrucciones. Debes tener instalado `Node.js` y `npm`.
- Ejecute en su CLI el comando para instalar las dependencias
```
npm instal
```
- Ejecute en su CLI el comando para iniciar la aplicación de Vue.js
```
npm run dev
```

## Nota importante

En el directorio `public` del proyecto, cree un directorio `data` con un archivo `data.json` para simular una petición HTTP a una API Rest y listar el catálogo de productos.

### Aplicar cupones

Utilice el cupon para obtener un 50% de descuento del total de la compra.
```
PROMOTION_2024
```
