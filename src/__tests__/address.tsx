import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import { AddressType } from '../types';
import Address from '../components/address/address';

test('tests address form functionalty',async ()=>{
    const address:AddressType = {
        firstName: "",
        lastName: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        country: ""
    }

    const onUpdate = jest.fn();

    render(<Address address={address} onUpdate={onUpdate}/>);

    fireEvent.click(screen.getByText(/Update Address/i));
    expect(onUpdate).not.toBeCalled();
    
    const firstName = 'Vikram';
    const lastName = 'Kumar';
    const streetAddress1 = "Test Address1";
    const streetAddress2 = "Test Address2";
    const city = "Hyderabad";
    const country = "India";

    fireEvent.change(screen.getByLabelText(/First Name/i), {
        target: {value: firstName},
    });

    fireEvent.change(screen.getByLabelText(/Last Name/i), {
        target: {value: lastName},
    });

    fireEvent.change(screen.getByLabelText(/Street Address1/i), {
        target: {value: streetAddress1},
    });

    fireEvent.change(screen.getByLabelText(/Street Address2/i), {
        target: {value: streetAddress2},
    });

    fireEvent.change(screen.getByLabelText(/City/i), {
        target: {value: city},
    });

    fireEvent.change(screen.getByLabelText(/Country/i), {
        target: {value: country},
    });

    fireEvent.click(screen.getByText(/Update Address/i));
    expect(onUpdate).toBeCalledTimes(1);
    expect(onUpdate).toBeCalledWith({firstName,lastName,streetAddress1,streetAddress2,city,country});   

})