import sodaListReducer from '../../reducers/soda-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('sodaListReducer', () => {

  const currentState = {
    1: {
      name: 'Dr. Pepper',
      brand: 'Pepsi',
      sugarContent: '44',
      pints: '126',
      price: '2.49',
      id: 1
    },
    2: {
      name: 'Mt. Dew',
      brand: 'Pepsi',
      sugarContent: '54',
      pints: '126',
      price: '2.49',
      id: 2
    }
  };

  let action;
  const sodaData = {
    name: 'Dr. Pepper',
    brand: 'Pepsi',
    sugarContent: '44',
    pints: '126',
    price: '2.49',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(sodaListReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new soda data to masterSodaList', () => {
    const { name, brand, sugarContent, pints, price, id } = sodaData;
    action = {
      type: c.ADD_SODA,
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
    };
    expect(sodaListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        sugarContent: sugarContent,
        pints: pints,
        price: price,
        id: id
      }
    });
  });

  test('Should successfully delete a soda', () => {
    action = {
      type: c.DELETE_SODA,
      id: 1
    };
    expect(sodaListReducer(currentState, action)).toEqual({
      2: {
        name: 'Mt. Dew',
        brand: 'Pepsi',
        sugarContent: '54',
        pints: '126',
        price: '2.49',
        id: 2
      }
    });
  });

  test('Should successfully subtract a pint from soda', () => {
    action = {
      type: c.
    }
  })
});