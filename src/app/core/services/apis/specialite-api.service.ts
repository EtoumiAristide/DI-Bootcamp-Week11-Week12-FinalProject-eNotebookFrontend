import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Specialite} from "../../models/specialite";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.SPECIALITE_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.SPECIALITE_BASE + '/' + id);
  }

  save(data: Specialite) {
    return this.apiRequestService.post({endpoint: url_path.SPECIALITE_BASE, data: JSON.stringify(data)})
  }

  update(data: Specialite) {
    return this.apiRequestService.put({endpoint: url_path.SPECIALITE_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.SPECIALITE_BASE + "/" + id)
  }
}
