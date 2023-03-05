import {Injectable} from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {CompteUtilisateur} from "../models/compte-utilisateur";

@Injectable({
  providedIn: 'root'
})
export class CompteUtilisateurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  login(compteUtilisateur: CompteUtilisateur) {
    return this._apiRequestService.post({endpoint: '/login', data: JSON.stringify(compteUtilisateur)});
  }

  register(compteUtilisateur: CompteUtilisateur) {
    return this._apiRequestService.post({endpoint: '/register', data: JSON.stringify(compteUtilisateur)});
  }

  logout(compteUtilisateur: CompteUtilisateur) {
    return this._apiRequestService.post({endpoint: '/logout', data: JSON.stringify(compteUtilisateur)});
  }
}
