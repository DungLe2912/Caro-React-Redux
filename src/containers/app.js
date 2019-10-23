import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeContainer from './home.container';

import SignIn from '../components/auth/SignIn'

import SignUp from '../components/auth/SignUp'


const App = () => (
  <BrowserRouter>
    <switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </switch>
  </BrowserRouter>
);  

export default App;
