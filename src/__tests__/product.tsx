
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import Product from '../components/product/product';
import {MemoryRouter} from 'react-router-dom';
import { formatCurrency } from '../utils';

test('calls appropriate calls when add to cart or buy now clicked',()=>{
    const dummyProps = {
        title: "Book Title",
        image: "https://via.placeholder.com/150",
        price:12,
        currency:"$",
        isbn:"123456",
        onAddToCart:jest.fn(),
        onBuyNow:jest.fn()
    };
    //Product contains Link tags. So need to use MemoryRouter since Link should be inside a Router component.
    render(<MemoryRouter>
            <Product {...dummyProps}></Product>
        </MemoryRouter>);

    expect(screen.getByText(dummyProps.title)).toBeInTheDocument();
    expect(screen.getByText(formatCurrency(dummyProps.price))).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Add to Cart/));
    expect(dummyProps.onAddToCart).toHaveBeenCalledTimes(1);
    expect(dummyProps.onAddToCart).toHaveBeenCalledWith(dummyProps.isbn);

    fireEvent.click(screen.getByText(/Buy Now/));
    expect(dummyProps.onBuyNow).toHaveBeenCalledTimes(1);
    expect(dummyProps.onBuyNow).toHaveBeenCalledWith(dummyProps.isbn);
});