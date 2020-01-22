
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
  };
  public static RANKING = {
    url: '/ranking',
    title: 'Ranking',
  };
  public static LOGIN = {
    url: '/login',
    title: 'Login',
  };
  public static REGISTER = {
    url: '/register',
    title: 'Register',
  };
  public static get routes(): {url: string; title: string}[] {
    return [
      this.HOME,
      this.EXCERCISES,
      this.WORKOUTS,
      this.RANKING,
    ];
  }
  public static get routeTitles(): string[] {
    return this.routes.map((item) => item.title);
  }
  public static getUrl = (title: string): string => {
    const route = Routing.routes
      .find((item: any) => item.title.toLowerCase().includes(title.toLowerCase()));
    return route ? route.url : Routing.HOME.url;
  }
}

export default Routing;
