import types from './types';

describe('StartingPage view action types', () => {
  it('should return expected action types', () => {
    expect(types).toMatchSnapshot();
  });
});
