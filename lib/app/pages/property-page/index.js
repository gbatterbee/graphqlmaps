import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Map } from './components';

export function PropertyPage({ relay, viewer }) {
  const property = viewer.property;
  if (!property) {
    return (
      <div>
        <h3>this property ({relay.variables.propertyID}) was not found</h3>
      </div>
    );
  }

  const { address, location } = property;
  return (
    <div>
      <h3>property: {address}</h3>
      <Map
        lat={location.lat}
        long={location.long}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default Relay.createContainer(PropertyPage, {
  initialVariables: {
    propertyID: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        property(propertyID: $propertyID) {
          address
          location{lat,long}
        }
      }
    `,
  },
});

PropertyPage.propTypes = {
  relay: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
};
