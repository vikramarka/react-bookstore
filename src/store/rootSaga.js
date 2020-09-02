import { sagas as booksSagas } from './books';
import { all, fork } from 'redux-saga/effects';

const sagas = [...booksSagas];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
