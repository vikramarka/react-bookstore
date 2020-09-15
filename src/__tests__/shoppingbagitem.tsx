import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import { CartItemType, BookType } from '../types';
import { MemoryRouter } from 'react-router-dom';
import ShoppingBagItem from '../components/shoppingbag/shoppingbagitem';
import { formatCurrency } from '../utils';

test('shoppingbag item should call appropriate functions',async ()=>{
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
    const onDelete = jest.fn();
    render(<MemoryRouter>
        <ShoppingBagItem cartItem={dummyCartItem} onDelete={onDelete}></ShoppingBagItem>
    </MemoryRouter>);

    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();

    expect(screen.getByText(dummyCartItem.quantity.toString())).toBeInTheDocument();

    const priceText = formatCurrency(dummyBook.price*dummyCartItem.quantity);
    expect(screen.getByText(priceText)).toBeInTheDocument();

    const quantityBeforeDelete = dummyCartItem.quantity;

    fireEvent.click(screen.getByText(/Delete/));
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(dummyBook.isbn);

});