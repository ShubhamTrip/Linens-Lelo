import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
             <Route path='/'  element={<Home/>}/>
             <Route path='/Products'  element={<Products/>}/>
             <Route path='/About'  element={<About/>}/>
             <Route path='/Contact'  element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
