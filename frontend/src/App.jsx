import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/home/Home'

import BookDetails from './pages/details/BookDetails';
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/book/:id" element={ <BookDetails /> } />
    </Routes>
  );
}

export default App;
