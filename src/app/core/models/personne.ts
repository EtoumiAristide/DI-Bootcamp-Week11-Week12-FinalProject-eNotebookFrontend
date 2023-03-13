import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export class Personne {
  id: number;
  tel1: string;
  tel2: string;
  tel3: string;
  email: string;
  nom: string;
  prenoms: string;
  adresseList: Adresse[];
  compteUtilsateurList: CompteUtilisateur[];


  constructor() {
    this.id = 0;
    this.tel1 = "";
    this.tel2 = "";
    this.tel3 = "";
    this.email = "";
    this.nom = "";
    this.prenoms = "";
    this.adresseList = [];
    this.compteUtilsateurList = [];
  }
}
