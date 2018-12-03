import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './landingpage';
import Login from './login';
import Signup from './components/Signup';
//import Signup from './signup';
//import Navbar from './navbar';
import Home from './components/Home/Home.js'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        user: null,
        isLoading: true
      }
  }

  getUserData(user){
    this.setState({user: user});
  }

  componentWillMount(){
    //check if user is already logged in session
    fetch("/api/auth")
      .then(response => {
          console.log(response);
          return response.json();
      })
      .then(data => {
          this.setState({user: data, isLoading: false});
          console.log(data);
      })
      .catch(error => {
        this.setState({isLoading: false})
          console.log(error);
      })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="main_body_wrapper">
            <Route path="/" exact component={LandingPage}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path='/home' component={Home}/>
            <Route path="/user/:id/dashboard" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
