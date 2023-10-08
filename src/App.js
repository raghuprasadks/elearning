import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { v4 as uuid } from "uuid";

import Menu from './pages/menu';
import Home from './pages/home';
import Contactus from './pages/contact';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<Nopage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <Menu></Menu> */}
    </div>
  );
}

export default App;
