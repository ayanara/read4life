import React, { useState } from "react";
import BooksList from "../../components/hero/BooksList";
import { searchBookApi } from '../../API/fetchAPI'
import Header from "../../components/header/Header";
import { useSnapshot } from "valtio";
import { store } from '../../store'


const Home= () => {
  const snapLivros = useSnapshot(store).livros;

  return (
    <>
      <Header/>
      
      <BooksList book={snapLivros}/>
    </>
  )
}

export default Home;