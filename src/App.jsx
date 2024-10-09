import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/shop" element={<Shop />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
};

export default App;