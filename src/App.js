import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a la tienda!"/>
    </div>
  );
}

export default App;
