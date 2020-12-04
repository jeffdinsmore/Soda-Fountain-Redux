import * as c from './../actions/ActionTypes';

export const deleteSoda = id => ({
  type: c.DELETE_SODA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addSoda = (soda) => {
  const { name, brand, sugarContent, pints, price, id } = soda;
  return {
    type: c.ADD_SODA,
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
  }
}