class Auth {
  public static get isAuthorized(): boolean {
    return Boolean(window.localStorage.getItem('gwdk-token'));
  }

  public static saveToken(token: string) {
    return Boolean(window.localStorage.setItem('gwdk-token', token));
  }

  public static removeToken() {
    return Boolean(window.localStorage.removeItem('gwdk-token'));
  }
}

export default Auth;
