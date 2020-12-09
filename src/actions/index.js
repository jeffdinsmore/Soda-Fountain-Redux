import * as c from './../actions/ActionTypes';

export const deleteSoda = id => ({
  type: c.DELETE_SODA,
  id
});

export const sellPint = (soda) => {
  const { name, brand, sugarContent, pints, price, id } = soda;
  return {
    type: c.SELL_PINT,
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints -1,
      price: price,
      id: id
  }
}
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addSoda = (newSoda) => {
  const { name, brand, sugarContent, pints, price, id } = newSoda;
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

export const editing = () => {
  return {
    type: c.EDITING
  }
}

export const editingSetFalse = () => {
  return {
    type: c.EDITING_SET_FALSE
  }
}

export const selectSoda = (soda) => {
  const { name, brand, sugarContent, pints, price, id } = soda;
  return {
    type: c.SELECT_SODA,
      name: name,
      brand: brand,
      sugarContent: sugarContent,
      pints: pints,
      price: price,
      id: id
  }
}

export const unSelectedSoda = () => {
  return {
    type: c.UNSELECT_SODA,
  }
}