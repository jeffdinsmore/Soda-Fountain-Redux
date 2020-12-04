import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
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

// const newMasterSodaList = this.state.masterSodaList.concat(newSoda);