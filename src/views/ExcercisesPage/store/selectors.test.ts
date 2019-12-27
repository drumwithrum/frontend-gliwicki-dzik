import { getExamples } from './selectors';

describe('StartingPage view selectors', () => {
  it('should return examples', () => {
    const state = {
      StartingPage: { examples: [1, 2, 3] },
    };
    const value = getExamples(state);
    expect(value).toEqual([1, 2, 3]);
  });
});
