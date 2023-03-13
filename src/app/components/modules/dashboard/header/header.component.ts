import {Component, EventEmitter, Output} from '@angular/core';
import {UserInfosService} from "../../../../core/services/globals/user-infos.service";
import {CompteUtilisateur} from "../../../../core/models/compte-utilisateur";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  userInfos: CompteUtilisateur;
  userName: string;

  @Output() isMenuCollapsedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(userInfosService: UserInfosService) {
    this.userInfos = userInfosService.getUserInfos();
    this.userName = this.userInfos.personne.nom;
    let prenoms = this.userInfos.personne.prenoms.split(' ');
    for (const prenom of prenoms) {
      this.userName += " " + prenom
    }
    //console.log(this.userInfos)
    //Si le nombre de caratcères est > 15 on affiche les initiales
    if (this.userName.length > 15) {
      this.userName = this.userInfos.personne.nom.charAt(0);
      for (const prenom of prenoms) {
        this.userName += " " + prenom.charAt(0)
      }
    }
  }

  setMenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isMenuCollapsedEvent.emit(this.isMenuCollapsed);
  }
}
