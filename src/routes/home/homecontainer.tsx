import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions as booksActions } from '../../store/books';
import { actions as userActions } from '../../store/user';
import HomeComponent from './homecomponent';
import { AppState } from '../../store/rootReducer';

const mapStateToProps = (state: AppState) => {
  return {
    books: state.booksState.books,
    booksLoading: state.booksState.booksLoading,
    router: state.router,
  };
};

const mapDisptachToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getBooks: booksActions.getBooks,
      addToCart: userActions.addToCart,
    },
    dispatch
  );
};

const HomeContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(HomeComponent);

export default HomeContainer;
