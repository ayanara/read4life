import React from "react";
import BooksList from "../../components/hero/BooksList";
import Header from "../../components/header/Header";
import { useSnapshot } from "valtio";
import { store } from '../../store'


const Home= () => {
  const snapLivros = useSnapshot(store).livros;

  return (
    <section>
      <Header/>
      <BooksList book={snapLivros}/>
    </section>
  )
}

export default Home;