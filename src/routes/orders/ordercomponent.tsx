import React, { Component, ReactNode } from 'react';
import NavBar from '../../components/navbar/navbar';
import { OrderType } from '../../types';

import './order.scss';
import OrderItem from '../../components/orderitem/orderitem';

export type OrderProps = {
  orders: OrderType[];
};

class OrderComponent extends Component<OrderProps> {
  renderOrders(): ReactNode {
    if (this.props.orders.length > 0) {
      return (
        <div className="row">
          {this.props.orders.map((order: OrderType) => {
            return <OrderItem order={order} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-xs-12 no-orders-text">No Orders found</div>
        </div>
      );
    }
  }
  render() {
    return (
      <>
        <NavBar title="Book Store"></NavBar>
        <div className="container books-list-container">
          {this.renderOrders()}
        </div>
      </>
    );
  }
}

export default OrderComponent;
