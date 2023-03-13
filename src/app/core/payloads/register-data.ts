import {TypeCompte} from "../models/type-compte";

export class RegisterData {
  public nom: string;
  public prenom: string;
  public tel: string;
  public login: string;
  public password: string;
  public passwordConfirmation: string;
  public typeCompte: TypeCompte;
  public checkCDU: boolean = false;


  constructor(nom: string = "", prenom: string = "", tel: string = "", login: string = "", password: string = "", passwordConfirmation: string = "", typeCompte: TypeCompte = new TypeCompte()) {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
    this.login = login;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    this.typeCompte = typeCompte
  }
}
