import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../../../components';

const SortKey = ({ sortKey, updateSortKey }) =>
  (
    <div className="sort-key">
      <p>
        Sort by <Select options={['address', 'id']} onChange={updateSortKey} value={sortKey} />
      </p>
    </div>
  );

export default SortKey;

SortKey.propTypes = {
  sortKey: PropTypes.oneOf(['address', 'id']).isRequired,
  updateSortKey: PropTypes.func.isRequired,
};
