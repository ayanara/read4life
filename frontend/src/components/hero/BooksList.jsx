import React from "react";
import { useNavigate } from 'react-router-dom';

const BooksList = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-4">
        {
          book.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            return (
              <div className="flex flex-col w-full h-full border border-gray-300 place-items-center">
                <img
                  className="p-8"
                  src={thumbnail}
                  alt={item.volumeInfo.title}
                  width="250px"
                  onClick={() => navigate(`/book/${item.id}`)}
                >
                </img>

                <div className="flex flex-col justify-between ">
                  <h2 className="text-lg font-semibold ">Escrito por: <spam className="text-lg font-light">{item.volumeInfo.authors}</spam></h2>
                  <h2 className="publisher">{item.volumeInfo.publisher}</h2>
                  <p className="text-sm">{item.volumeInfo.authors}</p>
                  <h2 className="publishedDate"><spam>Ano da Publicado: </spam> {item.volumeInfo?.publishedDate}</h2>
                  <h2 className="pageCount"><spam>Número de páginas: </spam>{item.volumeInfo.pageCount}</h2>
                  <p className="text-lg font-light">R${item.saleInfo.listPrice?.amount}</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default BooksList;