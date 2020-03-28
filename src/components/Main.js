import React from 'react';
import { Switch, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Customers from './pages/Customers';
import HomePage from './pages/HomePage';


const Main = (props) => (
    <Switch>
        <Route exact path="/" component={HomePage} />;
        <Route  path="/contact" component={Contact} />;
        <Route path="/customers" component={Customers} />;
    </Switch>
)

export default Main;