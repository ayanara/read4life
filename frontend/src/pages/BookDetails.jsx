import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBookApi } from '../API/fetchAPI';
import Header from "../components/Header";
import '../styles/pages/bookDetails.css'


const BookDetails = () => {

  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBookApi(id)
      .then(response => setBook(response))
  },)

  let thumbnail = book?.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.medium;
  if (!book.volumeInfo) return null
  return (
    <div><Header/>
    <button className="bi bi-backspace-fill" ></button>
    <div
    className="book-details">
      <div className="book-img">
        <img
          src={thumbnail}
          alt={book.volumeInfo.title}
          width="500px"
        >
        </img></div>

      <div className="book-description">
        <h1 className="title">{book.volumeInfo.title}</h1>
        <h2 className="authors"><spam>Escrito por: </spam> {book.volumeInfo.authors}</h2>
        <h2 className="publisher">{book.volumeInfo.publisher}</h2>
        <h3 className="description" dangerouslySetInnerHTML={{__html:book.volumeInfo.description}}></h3>
        <h2 className="publishedDate"><spam>Ano da Publicado: </spam> {book.volumeInfo.publishedDate}</h2>
        <h2 className="pageCount"><spam>Número de páginas: </spam>{book.volumeInfo.pageCount}</h2>

        <div className="book-button">
          <button>Lido</button>
          <button>Quero ler</button>
          <button>Lendo</button>

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default BookDetails;