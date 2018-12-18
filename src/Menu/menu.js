import React, { Component } from 'react';
import Rating from 'react-rating';
import '../css/general.css';
import '../css/menu.css';
import Header from './header';
import Card from './card';
import Map from '../Home/google_maps_component.js';
let menu =
[
    {
      "menuId": 1,
      "itemId": 1,
      "category": "Rice Plates",
      "itemName": "CHICKEN Over Rice",
      "description": "Marinated grilled chicken over fragrant turmeric rice with salad and white sauce ",
    },  {
      "menuId": 1,
      "itemId": 2,
      "category": "Rice Plates",
      "itemName": "LAMB Over Rice",
      "description": "Marinated grilled lamb over fragrant turmeric rice with salad and white sauce ",
    }, {
      "menuId": 1,
      "itemId": 3,
      "category": "Bowls",
      "itemName": "Skirt steak bowl",
      "description": "blah blah blah ",
      "image": "http://www.mightysweet.com/mesohungry/wp-content/uploads/2010/11/02-Lamb-and-Chicken-Combo-Platter-11-Eleven-Express-Halal-Food-Truck.jpg"
    }, {
      "menuId": 1,
      "itemId": 4,
      "category": "Bowls",
      "itemName": " Vegan bowl",
      "description": "blah blah blah",
    }
];

export default class Menu extends Component {
  constructor(props){
      super(props);
    }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12" >
           <Header/>
           {/*menu cards*/}
           <div className="col s12">
            <div className="col s5"><Card menu={menu}/></div>
            <div className="col s5"><Card menu={menu}/></div>
            <div className="col s2"><Map lat= {5.92} lng= {6.88}/></div>
           </div>
           {/*--*/}

          </div>
        </div>
      </div>
    )
  }
}
