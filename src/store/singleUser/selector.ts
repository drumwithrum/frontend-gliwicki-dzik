import Store from 'types/store/SingleUserStore';

export const isFetching = (state: Store) => state.singleUser.isFetching;
export const singleUser = (state: Store) => state.singleUser.data;
export const error = (state: Store) => state.singleUser.error;
