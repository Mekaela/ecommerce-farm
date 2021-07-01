import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './global-components/Header';
import Footer from './global-components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter> 
        <Switch>
          <Route exact path=''>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
