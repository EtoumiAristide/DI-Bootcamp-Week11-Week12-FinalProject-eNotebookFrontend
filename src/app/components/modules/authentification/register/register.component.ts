import {Component} from '@angular/core';
import {CompteUtilisateur} from "../../../../core/models/compte-utilisateur";
import {CompteUtilisateurApiService} from "../../../../core/services/apis/compte-utilisateur-api.service";
import {TypeCompte} from "../../../../core/models/type-compte";
import {Physique} from "../../../../core/models/physique";
import {TypeCompteApiService} from "../../../../core/services/apis/type-compte-api.service";
import {RegisterData} from "../../../../core/payloads/register-data";
import {Router} from "@angular/router";
import {ToastService} from "../../../../core/services/globals/toast.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: RegisterData
  typeCompte: TypeCompte

  physique: Physique;
  textBtnEnregistrement = {
    txtBtnSave: "Créér mon compte",
    textBtnProcessing: "Traitement en cours..."
  };

  loadingBtn: boolean = false;
  textButton: string = this.textBtnEnregistrement.txtBtnSave;

  constructor(
    private _compteUtilisateurApiService: CompteUtilisateurApiService,
    private _typeCompteApiService: TypeCompteApiService,
    private _route: Router,
    private _toastServive: ToastService
  ) {
    this.physique = new Physique();
    this.register = new RegisterData();
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
    //console.log(userForm)
    //Changement de l'apparance du bouton
    this.loadingBtn = true;
    this.textButton = this.textBtnEnregistrement.textBtnProcessing
    this.register.typeCompte = this.typeCompte;
    //this.compteUtilisateur.personne = this.physique;
    console.log(JSON.stringify(this.register));
    this._compteUtilisateurApiService.register(this.register).subscribe({
      next: response => {
        console.log(response);
        this._toastServive.success("Compte créé avec succès \nVous serez rediriger vers la page de connexion", "Données enregistrée").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;
          this._route.navigate(["/authentification/login"])
        })
      },
      error: error => {
        console.error("There is an error !", error);
        this._toastServive.error("Une erreur est survenue lors de l'enregistrement des données \nVeuillez reéssayer plus tard ou contacter l'administrateur", "Données non enregistrées").onHidden.subscribe(() => {
          this.textButton = this.textBtnEnregistrement.txtBtnSave
          this.loadingBtn = false;
        });
      }
    });
  }

  checkPassword(): boolean {
    return this.register.password == this.register.passwordConfirmation;
  }
}
