import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './pages/Header/Header';

function App() {
  return (
    <>
      <div className='d-flex flex-column m-height-100'>
        <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path=''
        </Routes>
      </div>
    </>
  );
}

export default App;
