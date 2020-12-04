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
      console.log("state:   ", state);
    // case c.SELL_PINT:
    //   return 
    //   const editedMasterSodaList = this.state.masterSodaList
    //   editedMasterSodaList.map((soda) => {
    //     if(soda.id === id) {
    //       if (soda.pints <= 11 && soda.pints > 0) {
    //       soda.status = "Almost out of pints";
    //       soda.pints = soda.pints -1;
    //       } else if (soda.pints > 0) {
    //       soda.pints = soda.pints -1;
    //       } else {
    //       soda.pints = 0;
    //       soda.status = "Out of stock!"
    //       }
    //     }
    //   return soda;
    case c.DELETE_SODA:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

// const newMasterSodaList = this.state.masterSodaList.concat(newSoda);