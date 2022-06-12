import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Promo from './pages/Promo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/category' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
