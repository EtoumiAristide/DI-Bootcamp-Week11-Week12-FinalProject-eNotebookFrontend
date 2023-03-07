import {Specialite} from "./specialite";
import {Etablissement} from "./etablissement";
import {Medecin} from "./medecin";

export class SpecialiteEtablissement {
   specialite: Specialite;
   etablissement: Etablissement;
   medecinList: Medecin[];


  constructor() {
    this.specialite = new Specialite();
    this.etablissement = new Etablissement();
    this.medecinList = [];
  }
}
