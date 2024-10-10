import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/shop" element={<Shop />} />
      <Route path ="/cart" element={<Cart />} />
      <Route path ="/checkout" element={<Checkout />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
};

export default App;