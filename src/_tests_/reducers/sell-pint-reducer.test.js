import sellPintReducer from '../../reducers/sell-pint-reducer';
import * as c from '../../actions/ActionTypes';

describe('sellPintReducer', () => {

  let action;
  const sodaData = {
    name: 'Dr. Pepper',
    brand: 'Pepsi',
    sugarContent: '44',
    pints: 126,
    price: '2.49',
    id: 1
  };


  test('Should successfully subtract a pint from soda', () => {
    action = {
      type: c.SELL_PINT,
      id: 1
    };
    expect(sellPintReducer(sodaData, action)).toEqual({
      sodaData: {
        name: 'Dr. Pepper',
        brand: 'Pepsi',
        sugarContent: '44',
        pints: 125,
        price: '2.49',
        id: 1
      }
    
    });
  });
});