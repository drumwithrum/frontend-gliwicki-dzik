import Store from 'types/store/ExcercisesStore';
import Auth from 'utils/auth';
import { createSelector } from 'reselect';

export const isFetching = (state: Store) => state.excercises.isFetching;

export const getExcercises =  (state: Store) => state.excercises.excercises;
