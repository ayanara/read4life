import React, { useState } from "react";
import BooksList from "../components/BooksList";
import { searchBookApi } from '../API/fetchAPI'
import '../styles/pages/home.css';
import Header from "../components/Header";


const Home= () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook=(evento) => {
    if(evento.key === "Enter")
    {
      searchBookApi(search)
      .then(response => setBookData(response))
    }
  }
  return (
    <>
    <Header/>
    <div className="header-header">
      <div className="row1">
        <h1>Uma casa sem livros é um corpo sem alma.</h1>
        <p>Cícero</p>
      </div>
    </div>
    <div className="row2">
      <div className="search">
        <input 
        type="text" 
        value={search}
        placeholder="Busque seu livro aqui"
        onChange={e=>setSearch(e.target.value)}
        onKeyPress={searchBook}
        />
        <button><i className="bi bi-search"></i></button>
      </div>
      <div>
        {/* <img src="./imagem/livro.jpg" alt="livro" width="300px"></img> */}
      </div>
    </div>
    <div className="container">
     
     {
      <BooksList book={bookData}/>
     }
      
    </div>
    
    </>
  )
}

export default Home;