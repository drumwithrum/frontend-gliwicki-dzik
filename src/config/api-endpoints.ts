import Auth from 'utils/auth';

class AuthEndpoints {
  public static BASE = 'auth';
  public static LOGIN = `${AuthEndpoints.BASE}/login`;
  public static REGISTER = `${AuthEndpoints.BASE}/register`;
}

class MessagesEndpoints {
  public static BASE = `${Auth.userId}/message`;
  public static ADD_MESSAGE = `${MessagesEndpoints.BASE}/AddMessage`;
  public static GET_CONTACTED_USERS = `${MessagesEndpoints.BASE}/GetConvMessages`;
  public static GET_THREAD = (recipientId: string | number) => `${MessagesEndpoints.BASE}/GetMessageThread/${recipientId}`;
}

class UsersEndpoints {
  public static BASE = `${Auth.userId}/user`;
  public static CURRENT_USER = `${UsersEndpoints.BASE}/me`;
  public static GET_USERS = `${UsersEndpoints.BASE}/GetUsers`;
  public static GET_CONTACTED_USERS = `${UsersEndpoints.BASE}/GetConvUsers`;
}

class ExcercisesEndpoints {
  public static BASE = `${Auth.userId}/exercise`;
}

class WorkoutsEndpoints {
  public static BASE = `${Auth.userId}/training`;
}

export default {
  AUTH: AuthEndpoints,
  MESSAGES: MessagesEndpoints,
  USERS: UsersEndpoints,
  EXCERCISES: ExcercisesEndpoints,
  WORKOUTS: WorkoutsEndpoints,
};
