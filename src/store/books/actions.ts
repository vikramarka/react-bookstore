import * as types from './types';
import { BookType } from '../../types';

export const getBooks = function () {
  return {
    type: types.REQUEST_BOOKS_START,
    payload: null,
  };
};

export const getBooksSuccess = function (books: BookType[]) {
  return {
    type: types.REQUEST_BOOKS_SUCCESS,
    payload: books,
  };
};

export const getBooksFail = function () {
  return {
    type: types.REQUEST_BOOKS_FAIL,
  };
};

export const getBookDetails = function (bookISBN: string) {
  return {
    type: types.REQUEST_BOOK_DETAILS_START,
    payload: bookISBN,
  };
};

export const getBookDetailsSuccess = function (bookDetails: any) {
  return {
    type: types.REQUEST_BOOK_DETAILS_SUCCESS,
    payload: bookDetails,
  };
};

export const getBookDetailsFail = function () {
  return {
    type: types.REQUEST_BOOK_DETAILS_FAIL,
  };
};
