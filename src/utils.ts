import { PriceType } from './types';

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

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];

export { getKeyValue };
