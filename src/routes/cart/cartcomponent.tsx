import React, { Component, Fragment } from 'react';
import NavBar from '../../components/navbar/navbar';
import { CartItemType, AddressType } from '../../types';
import Address from '../../components/address/address';
import ShoppingBag from '../../components/shoppingbag/shoppingbag';

export type CartActionProps = {
  removeFromCart: (isbn: string) => void;
  updateAddress: (address: AddressType) => void;
};

export type CartProps = {
  cart: CartItemType[];
  cartPrice: number;
  tax: number;
  shipping: number;
  address: AddressType;
};

export type CartState = {
  isAddressValid: boolean;
  address: AddressType;
};

class CartComponent extends Component<CartActionProps & CartProps, CartState> {
  componentDidMount() {
    this.setState({
      isAddressValid: true,
      address: this.props.address,
    });
  }
  handleCheckout() {
    //check if address is valid
    const isAddressValid: boolean =
      Object.keys(this.state.address).filter((addressComponent: string) => {
        return addressComponent.trim() === '';
      }).length === 0;
    this.setState({
      isAddressValid: isAddressValid,
    });
    if (isAddressValid) {
      //perform checkout
    }
  }
  handleAddressUpdate(address: AddressType) {}
  render() {
    if (!this.state) {
      return <>Loading</>;
    }
    return (
      <div>
        <Fragment>
          <NavBar title="Book Store"></NavBar>
          <div className="container books-list-container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <Address
                  address={this.state.address}
                  onUpdate={(address: AddressType) =>
                    this.handleAddressUpdate(address)
                  }
                />
              </div>
              <div className="col-xs-12 col-md-6">
                <ShoppingBag
                  cart={this.props.cart}
                  cartPrice={this.props.cartPrice}
                  tax={this.props.tax}
                  shipping={this.props.shipping}
                  onDelete={this.props.removeFromCart}
                  onCheckout={() => this.handleCheckout()}
                />
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

export default CartComponent;
