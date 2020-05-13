import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Invertory/Inventory';
import Review from './Components/Review/Review';
import Error from './Components/Error/Error';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
           <Shop></Shop> 
           </Route>
           <Route path="/review">
             <Review></Review>
           </Route>
           <Route path="/inventory">
             <Inventory></Inventory>
           </Route>
           <Route exact path="/">
             <Shop></Shop>
           </Route>
           <Route path="/product/:productkey">
             <ProductDetails></ProductDetails>

           </Route>
           <Route path="*">
             <Error></Error>
           </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
