import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Property, SortKey, SortOrder } from '.';

const Properties = ({ viewer, sortKey, sortOrder, updateSortKey, updateSortOrder }) =>
  (
    <div className="properties">
      <SortKey sortKey={sortKey} updateSortKey={updateSortKey} />
      <SortOrder sortOrder={sortOrder} updateSortOrder={updateSortOrder} />
      <ul className="no-bullets">
        {viewer.properties.map((p, i) => <Property key={i} property={p} />)}
      </ul>
    </div>
  );

export default Relay.createContainer(Properties, {
  initialVariables: {
    sortKey: null,
    sortOrder: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        properties(sortKey: $sortKey, sortOrder: $sortOrder) {
          ${Property.getFragment('property')}
        }
      }
    `,
  },
});

Properties.propTypes = {
  sortKey: PropTypes.oneOf(['address', 'id']).isRequired,
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  updateSortKey: PropTypes.func.isRequired,
  updateSortOrder: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};
