import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, sugarContent, pints, price, id } = action;
  switch (action.type) {
  case c.SELECT_SODA:
    return {
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
      };
  case c.UNSELECT_SODA:
    return null;
  default:
    return state;
  }
};