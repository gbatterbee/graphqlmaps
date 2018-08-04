import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, value, onChange }) =>
(
  <select
    onChange={o => onChange(o.target.value)}
    value={value}
  >
    {options.map(o => <option key={o}>{o}</option>)}
  </select>
);
export default Select;

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
