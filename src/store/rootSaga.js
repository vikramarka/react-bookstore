import { sagas as booksSagas } from './books';
import { sagas as userSagas } from './user';
import { all, fork } from 'redux-saga/effects';

const sagas = [...booksSagas, ...userSagas];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
