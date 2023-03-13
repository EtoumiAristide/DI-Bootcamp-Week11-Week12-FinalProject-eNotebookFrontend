import {Component} from '@angular/core';
import {LocalStorageService} from "../../../../core/services/globals/local-storage";
import {CompteUtilisateur} from "../../../../core/models/compte-utilisateur";
import {UserInfosService} from "../../../../core/services/globals/user-infos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed = true;
  isMenuCollapsed = true;

  constructor(
    private _localStorageService: LocalStorageService,
    private _userInfosService: UserInfosService,
  ) {
    this._userInfosService.setUserInfos(this._localStorageService.getData("user") as CompteUtilisateur);
    //console.log(this._userInfosService.getUserInfos());
  }

  ngOnInit() {
  }

  setIsMenuCollapsed(isMenuCollapsedEvent: boolean) {
    this.isMenuCollapsed = isMenuCollapsedEvent;
  }

  setIsCollapsed(isCollapsedEvent: boolean) {
    this.isCollapsed = isCollapsedEvent;
  }
}
