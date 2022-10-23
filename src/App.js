import './App.css';
import React,{useState} from 'react';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Cart from './Pages/Cart/Cart';

function App() {
  let[cart, setcart]=useState([]);
  let len = cart.length;
  return (
    <div className="App">
        <BrowserRouter>
          <Nav length={len}/>
          <Routes>
             <Route path='/'  element={<Home set={setcart} crt={cart}/>}/>
             <Route path='/Cart' element={<Cart cart={cart} set={setcart}/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
