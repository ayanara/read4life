import axios from 'axios';

export const searchBookApi = async (book) => {
  const results = await  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCglcdpeAT6w2m1upeKtjGkHLlsuSYQG3M&maxResults=40`);
  return results.data.items;
};

export const getBookApi = async (bookId) => {
  const results = await  axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?q=&key=AIzaSyCglcdpeAT6w2m1upeKtjGkHLlsuSYQG3M`);
  return results.data;
};

