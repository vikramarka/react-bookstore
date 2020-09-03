import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions as booksActions } from '../../store/books';
import { actions as userActions } from '../../store/user';
import BookComponent from './bookcomponent';
import { AppState } from '../../store/rootReducer';

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
      addToCart: userActions.addToCart,
    },
    dispatch
  );
};

const BookContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(BookComponent);

export default BookContainer;
