import { createSelector } from 'reselect';

export const getExamples = (state: any) => state.StartingPage.examples;
export const getFilteredExamples = createSelector(
  getExamples,
  examples => examples.filter((example: string) => example !== 'example'),
);
