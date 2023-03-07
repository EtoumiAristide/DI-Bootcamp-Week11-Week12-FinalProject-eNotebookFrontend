import {Etablissement} from "./etablissement";

export class TypeEtablisssement {
   id: number;
   libelle: string;
   etablissementList: Etablissement[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.etablissementList = [];
  }
}
