import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router';
import Login from './login'
import Signup from './signup'
import NavBar from './Shared-Components/NavBar';
import LandingOne from './LandingPage/LandingOne';
import Howitworks from './LandingPage/howitworks';
import Footer from './Shared-Components/footer';


class LandingPage extends Component {
    render(){
        return (
            <div className="landing-page">
                <div className="welcome">
                  <LandingOne/>
                  <Howitworks/>
                  <Footer/>
                </div>
            </div>

        );
    }
}

export default LandingPage;
