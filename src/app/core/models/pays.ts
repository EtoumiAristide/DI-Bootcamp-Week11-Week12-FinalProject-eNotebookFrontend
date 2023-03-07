import {Ville} from "./ville";

export class Pays {
   id: number;
   nom: string;
   code: string;
   villeList: Ville[];


  constructor() {
    this.id = 0;
    this.nom = "";
    this.code = "";
    this.villeList = [];
  }
}
