import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/components/bookList.css';

const BooksList = ({ book }) => {
  const navigate = useNavigate();
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
            <div className="cardBook">
              <img 
                src={thumbnail} 
                alt={item.volumeInfo.title} 
                width="100px"
                onClick={()=> navigate (`/book/${item.id}`)}
              >
              </img>

              <div className="descriptions">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="authors">{item.volumeInfo.authors}</p>
              </div>
            </div>
            </>
          )
        })
      }

    </>
  )
}

export default BooksList;