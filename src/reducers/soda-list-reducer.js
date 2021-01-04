import * as c from './../actions/ActionTypes';

const defaultState = {
  "1": {
    name: "Dr. Pepper",
    brand: "Pepsi",
    sugarContent: "59",
    pints: "17",
    price: "2.29",
    id: "1"},
  "2": {
    name: "Pepsi",
    brand: "Pepsi",
    sugarContent: "55",
    pints: "3",
    price: "2.29",
    id: "2"},
  "3": {
    name: "Mt. Dew",
    brand: "Pepsi",
    sugarContent: "64",
    pints: "124",
    price: "2.29",
    id: "3"},
  "4": {
    name: "Diet Pepsi",
    brand: "Pepsi",
    sugarContent: "0",
    pints: "108",
    price: "2.29",
    id: "4"}
}

export default (state = defaultState, action) => {
  const { name, brand, sugarContent, pints, price, id } = action;
  switch (action.type) {
    case c.ADD_SODA:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          sugarContent: sugarContent,
          pints: pints,
          price: price,
          id: id
        }
      });
    case c.DELETE_SODA:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};