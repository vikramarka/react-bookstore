import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

type NavBarProps = {
  title: string;
};

class NavBar extends Component<NavBarProps> {
  render() {
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
              <Link to="/cart">cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
