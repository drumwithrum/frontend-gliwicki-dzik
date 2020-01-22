import StartingPage from './reducer';
import types from './types';

describe('StartingPage view reducer', () => {
  it('should set state', () => {
    const reducer = StartingPage({ test: true }, { type: 'TEST' });
    expect(reducer).toEqual({ test: true });
  });

  it('should handle default action', () => {
    const reducer = StartingPage(undefined, { type: 'TEST' });
    expect(reducer).toEqual({ examples: [] });
  });

  it('should handle EXAMPLE_TYPE action', () => {
    const action = { type: types.EXAMPLE_TYPE };
    const reducer = StartingPage(undefined, action);
    expect(reducer).toEqual({ examples: ['example'] });
  });
});
