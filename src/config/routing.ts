import Auth from 'utils/auth';

class Routing {
  public static HOME = {
    url: '/home',
    title: 'Start',
  };
  public static EXCERCISES = {
    url: '/excercises',
    title: 'Atlas ćwiczeń',
  };
  public static WORKOUTS = {
    url: '/workouts',
    title: 'Treningi',
    private: true,
  };
  public static RANKING = {
    url: '/ranking',
    title: 'Ranking',
  };
  public static LOGIN = {
    url: '/login',
    title: 'Zaloguj',
    unauthorized: true,
  };
  public static REGISTER = {
    url: '/register',
    title: 'Zarejestruj',
  };
  public static PROFILE = {
    url: '/profile',
    title: 'Profil',
  };
  public static MAIL = {
    url: '/mail',
    title: 'Skrzynka odbiorcza',
    private: true,
  };
  public static get routes(): {
    url: string;
    title: string;
    private?: boolean;
    unauthorized?: boolean;
  }[] {
    return [
      this.HOME,
      this.EXCERCISES,
      this.WORKOUTS,
      this.RANKING,
      this.LOGIN,
    ];
  }
  public static get routeTitles(): string[] {
    const showPrivate = Auth.isAuthorized;
    if (showPrivate) {
      return this.routes
        .filter((route) => (
          !route.unauthorized
        ))
        .map((item) => item.title);
    }
    return this.routes
      .filter((route) => (
        !route.private
      ))
      .map((item) => item.title);
  }
  public static getUrl = (title: string): string => {
    const route = Routing.routes
      .find((item: any) => item.title.toLowerCase().includes(title.toLowerCase()));
    return route ? route.url : Routing.HOME.url;
  }
}

export default Routing;
