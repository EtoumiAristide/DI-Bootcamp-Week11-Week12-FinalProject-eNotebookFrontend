import {Injectable} from '@angular/core';
import {ApiRequestService} from "./api-request.service";
import {url_path} from "../../constants/app.constant";

@Injectable({
  providedIn: 'root'
})
export class TypeCompteApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.TYPE_COMPTE_BASE);
  }
}
