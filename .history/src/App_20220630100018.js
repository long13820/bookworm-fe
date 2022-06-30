import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Header from './pages/Header/Header';

function App() {
  return (
    <>
      <div className='d-flex flex-column m-height-100'>
        <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/shop/1' element={<Product/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

        
      </div>
    </>
  );
}

export default App;
