import Store from 'types/store/UsersStore';

export const isFetching = (state: Store) => state.users.isFetching;
export const users = (state: Store) => state.users.data;
export const error = (state: Store) => state.users.error;
