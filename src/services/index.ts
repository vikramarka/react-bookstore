import axios from 'axios';

export const fetchBooks = async function () {
  const response = await axios.get('/new');
  return response;
};

export const fetchBookDetails = async function (isbn: string) {
  const response = await axios.get(`/books/${isbn}`);
  return response;
};
