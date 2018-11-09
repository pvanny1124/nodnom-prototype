import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './landingpage';
import Login from './login'
import Signup from './signup'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Shared-Components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="main_body_wrapper">
            <Route path="/" exact component={LandingPage}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/user/:id/dashboard" />
          </div>
        </BrowserRouter>
        <p className="placeholder_style footer">Footer Placeholder</p>
      </div>
    );
  }
}

export default App;
