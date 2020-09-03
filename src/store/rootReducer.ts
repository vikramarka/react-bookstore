import booksReducer from './books';
import userReducer from './user';
import { combineReducers } from 'redux';
import { BooksState } from './books/reducers';
import { history } from '../history';
import { connectRouter } from 'connected-react-router';
import { UserState } from './user/reducers';

export interface AppState {
  booksState: BooksState;
  userState: UserState;
  router: any;
}

export default combineReducers<AppState>({
  booksState: booksReducer,
  userState: userReducer,
  router: connectRouter(history),
});
