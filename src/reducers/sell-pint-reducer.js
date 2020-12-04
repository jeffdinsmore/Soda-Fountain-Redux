import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, sugarContent, pints, price, id } = action;
  switch (action.type) {
case c.SELL_PINT:
  console.log("action2: ", action);
  return {
    pints: action.pints -1, 
    ...state
  };
  default:
      return state;
  }
};