import React from 'react';
import { CartItemType } from '../../types';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils';

export default function ShoppingBagItem({
  cartItem,
  onDelete,
}: {
  cartItem: CartItemType;
  onDelete: any;
}) {
  return (
    <div className="row">
      <div className="col-xs-4 shopping-bag-item">
        <Link to={`book/${cartItem.book.isbn}`}>
          <img src={cartItem.book.image} alt={cartItem.book.title}></img>
        </Link>
      </div>
      <div className="col-xs-4">
        <h3>{cartItem.book.title}</h3>
        <h4>Quantity: {cartItem.quantity}</h4>
        <h3>
          Price: {formatCurrency(cartItem.book.price * cartItem.quantity)}
        </h3>
      </div>
      <div className="col-xs-4 shopping-bag-item-button">
        <button
          className="btn btn-primary"
          onClick={() => {
            onDelete(cartItem.book.isbn);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
