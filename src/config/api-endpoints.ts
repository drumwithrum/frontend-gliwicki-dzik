import Auth from 'utils/auth';

class AuthEndpoints {
  public static BASE = 'auth';
  public static LOGIN = `${AuthEndpoints.BASE}/login`;
  public static REGISTER = `${AuthEndpoints.BASE}/register`;
}

class MessagesEndpoints {
  public static BASE = `${Auth.userId}/message`;
  public static GET_CONTACTED_USERS = `${MessagesEndpoints.BASE}/corresponded`;
  public static ADD_MESSAGE = (recipientId: string | number) => `${MessagesEndpoints.BASE}`;
  public static GET_THREAD = (recipientId: string | number) => `${MessagesEndpoints.BASE}/${recipientId}/thread`;
}

class UsersEndpoints {
  public static BASE = `${Auth.userId}/user`;
  public static CURRENT_USER = `${UsersEndpoints.BASE}/me`;
  public static GET_USERS = `${UsersEndpoints.BASE}`;
  public static GET_USERS_RECORDS = `${UsersEndpoints.BASE}/records`;
  public static GET_SINGLE_USER = (userId: number) => `${UsersEndpoints.BASE}/${userId}`;
}

class ExcercisesEndpoints {
  public static BASE = `${Auth.userId}/exercise`;
}

class WorkoutsEndpoints {
  public static BASE = `${Auth.userId}/training`;
}

class PlanEndpoints {
  public static BASE = `${Auth.userId}/training`;
}

export default {
  AUTH: AuthEndpoints,
  MESSAGES: MessagesEndpoints,
  USERS: UsersEndpoints,
  EXCERCISES: ExcercisesEndpoints,
  WORKOUTS: WorkoutsEndpoints,
  PLAN: PlanEndpoints,
};
