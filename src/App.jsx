import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Edit from './Pages/Edit';
import Create from './Pages/Create';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product setId={setId}/>}/>
        <Route path='/edit/:id' element={<Edit id={id}/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      <br/>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;