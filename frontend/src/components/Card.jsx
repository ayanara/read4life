import React from "react";
import '../styles/components/card.css';

const Card = ({ book }) => {
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          return (
            <>
            <div className="card">
              <img src={thumbnail} alt="livro" width="100px"></img>
              <div className="bottom">
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

export default Card;