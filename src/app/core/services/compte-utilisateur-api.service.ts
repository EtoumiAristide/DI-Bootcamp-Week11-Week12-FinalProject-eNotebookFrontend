import {Injectable} from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {CompteUtilisateur} from "../models/compte-utilisateur";
import {RegisterData} from "../models/register-data";

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  login(registerData: RegisterData) {
    return this._apiRequestService.post({endpoint: '/users/login', data: JSON.stringify(registerData)});
  }

  register(registerData: RegisterData) {
    return this._apiRequestService.post({endpoint: '/users/register', data: JSON.stringify(registerData)});
  }

  logout(compteUtilisateur: CompteUtilisateur) {
    return this._apiRequestService.post({endpoint: '/users/logout', data: JSON.stringify(compteUtilisateur)});
  }
}
