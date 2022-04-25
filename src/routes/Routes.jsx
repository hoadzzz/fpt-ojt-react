import React from "react";

import { Route, Switch } from "react-router-dom";

<<<<<<< HEAD
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Log-in/Login";
import Signup from "../pages/Sign-up/Signup";
import Accessories from "../pages/Accessories/Accessories";
import AccessoriesDetail from "../pages/Accessories/AccessoriesDetail";
<<<<<<< HEAD
import Checkout from "../pages/Checkout/Checkout";
=======
=======
import Home from "../views/Home/Home";
import Catalog from "../views/Catalog/Catalog";
import Cart from "../views/Cart/Cart";
import Product from "../views/Product/Product";
import Contact from "../views/Contact/Contact";
import Login from "../views/Log-in/Login";
import Signup from "../views/Sign-up/Signup";
import Accessories from "../views/Accessories/Accessories";
import Search from "../views/Search/Search"
>>>>>>> bcacd08 (fix css header)
>>>>>>> 44498c1 (fix confilg at router)

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
<<<<<<< HEAD
      <Route path="/accessories" component={Accessories} />
      <Route path="/accessories/:slug" component={AccessoriesDetail} />
      <Route path="/checkout" component={Checkout} />
=======
      <Route path="/accessories" component={Accessories}/>
<<<<<<< HEAD
      <Route path="/accessories/:slug" component={AccessoriesDetail}/>
=======
      <Route path="/search" component={Search} />
>>>>>>> bcacd08 (fix css header)
>>>>>>> 44498c1 (fix confilg at router)
    </Switch>
  );
};

export default Routes;
