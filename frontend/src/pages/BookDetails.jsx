import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBookApi } from '../API/fetchAPI';
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
    <div className="book-details">
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
        <h2 className="description">{book.volumeInfo.description}</h2>
        <h2 className="publishedDate"><spam>Ano da Publicado: </spam> {book.volumeInfo.publishedDate}</h2>
        <h2 className="pageCount"><spam>Número de páginas: </spam>{book.volumeInfo.pageCount}</h2>
        
      </div>
    </div>
  )
}

export default BookDetails;