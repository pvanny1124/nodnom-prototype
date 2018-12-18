import React, { Component } from 'react';
import MapComponent from './map_api.js';
//------------------------------------ SECTION 2 ----------------------------------------------
// This is the Normal section of React JS
// To communicate between Section 1 && 2 all you have to do is make a function like "updateMaker"
// and pass it in as a prop when you call it in line 215.


export default class GoogleMapComponent extends React.PureComponent {
    //Constructor makes the states based on what comes in when you call the component.

    constructor(props) {
        super(props);
        console.log("this.props.food: "+JSON.stringify(this.props.food));
        this.state = {
            randomFoodName: props.food,
            addressName: props.address,
            lat: props.lat,
            lng: props.lng,
            storeLocation: props.storeL,
            storeName: props.storeN,
            storeLatitude: props.storeLat,
            storeLongitude: props.storeLng,
            processing: false,

        };
        this.renderMaps = this.renderMaps.bind(this);
    }
    //function that can get the info from section 1.
    updateMarker = (storeL, storeLat , storeLng , storeN) => {
      this.setState({ storeLocation: storeL ,storeName: storeN, storeLatitude: storeLat, storeLongitude: storeLng });
    }

    //function thats called in the render method below
    // i used a function because its cleaner honestly.
    // also , you can see that its calling another commonent called "MapComponent"
    // Thats basically how recompose works, it lets you change the info thats going into the map on the fly
    // its still kinda weird but still, it works ! lol
    renderMaps() {
      console.log("rendering map with food")
        return (
            <div className="card">
                <MapComponent food={this.state.randomFoodName}
                address={this.state.addressName}
                lng={this.state.lng}
                lat={this.state.lat}
                key={this.state.randomFoodName}
                updateMarker = {this.updateMarker}
                />
            </div>

        );
      }
      renderMapsNoFood(){
        return (
            <div className="card">
                <MapComponent
                address={this.state.addressName}
                lng={this.state.lng}
                lat={this.state.lat}
                />
            </div>
        );
      }
    render() {

        return (
          <div>
              {!!this.props.food
                ? (this.renderMaps(this.props.food))
                : (this.renderMapsNoFood())
              }
          </div>
        )
    }
}
