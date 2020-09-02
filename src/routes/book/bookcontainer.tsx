import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions as booksActions } from '../../store/books';
import BookComponent from './bookcomponent';
import { AppState } from '../../store/rootRedcer';

const mapStateToProps = (state: AppState) => {
  return {
    bookDetails: state.booksState.bookDetails,
    bookDetailsLoading: state.booksState.bookDetailsLoading,
  };
};

const mapDisptachToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getBookDetails: booksActions.getBookDetails,
    },
    dispatch
  );
};

const BookContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(BookComponent);

export default BookContainer;
