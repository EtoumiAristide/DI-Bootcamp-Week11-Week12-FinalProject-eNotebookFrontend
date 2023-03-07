import {CompteUtilisateur} from "./compte-utilisateur";

export class TypeCompte {
   id: number;
   libelle: string;
   compteUtilisateurList: CompteUtilisateur[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.compteUtilisateurList = [];
  }
}
