class Auth {
  public static get isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem('gwdk-token'));
  }

  public static saveToken(token: string) {
    return Boolean(window.localStorage.setItem('gwdk-token', token));
  }
}

export default Auth;
