const addressSearch = ({ properties, filter }) =>
  properties.filter(p => filter === undefined || filter === null || p.address.indexOf(filter) > -1);

export default addressSearch;
