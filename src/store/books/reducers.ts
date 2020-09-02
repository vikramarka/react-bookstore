import * as types from './types';
import { BookType, BookDetailsType } from '../../types';

export interface BooksState {
  books: BookType[];
  bookDetails: Map<string, BookDetailsType>;
  booksLoading: boolean;
  bookDetailsLoading: boolean;
}

const defaultState: BooksState = {
  books: [],
  booksLoading: false,
  bookDetailsLoading: false,
  bookDetails: new Map(),
};

export default function (
  state: BooksState = defaultState,
  action: types.BookActionTypes
): BooksState {
  switch (action.type) {
    case types.REQUEST_BOOKS_START:
      return {
        ...state,
        booksLoading: true,
      };
    case types.REQUEST_BOOKS_SUCCESS:
      return {
        ...state,
        booksLoading: false,
        books: action.payload,
      };
    case types.REQUEST_BOOK_DETAILS_START:
      return {
        ...state,
        bookDetailsLoading: true,
      };
    case types.REQUEST_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        bookDetailsLoading: false,
        bookDetails: action.payload,
      };
    default:
      return state;
  }
}
