import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router';
import Login from './login'
import Signup from './signup'
import './landingpage.css';
import NavBar from './Shared-Components/NavBar';


class LandingPage extends Component {
    render(){
        return (
            <div className="landing-page">
              <NavBar/>
                <div className="welcome">
                    <div className="heading">Nobnom</div>
                    <div className="heading-2">For food cart lovers</div>
                    <div className="btn-container">
                            <div className="form-group">
                                <Link to="/signup" className="btn btn-dark">Sign Up</Link>
                            </div>
                            <div className="form-group">
                                <Link to="/login" className="btn btn-dark">Login</Link>
                            </div>
                    </div>
                </div>


                <div className="midas-about">
                        <p>stuff</p>
                </div>
                <div className="team-about">

                </div>
                <div className="footer">

                </div>


            </div>

        );
    }
}

export default LandingPage;
