import * as c from './../actions/ActionTypes';

export const deleteSoda = id => ({
  type: c.DELETE_SODA,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});