import {Injectable} from '@angular/core';
import {CompteUtilisateur} from "../../models/compte-utilisateur";

@Injectable({
  providedIn: 'root'
})
/*
* Service permettant de recuperer les informations sur l'utilisateur
* actuellement connecté. Il est initialisé lors de la connexion et détruit lors de la déconnexion
* */
export class UserInfosService {

  private _userInfos!: CompteUtilisateur;

  constructor() {
  }

  setUserInfos(userInfos: CompteUtilisateur) {
    this._userInfos = userInfos;
  }

  getUserInfos(): CompteUtilisateur {
    return this._userInfos;
  }

  isUserInfosSet(): boolean {
    return this._userInfos != undefined
  }
}
