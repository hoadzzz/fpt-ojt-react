import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../views/Home/Home";
import Catalog from "../views/Catalog/Catalog";
import Cart from "../views/Cart/Cart";
import Product from "../views/Product/Product";
import Contact from "../views/Contact/Contact";
import Login from "../views/Log-in/Login";
import Signup from "../views/Sign-up/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
