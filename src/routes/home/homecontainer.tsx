import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions as booksActions } from '../../store/books';
import HomeComponent from './homecomponent';
import { AppState } from '../../store/rootRedcer';

const mapStateToProps = (state: AppState) => {
  return {
    books: state.booksState.books,
    booksLoading: state.booksState.booksLoading,
  };
};

const mapDisptachToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getBooks: booksActions.getBooks,
    },
    dispatch
  );
};

const HomeContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(HomeComponent);

export default HomeContainer;
