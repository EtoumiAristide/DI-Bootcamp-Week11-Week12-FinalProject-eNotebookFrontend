import {Pays} from "./pays";
import {Commune} from "./commune";
import {jsonIgnore} from "json-ignore";

export class Ville {
  id: number;
  nom: string;
  pays!: Pays;

  @jsonIgnore()
  communeList: Commune[];

  constructor() {
    this.id = 0;
    this.nom = "";
    //this.pays = new Pays();
    this.communeList = [];
  }
}
