
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
  public static get routes() {
    return [
      this.HOME,
      this.EXCERCISES,
      this.WORKOUTS,
    ];
  }
  public static get routeTitles() {
    return this.routes.map((item) => item.title);
  }
  public static getUrl = (title: string) => {
    const route = Routing.routes
      .find((item: any) => item.title.toLowerCase().includes(title.toLowerCase()));
    return route ? route.url : Routing.HOME.url;
  }
}

export default Routing;
