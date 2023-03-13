import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Pays} from "../../models/pays";

@Injectable({
  providedIn: 'root'
})
export class PaysApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.PAYS_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.PAYS_BASE + '/' + id);
  }

  save(data: Pays) {
    return this.apiRequestService.post({endpoint: url_path.PAYS_BASE, data: JSON.stringify(data)})
  }

  update(data: Pays) {
    return this.apiRequestService.put({endpoint: url_path.PAYS_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.PAYS_BASE + "/" + id)
  }
}
