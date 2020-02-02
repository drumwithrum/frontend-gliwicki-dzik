import types from './types';

export const updateTableColumns = (columns: any) => ({
  type: types.UPDATE_TABLE_COLUMNS,
  payload: columns,
});

export const addTrainingToTable = (trainingId: string) => ({
  type: types.ADD_TRAINING_TO_TABLE,
  payload: `${trainingId}@${Math.random()}`,
});
