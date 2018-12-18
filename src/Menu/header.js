import React, { Component } from 'react';
import Rating from 'react-rating';
import '../css/menu.css';
import '../css/general.css';

const Header = (props) => {
    return (
      <div>
             <div className="row">
               <div className="col s12 m12 l12" >
                 <div className="relative">
                   <div className="absolute col s10" style={{paddingLeft: '50px'}}>
                     <i  className="material-icons back">arrow_back</i>
                     <p className="text text-header text-white">LITTLE EGYPT HALAL CART</p>
                     <div className="col s10 l10">
                       <div className="col s4 l3 padding-none">
                       <Rating
                         start={0}
                         stop={5}
                         step={1}
                         readonly={true}
                         initialRating={4}
                         emptySymbol={<i className="material-icons" style={{fontSize: '40px', color: "#D8D8D8"}}>star</i>}
                         fullSymbol={<i className="material-icons" style={{fontSize: '40px', color: "#FFCE02"}}>star</i>}
                         fraction={2}
                       />
                       </div>
                       <div className="col s3 l2 text text-white padding-none">(4 reviews)</div>
                       <div className="col s4 l3"><div className="button button-menu text text-white">EDIT PAGE</div></div>
                     </div>
                     <div className="card">
                      <div className="content">
                        <div>HOURS</div>
                        <div>Monday 9:00am - 12:00pm</div>
                        <div>Tuesday 9:00am - 12:00pm</div>
                        <div>Wednesday 9:00am - 12:00pm</div>
                        <div>Thursday 9:00am - 12:00pm</div>
                        <div>Friday 9:00am - 12:00pm</div>
                        <div>Saturday 9:00am - 12:00pm</div>
                        <div>Sunday 9:00am - 12:00pm</div>
                        <div className="divider"/>
                        <div>LOCATION</div>
                      </div>
                     </div>
                   </div>

                   <img className='image' src="http://www.mightysweet.com/mesohungry/wp-content/uploads/2010/11/02-Lamb-and-Chicken-Combo-Platter-11-Eleven-Express-Halal-Food-Truck.jpg"/>
                 </div>

               </div>
             </div>
           </div>
    )

}

export default Header;



// <div className="relative">
//   <div className="container">
//     <div className="absolute">
//       <i style={{color: 'white', fontSize: '60px'}} className="material-icons">arrow_back</i>
//       <p className="text">LITTLE EGYPT HALAL CART</p>
//       <div className="col s12 m4 l10">
//         <div className="col  l6">
//           <Rating
//             start={0}
//             stop={5}
//             step={1}
//             readonly={true}
//             initialRating={4}
//             emptySymbol={<i className="material-icons" style={{fontSize: '35px', color: "#D8D8D8"}}>star</i>}
//             fullSymbol={<i className="material-icons" style={{fontSize: '35px', color: "#FFCE02"}}>star</i>}
//             fraction={2}
//           />
//         </div>
//         <div className="col l1">(4 reviews)</div>
//         <div className="col l1">Edit profile</div>
//     </div>
//   </div>
// </div>
// </div>



// <div>
//        <div className="row">
//          <div className="col s12 m12 l12" >
//            <div style={styles.relative} >
//              <div className="container" style={styles.absolute}>
//                <i style={{color: 'white', fontSize: '60px'}} className="material-icons">arrow_back</i>
//                <p style={styles.text}>LITTLE EGYPT HALAL CART</p>
//                <div className="col s12 m4 l10">
//                  <div className="col  l6">
//                    <Rating
//                      start={0}
//                      stop={5}
//                      step={1}
//                      readonly={true}
//                      initialRating={4}
//                      emptySymbol={<i className="material-icons" style={{fontSize: '35px', color: "#D8D8D8"}}>star</i>}
//                      fullSymbol={<i className="material-icons" style={{fontSize: '35px', color: "#FFCE02"}}>star</i>}
//                      fraction={2}
//                    />
//                  </div>
//                  <div className="col l1">(4 reviews)</div>
//                  <div className="col l1" style={styles.button}>Edit profile</div>
//
//                </div>
//              </div>
//                <img className='image' src="http://www.mightysweet.com/mesohungry/wp-content/uploads/2010/11/02-Lamb-and-Chicken-Combo-Platter-11-Eleven-Express-Halal-Food-Truck.jpg"/>
//            </div>
//          </div>
//        </div>
//      </div>
//
