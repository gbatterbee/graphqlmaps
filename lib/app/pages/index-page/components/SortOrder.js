import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../../../components';

const SortOrder = ({ sortOrder, updateSortOrder }) =>
  (
    <div className="sort-order">
      <p>
        Order by <Select options={['asc', 'desc']} onChange={updateSortOrder} value={sortOrder} />
      </p>
    </div>
  );

export default SortOrder;

SortOrder.propTypes = {
  sortOrder: PropTypes.oneOf(['asc', 'desc']).isRequired,
  updateSortOrder: PropTypes.func.isRequired,
};

