import * as c from './../actions/ActionTypes';

const defaultState = {
  "1": {
    name: "Dr. Pepper",
    brand: "Pepsi",
    sugarContent: "52",
    pints: "17",
    price: "2.29",
    id: "1"
  },
  "2": {
    name: "Pepsi",
    brand: "Pepsi",
    sugarContent: "48",
    pints: "3",
    price: "2.29",
    id: "2"
  },
  "3": {
    name: "Mt. Dew",
    brand: "Pepsi",
    sugarContent: "64",
    pints: "124",
    price: "2.29",
    id: "3"
  },
  "4": {
    name: "Diet Pepsi",
    brand: "Pepsi",
    sugarContent: "0",
    pints: "108",
    price: "2.29",
    id: "4"
  },
  "5": {
    name: "Coke",
    brand: "Coca-Cola",
    sugarContent: "56",
    pints: "22",
    price: "2.39",
    id: "5"
  },
  "6": {
    name: "Sprite",
    brand: "Coca-Cola",
    sugarContent: "44",
    pints: "9",
    price: "2.39",
    id: "6"
  },
  "7": {
    name: "Coke Zero",
    brand: "Coca-Cola",
    sugarContent: "0",
    pints: "88",
    price: "2.39",
    id: "7"
  },
  "8": {
    name: "Fanta",
    brand: "Coca-Cola",
    sugarContent: "59",
    pints: "108",
    price: "2.39",
    id: "8"
  }
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