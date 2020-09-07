import axios from 'axios';

export const fetchBooks = async function (page:number) {
  const response = await axios.get(`/search/react/${page}`);
  return response;
};

export const fetchBookDetails = async function (isbn: string) {
  const response = await axios.get(`/books/${isbn}`);
  return response;
};
