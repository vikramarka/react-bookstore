import { PriceType, CartItemType } from './types';
import moment from 'moment';

export function convertCurrencyToNumber(currency: string): PriceType {
  const currencyString = currency.charAt(0);
  const amount = parseFloat(currency.substring(1));
  return {
    currency: currencyString,
    amount: amount,
  };
}

export function formatCurrency(number: number): string {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

export function calculateTotalPrice(cart: CartItemType[]) {
  let price = 0;
  let tax = 0;
  for (var i = 0; i < cart.length; i++) {
    price += cart[i].book.price * cart[i].quantity;
  }
  //15 percent tax
  tax = price * 0.15;
  return { price, tax };
}

export function getShippingCharge(){
  return 5;
}

export function getDatePlaced(){
  return moment().format('MMMM Do YYYY, h:mm:ss a')
}

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

export { getKeyValue };
