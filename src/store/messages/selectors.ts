import Store from 'types/store/MessagesStore';
import Auth from 'utils/auth';
import { createSelector } from 'reselect';

export const isFetching = (state: Store) => state.messages.isFetching;

export const getMessages = (state: Store) => state.messages.currentThread
  .sort((a, b) => {
    return new Date(a.dateOfSent).getTime() - new Date(b.dateOfSent).getTime();
  })
  .map((item) => {
    const isMessageSentByUser = `${item.senderId}` === Auth.userId;
    return {
      sent: isMessageSentByUser,
      text: item.content,
    };
  });

export const getContactedUsers = (state: Store) => state.messages.contactedUsers
  .sort((a, b) => {
    return new Date(b.dateOfSent).getTime() - new Date(a.dateOfSent).getTime();
  });
