decargar del repo con el comando clon de git
luego de descargado npm install
npm start

librerias usadas react-hooks - react-route
rutas dentro de la app
cad componente lo que tendria que tener 


##Descarga:
Para descargar el proyecto basta con clonar el repositorio con el siguiente comando
###git clone https://github.com/hn-code/coder-reactjs

##Instalación
Una vez ya clonado y dentro de la carpeta principal estando en el mismo directorio que  el archivo package.json ejecutar el siguiente comando
###npm install

Una vez instalados los módulos de node para que la aplicación corra correctamente se inicia la app
###npm start

##Dentro de la app
Ya dentro de la app tendria que iniciarse en https://localhost:3000/ lo cual nos muestra el Navbar en la parte superior con los diferentes tipos de categorías a elegir.

En esta dirección que podriamos denominar el "home" se muestra un componente denominado "ItemListContainer" con todos los productos representados con su componente "Item", donde cada uno cuenta con su botón de descripción para acceder a ver más detalles del producto.

Una vez clickeada alguna categoria, el componente anteriormente nombrado (ItemListContainer) se actualiza y toma los datos de la dirección URL la cual establece que productos van a ser vistos, por ejemplo:
La dirección "/category/desktops" mostrará todos los equipos de escritorio y la dirección "/category/graphic_cards" las tarjetas gráficas

Al clickear sobre el boton de "Detalles del producto" se renderizara un componente denominado "ItemDetailContainer" que contendrá el componente "ItemDetail" con detalles del producto al igual que con un contador para agregar la cantidad que queramos del producto siempre y cuando no supere el stock.