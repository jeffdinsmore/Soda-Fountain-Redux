import formVisibleReducer from './form-visible-reducer';
import sodaListReducer from './soda-list-reducer';
import { combineReducers } from 'redux';
import editingReducer from './editing-reducer';
import selectSodaReducer from './select-soda-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterSodaList: sodaListReducer,
  editing: editingReducer,
  selectedSoda: selectSodaReducer
});

export default rootReducer;