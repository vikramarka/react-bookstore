import { CartItemType, AddressType } from '../../types';

export const ADD_TO_CART_START = 'ADD_TO_CART_START';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';

export const REMOVE_FROM_CART_START = 'REMOVE_FROM_CART_START';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAIL = 'REMOVE_FROM_CART_FAIL';

export const UPDATE_ADDRESS_START = 'UPDATE_ADDRESS_START';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAIL = 'UPDATE_ADDRESS_FAIL';

interface AddToCartStartAction {
  type: typeof ADD_TO_CART_START;
  payload: CartItemType;
}

interface AddToCartSuccessAction {
  type: typeof ADD_TO_CART_SUCCESS;
  payload: CartItemType;
}

interface AddToCartFailAction {
  type: typeof ADD_TO_CART_FAIL;
}

interface RemoveFromCartStartAction {
  type: typeof REMOVE_FROM_CART_START;
  payload: string;
}

interface RemoveFromCartSuccessAction {
  type: typeof REMOVE_FROM_CART_SUCCESS;
  payload: string;
}

interface UpdateAddressStartAction {
  type: typeof UPDATE_ADDRESS_START;
  payload: AddressType;
}

interface UpdateAddressSuccessAction {
  type: typeof UPDATE_ADDRESS_SUCCESS;
  payload: AddressType;
}

export type UserActionTypes =
  | AddToCartStartAction
  | AddToCartSuccessAction
  | RemoveFromCartStartAction
  | RemoveFromCartSuccessAction
  | UpdateAddressStartAction
  | UpdateAddressSuccessAction;
