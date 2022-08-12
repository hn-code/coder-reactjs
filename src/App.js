import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext';
import { CartContainer } from './Components/CartContainer/CartContainer';


function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings="Todos los productos"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greetings="Filtro por Categoria"/>}/>
            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer></CartContainer>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
