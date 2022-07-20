import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import * as swal from 'sweetalert';

function App() {

  const handleAdd = (quantity) => {
      swal({
        icon: "success",
        title: `Cantidad de elementos agregados: ${quantity}`,
        confirmButtonColor: "#0d6efd"
      });
  }

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a la tienda!"/>
      <ItemCount stock={8} onAdd={handleAdd}/>
    </div>
  );
}

export default App;
