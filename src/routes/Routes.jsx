import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About/About";
import Accessories from "../pages/Accessories/Accessories";
import Cart from "../pages/Cart/Cart";
import Catalog from "../pages/Catalog/Catalog";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Log-in/Login";
import Product from "../pages/Product/Product";
import Search from "../pages/Search/Search";
import Signup from "../pages/Sign-up/Signup";
import UserProfile from "../pages/UserProfile/UserProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:type/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/about" component={About} />
      <Route path="/search/:keyword" component={Search} />
      <Route path="/user-profile" component={UserProfile} />
    </Switch>
  );
};

export default Routes;