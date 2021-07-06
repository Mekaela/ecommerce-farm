import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './containers/About';
import Header from './global-components/Header';
import Footer from './global-components/Footer';
import Produce from './containers/Produce';
import Product from './global-components/Product';
// import Counter from './global-components/Counter';
import Cart from './containers/Cart';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter> 
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path='/produce/:id'>
              <Product />
            </Route>
            <Route exact path='/produce'>
              <Produce />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
