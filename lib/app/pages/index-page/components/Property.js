import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Link } from '.';

export function PropertyComponent({ property }) {
  return (
    <li className="property">
      <Link to={`/${property.id}`}>
        <b>address:</b> {property.address}
      </Link>
    </li>
  );
}

export default Relay.createContainer(PropertyComponent, {
  fragments: {
    property: () => Relay.QL`
      fragment on Property {
        address
        id
      }
    `,
  },
});

PropertyComponent.propTypes = { property: PropTypes.object.isRequired };
