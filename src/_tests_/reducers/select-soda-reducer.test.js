import selectSodaReducer from '../../reducers/select-soda-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectSodaReducer', () => {

  let action;
  [{name: "Main Bar 1", brand: "Quality Booch", sugarContent: "Persimmon", pints: 123, price: "9", id:"1" }]
  const currentState = {
    1: {name: "Main Bar 1", brand: "Quality Booch", sugarContent: "Persimmon", pints: 123, price: "9", id:"1" },
    2: {name: "Main Bar 2", brand: "Quality Booch", sugarContent: "Lemon", pints: 123, price: "9", id:"2" }
  }

  const sodaData = {name: "Main Bar 1", brand: "Quality Booch", sugarContent: "Persimmon", pints: 123, price: "9", id:"1" };

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
    // const { name, brand, flavor, price, quantity, id } = sodaData;
    action = {
      type: c.UNSELECT_SODA,
      // name: name,
      // brand: brand,
      // flavor: flavor,
      // price: price,
      // quantity: quantity,
      // id: id
    };
    expect(selectSodaReducer({}, action)).toEqual(null);
  });
});