import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {CompteUtilisateur} from "../../models/compte-utilisateur";
import {RegisterData} from "../../payloads/register-data";
import {url_path} from "../../../constants/app.constant";
import {LoginData} from "../../payloads/login-data";

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  login(loginData: LoginData) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/login',
      data: JSON.stringify(loginData)
    });
  }

  register(registerData: RegisterData) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/register',
      data: JSON.stringify(registerData)
    });
  }

  logout(compteUtilisateur: CompteUtilisateur) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/logout',
      data: JSON.stringify(compteUtilisateur)
    });
  }
}
