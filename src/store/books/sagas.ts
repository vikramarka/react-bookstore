import * as actions from './actions';
import * as types from './types';
import { put, takeEvery, call, select } from 'redux-saga/effects';
import { fetchBooks, fetchBookDetails } from '../../services';
import { BookType, BookDetailsType } from '../../types';
import { convertCurrencyToNumber } from '../../utils';
import { BooksState } from './reducers';
import { AppState } from '../rootReducer';

export const getBookDetailsFromState: any = (state: AppState) => {
  return state.booksState.bookDetails;
};

export function* getBooks() {
  const response1: any = yield call(fetchBooks,1);
  const response2: any = yield call(fetchBooks,2);
  const finalResponse:any = response1.data.books.concat(response2.data.books);
  const books: BookType[] = finalResponse.map((book: any) => {
    const { amount, currency } = convertCurrencyToNumber(book.price);
    return {
      title: book.title,
      image: book.image,
      isbn: book.isbn13,
      price: amount,
      currency: currency,
    };
  });
  
  yield put(actions.getBooksSuccess(books));
}

export function* getBookDetails({ payload }: any) {
  const bookDetailsFromState = yield select(getBookDetailsFromState);
  let bookDetails: BookDetailsType = bookDetailsFromState['isbn_' + payload];
  if (bookDetails) {
    yield put(actions.getBookDetailsSuccess(bookDetails));
  } else {
    const response: any = yield call(fetchBookDetails, payload);
    const { amount, currency } = convertCurrencyToNumber(response.data.price);
    bookDetails = {
      title: response.data.title,
      subTitle: response.data.subtitle,
      authors: response.data.authors,
      rating: response.data.rating,
      isbn: response.data.isbn13,
      description: response.data.desc,
      price: amount,
      currency: currency,
      image: response.data.image,
      pages: response.data.pages,
    };
    bookDetailsFromState.set('isbn_' + payload, bookDetails);
    yield put(actions.getBookDetailsSuccess(bookDetailsFromState));
  }
}

export function* watchGetBookDetails() {
  yield takeEvery(types.REQUEST_BOOK_DETAILS_START, getBookDetails);
}

export function* watchGetBooks() {
  yield takeEvery(types.REQUEST_BOOKS_START, getBooks);
}

export const sagas = [watchGetBooks, watchGetBookDetails];
