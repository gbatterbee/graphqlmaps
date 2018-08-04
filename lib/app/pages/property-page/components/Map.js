import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(props =>
  (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      <Marker position={{ lat: props.lat, lng: props.long }} />
    </GoogleMap>),
);

export default Map;
