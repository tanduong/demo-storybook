import React, {Fragment} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import './App.scss';

const Home = () => <div>Home</div>;
const ProductDetails = () => <div>ProductDetails</div>;
const Cart = () => <div>Cart</div>;
const Checkout = () => <div>Checkout</div>;
const CheckoutComplete = () => <div>CheckoutComplete</div>;
const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/products/:productId" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/checkout/complete" component={CheckoutComplete} />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
