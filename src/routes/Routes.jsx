import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Log-in/Login";
import Signup from "../pages/Sign-up/Signup";
import Accessories from "../pages/Accessories/Accessories";
import AccessoriesDetail from "../pages/Accessories/AccessoriesDetail";

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
      <Route path="/accessories" component={Accessories}/>
      <Route path="/accessories/:slug" component={AccessoriesDetail}/>
    </Switch>
  );
};

export default Routes;
