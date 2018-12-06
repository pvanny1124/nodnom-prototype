import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SignupAsUser from './components/SignupAsUser'
import SignupAsVendor from './components/SignupAsVendor'
import Login from './components/Login'
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
    console.log(user);
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
            <Route path="/signup/users" render={() => <SignupAsUser getUser={(user) => this.getUserData(user)} />} />
            <Route path="/signup/vendors" render={() =>  <SignupAsVendor getUser={(user) => this.getUserData(user)}/> } />
            <Route path="/login" render={() => <Login getUser={(user) => this.getUserData(user)} />} />
            <Route path="/user/:id/dashboard" /> 
            <Route path="/vendor/:id/dashboard" />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
