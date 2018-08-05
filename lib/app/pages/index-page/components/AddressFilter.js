import React from 'react';
import PropTypes from 'prop-types';

const AddressFilter = ({ filter, updateFilter }) =>
  (
    <div className="address-filter">
      <p>
        Address filter <input type="text" value={filter} onChange={e => updateFilter(e.target.value)} />
      </p>
    </div>
  );

export default AddressFilter;

AddressFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
