import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('soda fountain actions', () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: c.DELETE_SODA,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addSoda should create ADD_SODA action', () => {
    expect(actions.addSoda({name: 'Dr. Pepper', brand: 'Pepsi', sugarContent: '44', pints: '126', price: '2.49', id: 1})).toEqual({
      type: c.ADD_SODA,
      name: 'Dr. Pepper',
      brand: 'Pepsi',
      sugarContent: '44',
      pints: '126',
      price: '2.49',
      id: 1
    });
  });
});