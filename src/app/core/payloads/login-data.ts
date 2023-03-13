export class LoginData {
  public login: string;
  public password: string;
  public rememberMe: boolean = false;

  constructor(login: string = "", password: string = "") {
    this.login = login;
    this.password = password;
  }
}
