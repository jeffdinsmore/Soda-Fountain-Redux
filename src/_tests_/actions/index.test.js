import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('soda fountain actions', () => {
  it('deleteSoda should create DELETE_SODA action', () => {
    expect(actions.deleteSoda(1)).toEqual({
      type: c.DELETE_SODA,
      id: 1
    });
  });
});