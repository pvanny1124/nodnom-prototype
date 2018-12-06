import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {browserHistory} from 'react-router';
import Login from './login'
import Signup from './signup'
import NavBar from './Shared-Components/NavBar';
import Sliders from './LandingPage/Sliders';
import Howitworks from './LandingPage/howitworks';
import Footer from './Shared-Components/footer';


class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0
        }
    }

    componentDidMount() {
        let self = this;
        if ("geolocation" in navigator) {
            // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // for when getting location is a success
                console.log('latitude', position.coords.latitude, 
                            'longitude', position.coords.longitude);

                //Store lat and long in state
                self.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })

                //retrieve nearby carts
                    //retrieve 
                    //need to display google map

            },
            function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving location', error_message)
            }  
            );
        } else {
        // geolocation is not supported
        // get your location some other way
        console.log('geolocation is not enabled on this browser')
        }
    }

    render(){
            
        return (
            <div className="landing-page">
              <NavBar/>
                <div className="welcome">
                  <Sliders />
                  <Howitworks/>
                  <Footer/>
                </div>
            </div>

        );
    }
}

export default LandingPage;
