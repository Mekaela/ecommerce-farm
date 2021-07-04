import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './containers/About';
import Header from './global-components/Header';
import Footer from './global-components/Footer';
import Produce from './containers/Produce';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter> 
          <Switch>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/produce'>
              <Produce />
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
