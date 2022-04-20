import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../views/Home/Home'
import Catalog from '../views/Catalog/Catalog'
import Cart from '../views/Cart/Cart'
import Product from '../views/Product/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    )
}

export default Routes
