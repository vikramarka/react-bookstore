export type BookType = {
  title: string;
  image: string;
  description: string;
  price: number;
  currency: string;
  isbn: string;
};

export type BookDetailsType = {
  title: string;
  subTitle: string;
  authors: string;
  isbn: string;
  rating: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  pages: number;
};

export type AddressType = {
  firstName: string;
  lastName: string;
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  country: string;
};

export type CartItemType = {
  book: BookType;
  quantity: number;
};

export type OrderType = {
  status: string;
  datePlaced: Date;
  items: CartItemType[];
};

export type PriceType = {
  currency: string;
  amount: number;
};
