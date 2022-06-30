import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
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
          <Route path='/cart' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
