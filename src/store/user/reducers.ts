import * as types from './types';
import { AddressType, OrderType, CartItemType } from '../../types';

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
    firstName: '',
    lastName: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    country: '',
  },
  orders: [],
  cart: [],
  cartPrice: 0,
  tax: 0,
  shippingCharge: 5,
};

function calculateTotalPrice(cart: CartItemType[]) {
  let price = 0;
  let tax = 0;
  for (var i = 0; i < cart.length; i++) {
    price += cart[i].book.price * cart[i].quantity;
  }
  //15 percent tax
  tax = price * 0.15;
  return { price, tax };
}

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
    default:
      return state;
  }
}
