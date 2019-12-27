import * as actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create ACTION as expected', () => {
    const action = actions.exampleAction();
    const expectedAction = {
      type: types.EXAMPLE_TYPE,
    };
    expect(action).toEqual(expectedAction);
  });
});
