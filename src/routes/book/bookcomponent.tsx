import React, { Component, Fragment, ReactNode } from 'react';
import { BookDetailsType } from '../../types';
import Product from '../../components/product/product';
import NavBar from '../../components/navbar/navbar';

import './bookcomponent.scss';

export type BookActionProps = {
  getBookDetails: (isbn: string) => void;
};

export type BookProps = {
  bookDetails: Map<string, BookDetailsType>;
  bookDetailsLoading: boolean;
  match?: any;
};

export type HomeState = {};

class BookComponent extends Component<BookProps & BookActionProps, HomeState> {
  componentDidMount() {
    this.props.getBookDetails(this.props.match.params.isbn);
  }
  render() {
    return (
      <Fragment>
        <NavBar title="Book Store"></NavBar>
        <div className="container books-list-container">
          {this.renderBookDetails()}
        </div>
      </Fragment>
    );
  }

  renderBookDetails(): ReactNode {
    if (this.props.bookDetailsLoading) {
      return <div className="row">Loading</div>;
    } else {
      const bookData: BookDetailsType | undefined = this.props.bookDetails.get(
        'isbn_' + this.props.match.params.isbn
      );
      console.log(bookData);
      if (!bookData) {
        return <div>Some error occured</div>;
      }
      return (
        <div className="row">
          <div className="col-xs-12 col-md-4 book-section">
            <img src={bookData.image} alt="book image" />
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="book-details-section">
              <div className="book-details-info">
                <h1>{bookData.title}</h1>
                <h2>{bookData.subTitle}</h2>
                <h2>{`${bookData.currency}${bookData.price}`}</h2>
                <h3>Author: {bookData.authors}</h3>
                <h3>Pages: {bookData.pages}</h3>
                <h3>ISBN: {bookData.isbn}</h3>
              </div>
              <div className="book-button-group">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-secondary">Buy Now</button>
              </div>
              <div className="book-description">
                <p>{bookData.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default BookComponent;
