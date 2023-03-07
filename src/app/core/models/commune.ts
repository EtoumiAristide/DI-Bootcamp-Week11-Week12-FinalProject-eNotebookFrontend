import {Ville} from "./ville";
import {Adresse} from "./adresse";

export class Commune {
   id: number;
   nom: string;
   ville: Ville;
   adresseList: Adresse[];


  constructor() {
    this.id = 0;
    this.nom = "";
    this.ville = new Ville();
    this.adresseList = [];
  }
}
