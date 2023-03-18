import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home'

import './styles/app.css';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/book/:id" element={ <BookDetails /> } />
    </Routes>
  );
}

export default App;
