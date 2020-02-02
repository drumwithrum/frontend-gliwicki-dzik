import Store from 'types/store/UsersRecordsStore';

export const isFetching = (state: Store) => state.usersRecords.isFetching;
export const usersRecords = (state: Store) => state.usersRecords.data;
export const error = (state: Store) => state.usersRecords.error;
