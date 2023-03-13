import {Injectable} from '@angular/core';
import {ApiRequestService} from "../globals/api-request.service";
import {url_path} from "../../../constants/app.constant";
import {Symptome} from "../../models/symptome";

@Injectable({
  providedIn: 'root'
})
export class SymptomeApiService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this.apiRequestService.get(url_path.SYMPTOME_BASE);
  }

  getById(id: number) {
    return this.apiRequestService.get(url_path.SYMPTOME_BASE + '/' + id);
  }

  save(data: Symptome) {
    return this.apiRequestService.post({endpoint: url_path.SYMPTOME_BASE, data: JSON.stringify(data)})
  }

  update(data: Symptome) {
    return this.apiRequestService.put({endpoint: url_path.SYMPTOME_BASE, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this.apiRequestService.delete(url_path.SYMPTOME_BASE + "/" + id)
  }
}
