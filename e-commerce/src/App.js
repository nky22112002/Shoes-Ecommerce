import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import React, { useState } from "react";
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { GlobalProvider } from './components/GlobalContext';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const [user, setUser] = useState(null);

  return(
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/productdetail' element={<ProductDetailPage/>}/>
      </Routes>
    </GlobalProvider>
  )
}

export default App;
