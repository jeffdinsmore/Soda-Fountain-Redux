import selectSodaReducer from '../../reducers/select-soda-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectSodaReducer', () => {

  let action;
  [{
    name: "Pepsi", brand: "Pepsi", sugarContent: "55", pints: 123, price: "4", id:"1" 
  }]
  const currentState = {
    1: {
      name: "Pepsi",
      brand: "Pepsi",
      sugarContent: "49",
      pints: 123,
      price: "3.49",
      id:"1"
    },
    2: {
      name: "Dr. Pepper",
      brand: "Pepsi",
      sugarContent: "44",
      pints: 122,
      price: "3.49",
      id:"2"
    }
  }

  const sodaData = {
    name: "Pepsi",
    brand: "Pepsi",
    sugarContent: "49",
    pints: 123,
    price: "3.49",
    id:"1" };

  test('Should return default state if no action type is recognized', () => {
    expect(selectSodaReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully update selected soda', () => {
    const { name, brand, sugarContent, pints, price, id } = sodaData;
    action = {
      type: c.SELECT_SODA,
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
    };
    expect(selectSodaReducer({}, action)).toEqual({
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
    });
  });

  test('Should successfully update selected soda to null when unselecting', () => {
    action = {
      type: c.UNSELECT_SODA,
    };
    expect(selectSodaReducer({}, action)).toEqual(null);
  });
});