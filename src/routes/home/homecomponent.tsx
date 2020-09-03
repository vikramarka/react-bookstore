import React, { Component, Fragment } from 'react';
import { BookType } from '../../types';
import Product from '../../components/product/product';
import NavBar from '../../components/navbar/navbar';

import './homecomponent.scss';

export type HomeActionProps = {
  getBooks: () => void;
  addToCart: (isbn: string) => void;
};

export type HomeProps = {
  books: BookType[];
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
          <div className="row">
            {this.props.books.map((book: BookType) => {
              return (
                <div className="col-xs-1 col-md-3">
                  <Product {...book} onAddToCart={this.props.addToCart} />
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
