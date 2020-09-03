import React, { Fragment } from 'react';

import './styles/App.scss';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from './routes/home/homecontainer';
import BookContainer from './routes/book/bookcontainer';
import Footer from './components/footer/footer';
import CartContainer from './routes/cart/cartcontainer';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/book/:isbn" component={BookContainer}></Route>
        <Route path="/cart" component={CartContainer}></Route>
        <Route path="/" component={HomeContainer}></Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
