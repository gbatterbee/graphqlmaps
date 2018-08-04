// import { sortBy } from 'lodash';

const simpleSort = ({ properties, sortKey = 'address', sortOrder = 'asc' }) => {
  const orderFactor = sortOrder === 'asc' ? 1 : -1;

  return properties
    .filter(() => true)
    .sort((first, second) =>
    first[sortKey].localeCompare(second[sortKey], undefined, { numeric: true }) * orderFactor);
};

export default simpleSort;
