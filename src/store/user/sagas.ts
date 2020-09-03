import { AppState } from '../rootReducer';
import { BookType, BookDetailsType, CartItemType } from '../../types';
import { select, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

export const getBookFromState: any = (state: AppState) => {
  return state.booksState.books;
};

export function* addToCart({ payload }: any) {
  console.log('here');
  const booksFromState: BookType[] = yield select(getBookFromState);
  const book: BookType = booksFromState.find(
    (book: BookType) => book.isbn == payload
  ) as BookType;
  const cartItem: CartItemType = {
    book: book,
    quantity: 1,
  };
  yield put(actions.addToCartSuccess(cartItem));
}

export function* removeFromCart({ payload }: any) {
  console.log(payload);
  yield put(actions.removeFromCartSuccess(payload));
}

export function* watchAddToCart() {
  yield takeEvery(types.ADD_TO_CART_START, addToCart);
}

export function* watchRemoveFromCart() {
  yield takeEvery(types.REMOVE_FROM_CART_START, removeFromCart);
}

export const sagas = [watchAddToCart, watchRemoveFromCart];
