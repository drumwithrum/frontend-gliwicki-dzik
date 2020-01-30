import Auth from 'utils/auth';

class AuthEndpoints {
  public static BASE = 'auth';
  public static LOGIN = `${AuthEndpoints.BASE}/login`;
  public static REGISTER = `${AuthEndpoints.BASE}/register`;
}

class MessagesEndpoints {
  public static BASE = `${Auth.userId}/content`;
  public static ADD_MESSAGE = `${MessagesEndpoints.BASE}/AddMessage`;
  public static GET_THREAD = (recipientId: string | number) => `${MessagesEndpoints.BASE}/GetMessageThread/${recipientId}`;
}

class UsersEndpoints {
  public static BASE = `${Auth.userId}/user`;
  public static GET_USERS = `${UsersEndpoints.BASE}/GetUsers`;
  public static GET_CONTACTED_USERS = `${UsersEndpoints.BASE}/GetConvUsers`;
}

export default {
  AUTH: AuthEndpoints,
  MESSAGES: MessagesEndpoints,
  USERS: UsersEndpoints,
};
