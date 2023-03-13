import {Ville} from "./ville";
import {jsonIgnore} from "json-ignore";

export class Pays {
  id: number;
  nom: string;
  code: string;

  @jsonIgnore()
  villeList: Ville[];


  constructor() {
    this.id = 0;
    this.nom = "";
    this.code = "";
    this.villeList = [];
  }
}
