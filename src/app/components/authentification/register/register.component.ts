import {Component} from '@angular/core';
import {CompteUtilisateur} from "../../../core/models/compte-utilisateur";
import {CompteUtilisateurApiService} from "../../../core/services/compte-utilisateur-api.service";
import {TypeCompte} from "../../../core/models/type-compte";
import {Physique} from "../../../core/models/physique";
import {TypeCompteApiService} from "../../../core/services/type-compte-api.service";
import {AfterViewInit} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  compteUtilisateur!: CompteUtilisateur
  typeCompte!: TypeCompte

  physique!: Physique;

  constructor(
    private _compteUtilisateurApiService: CompteUtilisateurApiService,
    private _typeCompteApiService: TypeCompteApiService,
  ) {
    this.physique = new Physique();
    this.compteUtilisateur = new CompteUtilisateur();
    this.typeCompte = new TypeCompte();
  }

  ngAfterViewInit() {
    this.getTypeCompte();
  }

  //Chargement des types de compte et recuperation du type "patient"
  getTypeCompte() {
    this._typeCompteApiService.getAll().subscribe({
      next: data => {
        console.log(data);
        let typeCompteList: TypeCompte[] = data as TypeCompte[];
        for (const typeCompteData of typeCompteList) {
          if (typeCompteData.libelle.toLowerCase() == 'patient') {
            this.typeCompte = typeCompteData;
            break
          }
        }
      },
      error: error => {
        console.error("There is an error !", error);
        //TODO: Afficher toast notification dans le composant en cas d'erreur du serveur lors du chargement
      }
    })
  }

  createCompteUser(userForm: any) {
    console.log(userForm)
  }

  checkPassword(): boolean {
    return this.compteUtilisateur.password == this.compteUtilisateur.passwordConfirm;
  }
}
