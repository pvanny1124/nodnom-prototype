import React from "react"
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
const _ = require("lodash");



// ----------------------------------- SECTION 1 -------------------------------
const MapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: '70vh', width: '100%' }} />,
        containerElement: <div style={{ height: '70vh' }} />,
        mapElement: <div style={{ height: '100%', width: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('rest', 'resID', ''),
    withState('places', 'updatePlaces', ''),
    withState('center', '', ''),
    withState('selectedPlace', 'updateSelectedPlace', null),
    withHandlers((props) => {
            //these two variables are used to prevent gmaps from re rendering the place marks.
            let num = 1;
            let foodType;

            // everything below here are functions used by gmaps to pull info on what to display.
            // to use a function, you use porps."name of function" in the return section of recompose.
            const refs = {
                map: undefined,
                searchBox: undefined,
            }

            return {
                onMapMounted: () => (ref) => {
                  refs.map = ref
                },
                onSearchBoxMounted: () => (ref) => {
                  refs.searchBox = ref;
                },
                onBoundsChanged: () => () => {
                  this.setState({
                    bounds: refs.map.getBounds(),
                    center: refs.map.getCenter(),
                  })
                },


                onPlacesChanged: () => () => {
                  const places = refs.searchBox.getPlaces();
                  const bounds = new window.google.maps.LatLngBounds();

                  places.forEach(place => {
                      if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport)
                      } else {
                        bounds.extend(place.geometry.location)
                      }
                  });
                  const nextMarkers = places.map(place => ({
                      position: place.geometry.location,
                      placeId: place
                    }));
                    console.log(nextMarkers.position);
                  _.get(nextMarkers, '0.position', refs.map.getCenter());
                  refs.map.fitBounds(bounds);
                },

                fetchPlaces: ({ updatePlaces }) => () => {
                    // let places;
                    const service = new window.google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                    const request = {
                      location: refs.map.getCenter(),
                      radius: '400',
                      keyword: props.food,
                      name: props.food,
                      type: 'restaurant',
                    };
                service.nearbySearch(request, (results, status) => {
                    // I made a basic if statement to prevent the places from getting updated after moving around
                    // if you want to have the places update live, just remove everything from line 86 - 93 except for "updatePlaces(results);"
                    if(foodType !== props.food){
                      foodType = props.food;
                      num = 1;
                    }
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && num === 1 ) {
                        num++;
                        updatePlaces(results);
                    }
                })
              },

            onToggleOpen: ({ updateSelectedPlace }) => key => {
                updateSelectedPlace(key);
            }

        }
    }),



// -------------This is where most of your changes are going to be made for gmaps.
//--------------You are rendering everything from here. you can also make functions like "checkIfOpen"
//--------------If you want to make a function that sets a state, please check out the "updateMarker" function in line 188.
//-------------- That function is called from within the recompose section using "props.updateMarker" line 146
)((props) => {
  let checkIfOpen = (val) => {
      console.log(val);
      if(val === true){
        let response = "Currently Open"
        return response
      }else{
        let response = "Currently Closed"
        return response
      }
   }

  //Checks if there is food being sent into the component to render places or not.
  if(props.food){
    return (
      <div>
      {/* // Displays Gmap with specific user location and restaurant based on randomly selected food. */}
        <GoogleMap
              onTilesLoaded={props.fetchPlaces}
              ref={props.onMapMounted}
              defaultZoom={15}
              defaultCenter={{ lat: props.lat, lng: props.lng }} >

            {/* //this is loop that finds markers based on the type of food used. */}

            {props.places && props.places.map((place, i) =>
                <Marker
                  onClick={(event) => {props.onToggleOpen(i)}}
                  key={i}
                  position={{ lat: place.geometry.location.lat(),
                              lng: place.geometry.location.lng() }} >

               {props.selectedPlace === i && <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>
                      {/* //here the information of the place is displayed
                          // I recomend you console.log "props.places[props.selectedPlace]" to see your options on what to display */
                      }
                        {props.places[props.selectedPlace].name}
                        <br/>
                        {props.places[props.selectedPlace].vicinity}
                        <br/>
                        {checkIfOpen(props.places[props.selectedPlace].opening_hours.open_now)}
                        {console.log(props.places[props.selectedPlace])}
                        <br/>
                        {props.updateMarker(props.places[props.selectedPlace].vicinity, props.places[props.selectedPlace].geometry.location.lat(props.places[props.selectedPlace].vicinity), props.places[props.selectedPlace].geometry.location.lng(props.places[props.selectedPlace].vicinity),props.places[props.selectedPlace].name)}
                      </div>
                  </InfoWindow>
               }
                </Marker>

            )}
          </GoogleMap>
          </div>
    )
  }else{
      return(
          <div>
              <GoogleMap
                  onTilesLoaded={props.fetchPlaces}
                  ref={props.onMapMounted}
                  defaultZoom={15}
                  defaultCenter={{ lat: props.lat, lng: props.lng }} >
              </GoogleMap>
          </div>
        )
}
})

export default MapComponent;
