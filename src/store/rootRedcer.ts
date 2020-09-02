import booksReducer from './books';
import { combineReducers } from 'redux';
import { BooksState } from './books/reducers';
import { history } from '../history';
import { connectRouter } from 'connected-react-router';

export interface AppState {
  booksState: BooksState;
  router: any;
}

export default combineReducers<AppState>({
  booksState: booksReducer,
  router: connectRouter(history),
});
