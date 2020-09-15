import * as types from './types';
import { AddressType, OrderType, CartItemType } from '../../types';
import { calculateTotalPrice, getShippingCharge } from '../../utils';

export interface UserState {
  address: AddressType;
  orders: OrderType[];
  cart: CartItemType[];
  cartPrice: number;
  tax: number;
  shippingCharge: number;
}

const defaultState: UserState = {
  address: {
    firstName: 'test',
    lastName: 'test',
    streetAddress1: 'test',
    streetAddress2: 'test',
    city: 'test',
    country: 'test',
  },
  orders: [],
  cart: [],
  cartPrice: 0,
  tax: 0,
  shippingCharge: getShippingCharge(),
};

export default function (
  state: UserState = defaultState,
  action: types.UserActionTypes
) {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      var cart: CartItemType[] = [...state.cart];
      var alreadyExisting = false;
      for (var i = 0; i < cart.length; i++) {
        let cartItem = cart[i];

        if (cartItem.book.isbn == action.payload.book.isbn) {
          cartItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
          cart[i] = cartItem;
          alreadyExisting = true;
          break;
        }
      }
      if (!alreadyExisting) {
        cart.push(action.payload);
      }
      var { price, tax } = calculateTotalPrice(cart);
      return {
        ...state,
        cart: cart,
        cartPrice: price,
        tax: tax,
      };
    case types.REMOVE_FROM_CART_SUCCESS:
      var cart: CartItemType[] = [...state.cart];
      var alreadyExisting = false;
      for (var i = 0; i < cart.length; i++) {
        let cartItem = cart[i];
        if (cartItem.book.isbn == action.payload) {
          var quantity = cartItem.quantity;
          if (quantity >= 1) {
            quantity--;
          }
          if (quantity == 0) {
            cart.splice(i, 1);
            i--;
          } else {
            cartItem = {
              ...cartItem,
              quantity: quantity,
            };
            cart[i] = cartItem;
          }
          break;
        }
      }
      var { price, tax } = calculateTotalPrice(cart);
      return {
        ...state,
        cart: cart,
        cartPrice: price,
        tax: tax,
      };
    case types.UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        address: action.payload,
      };
    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        cart: [],
      };
    default:
      return state;
  }
}
