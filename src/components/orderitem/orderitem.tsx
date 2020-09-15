import React, { useState } from 'react';
import { OrderType, CartItemType } from '../../types';
import { formatCurrency } from '../../utils';

type Props = { order: OrderType }


export default function OrderItem({ order }: Props) {
  const [showAll, setShowAll] = useState(false);

  function renderOrders() {
    if (showAll) {
      return order.items.map(renderSingleOrderItem);
    } else {
      return renderSingleOrderItem(order.items[0]);
    }
  }

  function renderSingleOrderItem(cartItem: CartItemType) {
    return (
      <div className="order-item-info row" data-testid="order-item" key={cartItem.book.isbn}>
        <div className="col-xs-6 col-sm-2">
          <img src={cartItem.book.image} alt={cartItem.book.title} />
        </div>
        <div className="col-xs-6 col-sm-10">
          <h2>{cartItem.book.title}</h2>
          <h3>{formatCurrency(cartItem.book.price)}</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="col-xs-12">
      <div className="order-section">
        <div className="order-header">
          <div className="order-title">Order Placed: <span>{order.datePlaced}</span></div>
          <div className="order-status">Status: <span>{order.status}</span></div>
        </div>
        <div className="order-details">{renderOrders()}</div>
        <div
          className="show-more"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </div>
      </div>
    </div>
  );
}
