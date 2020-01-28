class Auth {
  public static get isAuthorized(): boolean {
    return Boolean(this.token);
  }

  public static saveToken(token: string) {
    return Boolean(window.localStorage.setItem('gwdk-token', token));
  }

  public static removeToken() {
    return Boolean(window.localStorage.removeItem('gwdk-token'));
  }

  public static get token(): string | null {
    return window.localStorage.getItem('gwdk-token') || null;
  }
}

export default Auth;
