import Store from 'types/store/UserStore';
import { createSelector } from 'reselect';

export const isFetching = (state: Store) => state.user.username;
