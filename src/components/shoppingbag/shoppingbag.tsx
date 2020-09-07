import React from 'react';
import { CartItemType } from '../../types';
import ShoppingBagItem from './shoppingbagitem';
import './shoppingbag.scss';
import { formatCurrency } from '../../utils';
import { Link } from 'react-router-dom';

export default function ShoppingBag({
  cart,
  cartPrice,
  tax,
  shipping,
  onDelete,
  onCheckout,
}: {
  cart: CartItemType[];
  onDelete: any;
  onCheckout: any;
  cartPrice: number;
  tax: number;
  shipping: number;
}) {
  function renderCart() {
    if (cart.length == 0) {
      return <div className="col-xs-12"> No items in your Cart</div>;
    } else {
      return cart.map((cartItem: CartItemType,index:number) => {
        return <ShoppingBagItem key={index} cartItem={cartItem} onDelete={onDelete} />;
      });
    }
  }
  function renderPaymentInfo() {
    if (cart.length > 0) {
      return (
        <div>
          <h2>Payment Info</h2>
          <div className="price-block-container">
            <div className="price-block">
              <div className="price-block-title">Items Price:</div>
              <div className="price-block-amount">
                {formatCurrency(cartPrice)}
              </div>
            </div>
            <div className="price-block">
              <div className="price-block-title">Tax:</div>
              <div className="price-block-amount">{formatCurrency(tax)}</div>
            </div>
            <div className="price-block underline">
              <div className="price-block-title">Shipping Charge:</div>
              <div className="price-block-amount">
                {formatCurrency(shipping)}
              </div>
            </div>
            <div className="price-block total-price">
              <div className="price-block-title">Total:</div>
              <div className="price-block-amount final">
                {formatCurrency(shipping + tax + cartPrice)}
              </div>
            </div>
          </div>
          <div className="checkout-button-block">
            <button
              className="btn btn-secondary checkout-button"
              onClick={onCheckout}
            >
              Checkout
            </button>
            <Link to="/" className="btn btn-primary checkout-button">
              Cancel
            </Link>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="shopping-bag-section">
      <h1 className="col-xs-12">Shopping Bag</h1>
      <div className="cart-container">{renderCart()}</div>
      {renderPaymentInfo()}
    </div>
  );
}
