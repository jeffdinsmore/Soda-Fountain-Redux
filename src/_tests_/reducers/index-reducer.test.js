import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import sodaListReducer from '../../reducers/soda-list-reducer';
import * as c from '../../actions/ActionTypes';
import editingReducer from '../../reducers/editing-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      editing: false,
      masterSodaList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of sodaListReducer matches root reducer', () => {
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_SODA action works for sodaListReducer and root reducer', () => {
    const action = {
      type: c.ADD_SODA,
      name: 'Dr. Pepper',
      brand: 'Pepsi',
      sugarContent: '44',
      pints: '126',
      price: '2.49',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterSodaList).toEqual(sodaListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that default editing state works for editingReducer and rootReducer', () => {
    const action = {
      type: c.EDITING
    };
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(false, action));
  });

  test('Check toggle editing state to true with rootReducer', () => {
    const action = {
      type: c.EDITING
    };
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(true, action ));
  });
});