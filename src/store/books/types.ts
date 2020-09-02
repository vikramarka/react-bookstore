import { BookType, BookDetailsType } from '../../types';

export const REQUEST_BOOKS_START = 'REQUEST_BOOKS_START';
export const REQUEST_BOOKS_SUCCESS = 'REQUEST_BOOKS_SUCCESS';
export const REQUEST_BOOKS_FAIL = 'REQUEST_BOOKS_FAIL';

export const REQUEST_BOOK_DETAILS_START = 'REQUEST_BOOK_DETAILS_START';
export const REQUEST_BOOK_DETAILS_SUCCESS = 'REQUEST_BOOK_DETAILS_SUCCESS';
export const REQUEST_BOOK_DETAILS_FAIL = 'REQUEST_BOOK_DETAILS_FAIL';

interface RequestBooksStartAction {
  type: typeof REQUEST_BOOKS_START;
}

interface RequestBooksSuccessAction {
  type: typeof REQUEST_BOOKS_SUCCESS;
  payload: BookType[];
}

interface RequestBookDetailsStartAction {
  type: typeof REQUEST_BOOK_DETAILS_START;
  payload: string;
}

interface RequestBookDetailsSuccesAction {
  type: typeof REQUEST_BOOK_DETAILS_SUCCESS;
  payload: Map<string, BookDetailsType>;
}

export type BookActionTypes =
  | RequestBooksStartAction
  | RequestBooksSuccessAction
  | RequestBookDetailsStartAction
  | RequestBookDetailsSuccesAction;
