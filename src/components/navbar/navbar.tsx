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

type NavBarState = {
  hamburgerMenuOpened: boolean
}

class NavBar extends Component<NavBarProps, NavBarState> {
  state = {
    hamburgerMenuOpened:false
  }
  handleHamburgerClick(){
    this.setState(({hamburgerMenuOpened})=>({
      hamburgerMenuOpened:!hamburgerMenuOpened
    }));
  }
  render() {
    let cartItems = 0;
    for (var i = 0; i < this.props.cart.length; i++) {
      cartItems += this.props.cart[i].quantity;
    }
    return (
      <>
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
          <div onClick={()=>this.handleHamburgerClick()} className={`hamburger-icon ${this.state.hamburgerMenuOpened?"open":""}`}>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
        </header>
        <div className={`collapse-menu ${this.state.hamburgerMenuOpened?"open":""}`}>
          <nav>
              <ul className="mobile-navigation">
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
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    cart: state.userState.cart,
  };
};

export default connect(mapStateToProps)(NavBar);
