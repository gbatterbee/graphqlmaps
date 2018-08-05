import addressSearch from '../utils/addressSearch';
import properties from '../utils/properties';

/* eslint-disable no-undef */

test('returns filtered addresses when addresses contain filter', () => {
  const filteredArray = [
    {
      address: '.1 address',
      id: '1',
      location: {
        lat: '51.608049',
        long: '-0.1096416',
      },
    },
  ];

  const result = addressSearch({ properties, filter: '.1' });
  expect(result).toEqual(filteredArray);
});

test('returns empty array when addresses do not contain filter', () => {
  const filteredArray = [];

  const result = addressSearch({ properties, filter: '.1hdhdh' });
  expect(result).toEqual(filteredArray);
});

test('returns all addresses when filter is empty', () => {
  const result = addressSearch({ properties, filter: '' });
  expect(result).toEqual(properties);
});

test('returns all addresses when filter is null', () => {
  const result = addressSearch({ properties, filter: null });
  expect(result).toEqual(properties);
});

test('returns all addresses when filter is undefined', () => {
  const result = addressSearch({ properties, filter: undefined });
  expect(result).toEqual(properties);
});

test('returns filtered addresses when filter is 0', () => {
  const filteredArray = [
    {
      address: '10 address',
      id: '3',
      location: {
        lat: '54.9439441',
        long: '-3.9222086',
      },
    },
  ];

  const result = addressSearch({ properties, filter: '0' });
  expect(result).toEqual(filteredArray);
});
/* eslint-enable no-undef */
