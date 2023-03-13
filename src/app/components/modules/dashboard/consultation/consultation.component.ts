import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {UserInfosService} from "../../../../core/services/globals/user-infos.service";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
  constructor(private _userInfosService: UserInfosService,) {
  }

  ngOnInit(){
    console.log(this._userInfosService.getUserInfos());
  }
}
