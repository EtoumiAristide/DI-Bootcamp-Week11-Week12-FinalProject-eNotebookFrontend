import {Pays} from "./pays";
import {Commune} from "./commune";

export class Ville {
  id: number;
  nom: string;
  pays: Pays;
  communeList: Commune[];


  constructor() {
    this.id = 0;
    this.nom = "";
    this.pays = new Pays();
    this.communeList = [];
  }
}
