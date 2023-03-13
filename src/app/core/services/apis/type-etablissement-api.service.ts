import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Pays} from "../../models/pays";
import {TypeEtablissement} from "../../models/type-etablissement";

@Injectable({
  providedIn: 'root'
})
export class TypeEtablissementApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.TYPE_ETABLISSEMENT_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.TYPE_ETABLISSEMENT_BASE + '/' + id);
  }

  save(data: TypeEtablissement) {
    return this.apiRequestService.post({endpoint: url_path.TYPE_ETABLISSEMENT_BASE, data: JSON.stringify(data)})
  }

  update(data: TypeEtablissement) {
    return this.apiRequestService.put({endpoint: url_path.TYPE_ETABLISSEMENT_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.TYPE_ETABLISSEMENT_BASE + "/" + id)
  }
}
