import React from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Property, SortKey, SortOrder, AddressFilter } from '.';

const Properties =
({ viewer, sortKey, sortOrder, updateSortKey, updateSortOrder, filter, updateFilter }) => (
  <div className="properties">
    <AddressFilter filter={filter} updateFilter={updateFilter} />
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
    filter: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        properties(sortKey: $sortKey, sortOrder: $sortOrder, filter: $filter) {
          ${Property.getFragment('property')}
        }
      }
    `,
  },
});

Properties.propTypes = {
  filter: PropTypes.string,
  sortKey: PropTypes.oneOf(['address', 'id']).isRequired,
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  updateSortKey: PropTypes.func.isRequired,
  updateSortOrder: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};

Properties.defaultProps = {
  filter: '',
};
