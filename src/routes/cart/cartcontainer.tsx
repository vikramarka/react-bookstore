import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { actions as userActions } from '../../store/user';
import CartComponent from './cartcomponent';
import { AppState } from '../../store/rootReducer';

const mapStateToProps = (state: AppState) => {
  return {
    cart: state.userState.cart,
    address: state.userState.address,
    cartPrice: state.userState.cartPrice,
    tax: state.userState.tax,
    shipping: state.userState.shippingCharge,
  };
};

const mapDisptachToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      removeFromCart: userActions.removeFromCart,
      updateAddress: userActions.updateAddress,
    },
    dispatch
  );
};

const CartContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(CartComponent);

export default CartContainer;
