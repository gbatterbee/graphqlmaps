import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Relay from 'react-relay';
import { Properties } from './components';

class IndexPage extends Component {
  updateSortKey(sortKey) {
    const { relay } = this.props;
    relay.setVariables(Object.assign({}, relay.variables, { sortKey }));
  }

  updateSortOrder(sortOrder) {
    const { relay } = this.props;
    relay.setVariables(Object.assign({}, relay.variables, { sortOrder }));
  }

  updateFilter(filter) {
    const { relay } = this.props;
    relay.setVariables(Object.assign({}, relay.variables, { filter }));
  }

  render() {
    const { relay, viewer } = this.props;
    return (
      <div>
        <Properties
          filter={relay.variables.filter}
          updateFilter={filter => this.updateFilter(filter)}
          sortKey={relay.variables.sortKey}
          updateSortKey={sortKey => this.updateSortKey(sortKey)}
          sortOrder={relay.variables.sortOrder}
          updateSortOrder={sortOrder => this.updateSortOrder(sortOrder)}
          viewer={viewer}
        />
      </div>
    );
  }
}

export default Relay.createContainer(IndexPage, {
  initialVariables: {
    sortKey: 'address',
    sortOrder: 'asc',
    filter: '',
  },
  fragments: {
    viewer: ({ sortKey, sortOrder, filter }) => Relay.QL`
      fragment on Viewer {
          ${Properties.getFragment('viewer', { sortKey, sortOrder, filter })}
      }
    `,
  },
});

IndexPage.propTypes = {
  relay: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
};
