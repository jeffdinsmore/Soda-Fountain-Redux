import sodaListReducer from '../../reducers/soda-list-reducer';
// import * as c from '../../actions/ActionTypes';

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
  
});