import React, { Component, Fragment } from 'react';

import './product.scss';
import { Link } from 'react-router-dom';

type ProductProps = {
  title: string;
  image: string;
  price: number;
  currency: string;
  isbn: string;
};

class Product extends Component<ProductProps> {
  render() {
    return (
      <div className="product-list-item">
        <div className="product-image">
          <Link to={`book/${this.props.isbn}`}>
            <img className="product" src={this.props.image}></img>
          </Link>

          <div className="product-buttons">
            <button className="btn btn-primary product-add-to-cart-btn">
              Add to Cart
            </button>
            <button className="btn btn-secondary product-buy-btn">
              Buy Now
            </button>
          </div>
        </div>
        <div className="product-info">
          <h2 className="product-title">{this.props.title}</h2>
          <h3>
            {this.props.currency}
            {this.props.price}
          </h3>
        </div>
      </div>
    );
  }
}

export default Product;
