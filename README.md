# Descarga:
Para descargar el proyecto basta con clonar el repositorio con el siguiente comando
### `git clone https://github.com/hn-code/coder-reactjs`

# Instalación
Una vez ya clonado y dentro de la carpeta principal estando en el mismo directorio que  el archivo package.json ejecutar el siguiente comando
### `npm install`

Una vez instalados los módulos de node para que la aplicación corra correctamente se inicia la app
### `npm start`

# Librerias usadas
Las librerías usadas en este caso son:
### `react-router-dom` - Para las rutas dentro de la app
### `sweetalert` - Para los mensajes de agregados al carrito

# Dentro de la app
Ya dentro de la app tendria que iniciarse en https://localhost:3000/ lo cual nos muestra el Navbar en la parte superior con los diferentes tipos de categorías a elegir.

En esta dirección que podriamos denominar el "home" se muestra un componente denominado "ItemListContainer" con todos los productos representados con su componente "Item", donde cada uno cuenta con su botón de descripción para acceder a ver más detalles del producto.

Una vez clickeada alguna categoria, el componente anteriormente nombrado (ItemListContainer) se actualiza y toma los datos de la dirección URL la cual establece que productos van a ser vistos, por ejemplo:
La dirección "/category/desktops" mostrará todos los equipos de escritorio y la dirección "/category/graphic_cards" las tarjetas gráficas

Al clickear sobre el boton de "Descripción del producto" se renderizara un componente denominado "ItemDetailContainer" que contendrá el componente "ItemDetail" con detalles del producto al igual que con un contador para agregar la cantidad que queramos del producto siempre y cuando no supere el stock.

Una vez agregado la cantidad deseada al carrito se removerá el contador para cambiarlo por un link directo al carrito donde cargamos nuestros productos, al igual que se habilita el carrito en la esquina superior derecha para acceder desde ahi tambien; el componente del carrito se encuentra en la URL "/cart".

En dicho componente del carrito tenemos varios componentes para apreciar, en primer lugar contamos con una lista de productos en forma de cards que nos permiten quitarlos del carrito, dichas cards contienen informacion de la cantidad del producto, el costo unitario y el costo total por producto (costo por cantidad seleccionada), al igual que un cartel con el total de todos los productos.

Contamos con 3 botones, uno de "Confirmar Compra" el cual nos lleva a otro componente para verificar nuestros datos y guardarlos en una orden generada con nuestros datos y nuestros productos confirmados a comprar; otro boton para eliminar todos los productos del carrito, y otro para actualizar el carrito en caso de que algun producto no tenga stock y haya quedado cargado en el carrito.

En el siguiente componente, el cual se accede clickeando en "Confirmar Compra" y se encuentra en la URL "/checkoput" se nos solicitan nuestros datos para poder generar la orden de compra, una vez se confirmen los datos se chequean que todos los stock esten en orden, si sale todo correcto se genera una orden de compra el cual modifica el stock de la base de datos, nos vacia el carrito y nos lleva a la pagina principal mostrandonos la orden de compra en pantalla. En caso de haber algun problema con los stock se nos redireccionará al carrito para poder actualizar los stock.