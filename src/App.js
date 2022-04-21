import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './components/About.js';
import Places from './components/Places.js';
import Menu from './components/Menu.js';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/*">
        <Route path="about" element={<About />} />
        <Route path="places" element={<Places />} />
        <Route path="menu" element={<Menu />} />
      </Route>
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
  );
}

export default App;
