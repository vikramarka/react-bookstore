import React, { Component, Fragment } from 'react';
import { BookType } from '../../types';
import Product from '../../components/product/product';
import NavBar from '../../components/navbar/navbar';
import { history } from '../../history';

import './homecomponent.scss';

export type HomeActionProps = {
  getBooks: () => void;
  addToCart: (isbn: string) => void;
  onBuyNow: (isbn: string) => void;
};

export type HomeProps = {
  books: BookType[];
  router: any;
};

export type HomeState = {
  books: BookType[];
  booksLoading: boolean;
};

class HomeComponent extends Component<HomeProps & HomeActionProps, HomeState> {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    return (
      <Fragment>
        <NavBar title="Book Store"></NavBar>
        <div className="container books-list-container">
          <div className="row-10">
            {this.props.books.map((book: BookType) => {
              return (
                <div className="col-xs-10 col-sm-5 col-md-2" key={book.isbn}>
                  <Product
                    {...book}
                    onAddToCart={this.props.addToCart}
                    onBuyNow={(isbn: string) => {
                      this.props.addToCart(isbn);
                      history.push('/cart');
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeComponent;
