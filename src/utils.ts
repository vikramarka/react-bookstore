import { PriceType } from './types';

export function convertCurrencyToNumber(currency: string): PriceType {
  const currencyString = currency.charAt(0);
  const amount = parseFloat(currency.substring(1));
  return {
    currency: currencyString,
    amount: amount,
  };
}
