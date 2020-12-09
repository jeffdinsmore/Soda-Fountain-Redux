import * as c from '../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.EDITING:
      return !state;
    default:
      return state;
  };
}

// export default (state = false, action) => {
//   switch (action.type) {
//   case c.EDITING:
//     return !state;
//   case c.EDITING_SET_FALSE:
//     return false;
//   default:
//     return state;
//   }
// };