import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import Vendors from './vendor_component';
import mapwmarkers from '../../images/mapwmarkers.png';

//list view that loads vendor_component
//load data here, pass image and props to vendor component
//TODO: Map components ARRAY

//-------TO DO'S FOR LATER
//TODO: render nav bar? or see if there's a way to render nav bar on all pages
//TODO: render search bar
//TODO: If not logged in, redirect to landing, otherwise load home page
//TODO: when refactoring the page for screen size, render the small screen with map component and render the large screen with list

export default class Home extends Component {
  render() {
    var vendor_list = 5;
    return (
      <div>
        <div className="row">
          <div className="container">
            <div className="section">
            <div className="col l12">
              <div className="col l6">
                <Vendors/>
                <Vendors/>
                <Vendors/>
                <Vendors/>
              </div>
              <div className="l6">
                <img className="responsive-img" style={{width: '30%', height: 'auto', paddingLeft: '20px'}} src={mapwmarkers}/>
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
