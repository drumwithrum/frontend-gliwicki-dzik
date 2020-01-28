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

export default {
  AUTH: AuthEndpoints,
  MESSAGES: MessagesEndpoints,
};
