import React, { Component } from  'react';
import { BrowserRouter as Router, Link } from 'react-router';

class Client extends Component {
    constructor(props){
        super(props);
        this.state = {
    
        }
    }


    render(){    

        //get user location at start
        fetch("https://ipinfo.io/json").then((response) => {
            return response.json()
        })
        .then((data) => {
            var location = data.loc.split(",");
            var lat = location[0];
            var lng = location[1];
            
        })

        return (
            <div>     
            <p>{"stuff"}</p>
            </div>
            
        );
    }
}

function showPosition(position) {
    var coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    return coords
}

function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


export default Client;