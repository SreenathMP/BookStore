/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Product from './components/ProductPage/Product';
import Cart from './components/Cart/Cart';


function App() {
  return ( 
     <Router>
     <Switch>
       <Route exact path="/" component={Home} /> 
       <Route path="/book/:id" component={Product} />
       <Route path="/cart/" component={Cart} />
     </Switch>
   </Router>
  );
}

export default App;
