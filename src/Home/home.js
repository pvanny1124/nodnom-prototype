import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import Vendors from './vendor_component';
//import mapwmarkers from '../../images/mapwmarkers.png';
import Maps from './google_maps_component.js';

//-------TO DO'S FOR LATER
//TODO: render search bar
//TODO: If not logged in, redirect to landing, otherwise load home page
//TODO: when refactoring the page for screen size, render the small screen with map component and render the large screen with list
let vendor =
[
  {
    "id": 1,
    "firstName": "tom",
    "lastName": "Brady",
    "vendorName": "2 guys Halal",
    "categories" :["halal", "vegan", "grill"],
    "username": "tombrady",
    "email": "tombrady@test.com",
    "password_hash": "12345",
    "country": "United States",
    "location": "600 6th Avenue",
    "createdAt": "date-object",
    "updatedAt": "date-object",
    "rating": 5,
    "lat": 45.4,
    "lng": 55.4
  },
  {
    "id": 2,
    "firstName": "bob",
    "lastName": "Brady",
    "vendorName": "little egypt",
    "categories" :["halal", "gyro", "vegetarian"],
    "username": "tombrady",
    "email": "tombrady@test.com",
    "password_hash": "12345",
    "country": "United States",
    "location": "600 6th Avenue",
    "createdAt": "date-object",
    "updatedAt": "date-object",
    "rating": 5,
    "lat": 85.4,
    "lng": 25.4
  }
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
    };
  }
   render() {

    var vendor_list = 5;
    return (
      <div>
        <div className="row">
          <div className="container">
            <div className="section">
            <div className="col l12">
              <div className="col l6">
              {vendor.map((vendors, index) => {
                return (<Vendors key={vendor.id} vendor={vendors} categories={vendor.categories}/>)
              })}

              </div>
              <div className="l6">
                <Maps
                food={vendor}
                  lat= {5.92}
                  lng= {6.88}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

//AIzaSyBtHDU8h0wlCgTNbfoQJTxp3st0xh8Flr0
//


//<img className="responsive-img hide-on-small-only" style={{width: '30%', height: 'auto', paddingLeft: '20px'}} src={mapwmarkers}/>
