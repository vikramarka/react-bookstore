import * as types from './types';
import { CartItemType } from '../../types';

export const addToCart = function (cartItem: CartItemType) {
  return {
    type: types.ADD_TO_CART_START,
    payload: cartItem,
  };
};
