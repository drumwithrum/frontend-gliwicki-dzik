import Auth from 'utils/auth';

class AuthEndpoints {
  public static BASE = 'auth';
  public static LOGIN = `${AuthEndpoints.BASE}/login`;
  public static REGISTER = `${AuthEndpoints.BASE}/register`;
}

class MessagesEndpoints {
  public static BASE = `${Auth.userId}/content`;
  public static ADD_MESSAGE = `${AuthEndpoints.BASE}/AddMessage`;
  public static GET_THREAD = (recipientId: string | number) => `${AuthEndpoints.BASE}/GetMessageThread/${recipientId}`;
}

class UsersEndpoint {
  public static BASE = `${Auth.userId}/user`;
  public static GET_USERS = `${UsersEndpoint.BASE}`;
  public static GET_USERS_RECORDS = `${UsersEndpoint.BASE}/records`;
  public static GET_SINGLE_USER = (userId: number) => `${UsersEndpoint.BASE}/${userId}`;
}

export default {
  AUTH: AuthEndpoints,
  MESSAGES: MessagesEndpoints,
  USERS: UsersEndpoint,
};
