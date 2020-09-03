import { AppState } from '../../store/rootReducer';
import { connect } from 'react-redux';
import OrderComponent from './ordercomponent';

const mapStateToProps = (state: AppState) => {
  return {
    orders: state.userState.orders,
  };
};

const OrderContainer = connect(mapStateToProps)(OrderComponent);
export default OrderContainer;
