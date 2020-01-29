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
  public static USERS = {
    url: '/user/:id',
    title: 'Dziki',
    private: true,
  };
  public static get routes(): { url: string; title: string; private?: boolean }[] {
    return [
      this.HOME,
      this.EXCERCISES,
      this.WORKOUTS,
      this.RANKING,
    ];
  }
  public static get routeTitles(): string[] {
    const showPrivate = Auth.isAuthorized;
    return this.routes
      .filter((route) => !route.private || (showPrivate && route.private))
      .map((item) => item.title);
  }
  public static getUrl = (title: string): string => {
    const route = Routing.routes
      .find((item: any) => item.title.toLowerCase().includes(title.toLowerCase()));
    return route ? route.url : Routing.HOME.url;
  }
}

export default Routing;
