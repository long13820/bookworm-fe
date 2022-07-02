import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Title from './components/Title/Title';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';

const pathname = window.location.pathname;
const objectPath = {
  '/': 'Homepage',
  '/shop': 'Books',
  '/about': 'About us',
  '/cart': 'Cart'
};


function App() {
  return (
    <React.Fragment>
      <div className='d-flex flex-column m-height-100'>
        <Header/>
        
        <Title title="About"/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/shop/1' element={<Product/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

        <Footer/>

      </div>
    </React.Fragment>
  );
}

export default App;
