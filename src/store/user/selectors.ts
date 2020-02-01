import Store from 'types/store/UserStore';
import { createSelector } from 'reselect';

export const isFetching = (state: Store) => state.user.username;

export const getUsername = (state: Store) => state.user.isFetching;

export const isLoginFailure = (state: Store) => state.user.loginFailure;

export const isRegisterFailure = (state: Store) => state.user.registerFailure;

export const getCurrentUser = (state: Store) => state.user.currentUser;
