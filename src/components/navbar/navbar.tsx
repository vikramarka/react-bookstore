import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/rootReducer';
import { connect } from 'react-redux';
import { CartItemType } from '../../types';

type NavBarProps = {
  title: string;
  cart: CartItemType[];
};

class NavBar extends Component<NavBarProps> {
  render() {
    let cartItems = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      cartItems += this.props.cart[i].quantity;
    }
    return (
      <header>
        <div className="nav-title">{this.props.title}</div>
        <nav>
          <ul className="main-navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/cart">cart ({cartItems}) </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    cart: state.userState.cart,
  };
};

export default connect(mapStateToProps)(NavBar);
