import { AppState } from '../rootReducer';
import { BookType, BookDetailsType, CartItemType } from '../../types';
import { select, put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import { history } from '../../history';

export const getBookFromState: any = (state: AppState) => {
  return state.booksState.books;
};

export function* addToCart({ payload }: any) {
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
  yield put(actions.removeFromCartSuccess(payload));
}

export function* updateAddress({ payload }: any) {
  yield put(actions.updateAddressSuccess(payload));
}

export function* addOrder({ payload }: any) {
  yield put(actions.addOrderSuccess(payload));
  yield call(history.push, '/orders');
}

/////watchers
export function* watchAddToCart() {
  yield takeEvery(types.ADD_TO_CART_START, addToCart);
}

export function* watchRemoveFromCart() {
  yield takeEvery(types.REMOVE_FROM_CART_START, removeFromCart);
}

export function* watchUpdateAddress() {
  yield takeEvery(types.UPDATE_ADDRESS_START, updateAddress);
}

export function* watchAddOrder() {
  yield takeEvery(types.ADD_ORDER_START, addOrder);
}

export const sagas = [
  watchAddToCart,
  watchRemoveFromCart,
  watchUpdateAddress,
  watchAddOrder,
];
