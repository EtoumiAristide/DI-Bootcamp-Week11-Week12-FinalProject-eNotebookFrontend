import {Maladie} from "./maladie";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export class Specialite {
   id: number;
   libelle: string;
   maladieList: Maladie[];
   specialiteEtablissementList: SpecialiteEtablissement[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.maladieList = [];
    this.specialiteEtablissementList = [];
  }
}
