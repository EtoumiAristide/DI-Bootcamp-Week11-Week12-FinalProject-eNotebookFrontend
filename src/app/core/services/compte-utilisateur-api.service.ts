import {Injectable} from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {CompteUtilisateur} from "../models/compte-utilisateur";
import {RegisterData} from "../models/register-data";
import {url_path} from "../../constants/app.constant";

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  login(registerData: RegisterData) {
    return this._apiRequestService.post({
      endpoint: url_path.COMPTE_USER_BASE + '/login',
      data: JSON.stringify(registerData)
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
