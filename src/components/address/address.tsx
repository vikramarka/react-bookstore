import React, { useState } from 'react';
import * as types from '../../types';
import './address.scss';

export default function Address({
  address,
  onUpdate,
}: {
  address: types.AddressType;
  onUpdate: (address: types.AddressType) => void;
}) {
  const [localAddress, setLocalAdderss] = useState(address);
  const [isValidated, setIsValidated] = useState(false);
  function handleAddressChange(key: string, value: string) {
    setLocalAdderss({
      ...localAddress,
      [key]: value,
    });
  }
  function submitAddressForm(e: any) {
    e.preventDefault();
    setIsValidated(true);
    let isValid: boolean = true;
    for (var i = 0; i < Object.keys(localAddress).length; i++) {
      const key: keyof types.AddressType = Object.keys(localAddress)[
        i
      ] as keyof types.AddressType;
      if (localAddress[key]?.trim() === '') {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      onUpdate(localAddress);
    }
  }
  function isValid(key: keyof types.AddressType): boolean {
    return localAddress[key]?.trim() != '';
  }
  return (
    <div className="address-container">
      <form className="row" onSubmit={submitAddressForm}>
        <div className="col-xs-12">
          <h1>Shipping Address</h1>
        </div>
        <div className="col-xs-12 col-md-6 input-group">
          <label className={!isValid('firstName') ? 'error' : ''}>
            First Name
          </label>
          <input
            type="text"
            value={localAddress.firstName}
            onChange={(e) => {
              handleAddressChange('firstName', e.target.value);
            }}
            className={!isValid('firstName') ? 'error' : ''}
          ></input>
        </div>
        <div className="col-xs-12 col-md-6 input-group">
          <label className={!isValid('lastName') ? 'error' : ''}>
            Last Name
          </label>
          <input
            type="text"
            value={localAddress.lastName}
            onChange={(e) => {
              handleAddressChange('lastName', e.target.value);
            }}
            className={!isValid('lastName') ? 'error' : ''}
          ></input>
        </div>
        <div className="col-xs-12 input-group">
          <label className={!isValid('streetAddress1') ? 'error' : ''}>
            Street Address1
          </label>
          <input
            type="text"
            value={localAddress.streetAddress1}
            onChange={(e) => {
              handleAddressChange('streetAddress1', e.target.value);
            }}
            className={!isValid('streetAddress1') ? 'error' : ''}
          ></input>
        </div>
        <div className="col-xs-12 input-group">
          <label className={!isValid('streetAddress2') ? 'error' : ''}>
            Street Address2
          </label>
          <input
            type="text"
            value={localAddress.streetAddress2}
            onChange={(e) => {
              handleAddressChange('streetAddress2', e.target.value);
            }}
            className={!isValid('streetAddress2') ? 'error' : ''}
          ></input>
        </div>
        <div className="col-xs-6 input-group">
          <label className={!isValid('city') ? 'error' : ''}>City</label>
          <input
            type="text"
            value={localAddress.city}
            className={!isValid('city') ? 'error' : ''}
            onChange={(e) => {
              handleAddressChange('city', e.target.value);
            }}
          ></input>
        </div>
        <div className="col-xs-6 input-group">
          <label className={!isValid('country') ? 'error' : ''}>Country</label>
          <input
            type="text"
            className={!isValid('country') ? 'error' : ''}
            value={localAddress.country}
            onChange={(e) => {
              handleAddressChange('country', e.target.value);
            }}
          ></input>
        </div>
        <div className="col-xs-12">
          <input
            type="submit"
            value="Update Address"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
