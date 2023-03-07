import {Component} from '@angular/core';
import {RegisterData} from "../../../core/models/register-data";
import {CompteUtilisateurApiService} from "../../../core/services/compte-utilisateur-api.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../core/services/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  register: RegisterData;

  textBtnEnregistrement = {
    txtBtnSave: "Connexion",
    textBtnProcessing: "Traitement en cours..."
  };

  loadingBtn: boolean = false;
  textButton: string = this.textBtnEnregistrement.txtBtnSave;

  constructor(
    private _compteUtilisateurApiService: CompteUtilisateurApiService,
    private _route: Router,
    private _toastServive: ToastService
  ) {
    this.register = new RegisterData();
  }

  connecterUser(userForm: any) {
    //console.log(userForm)
    //Changement de l'apparance du bouton
    this.loadingBtn = true;
    this.textButton = this.textBtnEnregistrement.textBtnProcessing
    //this.compteUtilisateur.personne = this.physique;
    console.log(JSON.stringify(this.register));
    this._compteUtilisateurApiService.login(this.register).subscribe({
      next: response => {
        console.log(response);
        //Todo: Afficher notification succes
        this._toastServive.success("Connexion éffecutée avec succès \nRedirection vers la page d'accueil en cours...", "Connexion réussie").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;
          this._route.navigate(["/dashboard"])
        })
      },
      error: error => {
        console.error("There is an error !", error);
        //TODO: Afficher toast notification dans le composant en cas d'erreur du serveur lors du chargement
        this._toastServive.error("Login ou mot de passe incorrecte", "Connexion échouée").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;
        });
      }
    });
  }

}
