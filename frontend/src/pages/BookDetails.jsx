import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getBookApi } from '../API/fetchAPI';


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
    <div className="book">
      <div className="book-img">
        <img
          src={thumbnail}
          alt={book.volumeInfo.title}
          width="500px"
        >
        </img></div>
      <div className="bottom">
        <h3 className="title">{book.volumeInfo.title}</h3>
        <p className="authors">{book.volumeInfo.authors}</p>
      </div>
    </div>
  )
}

export default BookDetails;