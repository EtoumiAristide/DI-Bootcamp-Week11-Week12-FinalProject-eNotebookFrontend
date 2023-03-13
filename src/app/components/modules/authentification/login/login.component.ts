import {Component} from '@angular/core';
import {CompteUtilisateurApiService} from "../../../../core/services/apis/compte-utilisateur-api.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../../core/services/globals/toast.service";
import {LocalStorageService} from "../../../../core/services/globals/local-storage";
import {CompteUtilisateur} from "../../../../core/models/compte-utilisateur";
import {LoginData} from "../../../../core/payloads/login-data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: LoginData;

  textBtnEnregistrement = {
    txtBtnSave: "Connexion",
    textBtnProcessing: "Traitement en cours..."
  };

  loadingBtn: boolean = false;
  textButton: string = this.textBtnEnregistrement.txtBtnSave;

  constructor(
    private _compteUtilisateurApiService: CompteUtilisateurApiService,
    private _route: Router,
    private _toastServive: ToastService,
    private _localStorageService: LocalStorageService,
  ) {
    this.loginData = new LoginData();
  }

  connecterUser(userForm: any) {
    //console.log(userForm)
    //Changement de l'apparance du bouton
    this.loadingBtn = true;
    this.textButton = this.textBtnEnregistrement.textBtnProcessing
    //this.compteUtilisateur.personne = this.physique;
    console.log(JSON.stringify(this.loginData));
    this._compteUtilisateurApiService.login(this.loginData).subscribe({
      next: response => {
        console.log(response);
        const userData: CompteUtilisateur = response as CompteUtilisateur;

        this._toastServive.success("Connexion éffecutée avec succès \nRedirection vers la page d'accueil en cours...", "Connexion réussie").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;

          //Enregistrement de l'objet User dans le Local Storage
          this._localStorageService.saveData("user", userData);

          this._route.navigate(["/dashboard"])
        })
      },
      error: error => {
        console.error("There is an error !", error);
        this._toastServive.error("Login ou mot de passe incorrecte", "Connexion échouée").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;
        });
      }
    });
  }

}
