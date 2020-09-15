import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import { CartItemType, OrderType, BookType } from '../types';
import { OrderStatus } from '../constants';
import { getDatePlaced } from '../utils';
import OrderItem from '../components/orderitem/orderitem';

test('should render order component properly',()=>{
    const dummyBook1:BookType = {
        title:"Book Title",
        image:"https://via.placeholder.com/150",
        description:"Sample Description",
        price:12,
        currency:"$",
        isbn:"123456"
    };

    const dummyCartItem1:CartItemType = {
        book:dummyBook1,
        quantity:5
    };

    const dummyBook2:BookType = {
        title:"Book Title2",
        image:"https://via.placeholder.com/150",
        description:"Sample Description",
        price:20,
        currency:"$",
        isbn:"345678"
    };

    const dummyCartItem2:CartItemType = {
        book:dummyBook2,
        quantity:5
    };

    const dummyItems:CartItemType[] = [
        dummyCartItem1, dummyCartItem2
    ];

    const datePlaced:string = getDatePlaced();

    const dummyOrder:OrderType = {
        status: OrderStatus.Placed,
        datePlaced: datePlaced,
        items: dummyItems
    };

    render(<OrderItem order={dummyOrder}/>);

    expect(screen.getByText(dummyOrder.status)).toBeInTheDocument();
    expect(screen.getByText(dummyOrder.datePlaced)).toBeInTheDocument();

    //Initially it should show one book. On click show more, it should show all the books.
    expect(screen.getAllByTestId("order-item")).toHaveLength(1);
    fireEvent.click(screen.getByText(/Show More/));
    expect(screen.getAllByTestId("order-item")).toHaveLength(dummyOrder.items.length);
    expect(screen.getByText(/Show Less/)).toBeInTheDocument();
 })