import {Maladie} from "./maladie";
import {SpecialiteEtablissement} from "./specialite-etablissement";
import {jsonIgnore} from "json-ignore";

export class Specialite {
   id: number;
   libelle: string;
   description: string;
   @jsonIgnore()
   maladieList: Maladie[];
   @jsonIgnore()
   specialiteEtablissementList: SpecialiteEtablissement[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.description = "";
    this.maladieList = [];
    this.specialiteEtablissementList = [];
  }
}
