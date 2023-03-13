import {Etablissement} from "./etablissement";
import {jsonIgnore} from "json-ignore";

export class TypeEtablissement {
   id: number;
   libelle: string;
  nomSimplifie: string;

   @jsonIgnore()
   etablissementList: Etablissement[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.nomSimplifie = "";
    this.etablissementList = [];
  }
}
