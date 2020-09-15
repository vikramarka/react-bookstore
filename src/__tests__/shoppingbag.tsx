import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import { CartItemType, BookType } from '../types';
import { calculateTotalPrice, getShippingCharge, formatCurrency } from '../utils';
import { MemoryRouter } from 'react-router-dom';
import ShoppingBag from '../components/shoppingbag/shoppingbag';

test('shopping bag should list shopping bag items correctly',()=>{
    const dummyBook:BookType = {
        title:"Book Title",
        image:"https://via.placeholder.com/150",
        description:"Sample Description",
        price:12,
        currency:"$",
        isbn:"123456"
    }
    const dummyCartItem:CartItemType = {
        book:dummyBook,
        quantity:5
    }
    const dummyCart:CartItemType[] = [dummyCartItem];
    const onDelete = jest.fn();
    const onCheckout = jest.fn();

    const {price,tax} = calculateTotalPrice(dummyCart);

    const shipping = getShippingCharge();

    const total = price + tax + shipping;

    render(<MemoryRouter>
        <ShoppingBag 
            cart={dummyCart}
            onDelete={onDelete}
            onCheckout={onCheckout}
            cartPrice={price}
            tax={tax}
            shipping={shipping}
        />
    </MemoryRouter>);

    expect(screen.getByTestId("cart-price")).toHaveTextContent(formatCurrency(price));
    expect(screen.getByTestId("cart-tax")).toHaveTextContent(formatCurrency(tax));
    expect(screen.getByTestId("cart-shipping")).toHaveTextContent(formatCurrency(shipping));
    expect(screen.getByTestId("cart-total")).toHaveTextContent(formatCurrency(total));

    fireEvent.click(screen.getByText(/Checkout/));
    expect(onCheckout).toBeCalledTimes(1);
});

test('should show No items message when the cart is empty',()=>{
    const dummyCart:CartItemType[] = [];
    const onDelete = jest.fn();
    const onCheckout = jest.fn();

    const {price,tax} = calculateTotalPrice(dummyCart);

    const shipping = getShippingCharge();

    const total = price + tax + shipping;

    render(<MemoryRouter>
        <ShoppingBag 
            cart={dummyCart}
            onDelete={onDelete}
            onCheckout={onCheckout}
            cartPrice={price}
            tax={tax}
            shipping={shipping}
        />
    </MemoryRouter>);

    expect(screen.getByTestId("no-items-message")).not.toBe(null);
})