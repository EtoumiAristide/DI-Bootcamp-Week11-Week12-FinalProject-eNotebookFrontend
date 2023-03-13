import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Ville} from "../../models/ville";

@Injectable({
  providedIn: 'root'
})
export class VilleApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.VILLE_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.VILLE_BASE + '/' + id);
  }

  save(data: Ville) {
    return this.apiRequestService.post({endpoint: url_path.VILLE_BASE, data: JSON.stringify(data)})
  }

  update(data: Ville) {
    return this.apiRequestService.put({endpoint: url_path.VILLE_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.VILLE_BASE + "/" + id)
  }
}
