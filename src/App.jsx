import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContext';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={' MUEBLES Y OBJETOS DECORATIVOS'} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={' MUEBLES Y OBJETOS DECORATIVOS'} />} />
            <Route path="/detail/:productsId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;

