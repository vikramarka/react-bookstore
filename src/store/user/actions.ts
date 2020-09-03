import * as types from './types';
import { CartItemType, AddressType } from '../../types';

export const addToCart = function (isbn: string) {
  return {
    type: types.ADD_TO_CART_START,
    payload: isbn,
  };
};

export const addToCartSuccess = function (cartItem: CartItemType) {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    payload: cartItem,
  };
};

export const removeFromCart = function (isbn: string) {
  return {
    type: types.REMOVE_FROM_CART_START,
    payload: isbn,
  };
};

export const removeFromCartSuccess = function (isbn: string) {
  return {
    type: types.REMOVE_FROM_CART_SUCCESS,
    payload: isbn,
  };
};

export const updateAddress = function (address: AddressType) {
  return {
    type: types.UPDATE_ADDRESS_START,
    payload: address,
  };
};

export const updateAddressSuccess = function (address: AddressType) {
  return {
    type: types.UPDATE_ADDRESS_SUCCESS,
    payload: address,
  };
};
