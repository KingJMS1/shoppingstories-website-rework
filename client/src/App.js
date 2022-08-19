import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavSidebar from './components/NavSidebar.js'
import { AuthProvider } from './components/Auth';
import Navbar from './components/Navbar.js'
import Status from './components/Status';
import React, { useState } from 'react';
import Search from './pages/SearchPage.js';
import Home from './pages/index.js';
import './App.css';

function App() {

  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => { setIsOpen(!isOpen) }

  return (
    <AuthProvider> 
      <Router>
        <NavSidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
