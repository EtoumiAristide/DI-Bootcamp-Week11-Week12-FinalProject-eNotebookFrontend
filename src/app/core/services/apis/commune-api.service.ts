import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Commune} from "../../models/commune";
import {CommuneData} from "../../payloads/commune-data";

@Injectable({
  providedIn: 'root'
})
export class CommuneApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.COMMUNE_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.COMMUNE_BASE + '/' + id);
  }

  save(data: CommuneData) {
    return this.apiRequestService.post({endpoint: url_path.COMMUNE_BASE, data: JSON.stringify(data)})
  }

  update(data: CommuneData) {
    return this.apiRequestService.put({endpoint: url_path.COMMUNE_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.COMMUNE_BASE + "/" + id)
  }
}
