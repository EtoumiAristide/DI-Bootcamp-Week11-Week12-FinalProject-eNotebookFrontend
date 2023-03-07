import {Personne} from "./personne";
import {TypeEtablisssement} from "./type-etablisssement";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export class Etablissement extends Personne {
   nom: string;
   autorisationActivite: string;
   typeEtablissement: TypeEtablisssement;
   specialiteEtablissementList: SpecialiteEtablissement[];

  constructor() {
    super();
    this.nom = "";
    this.autorisationActivite = "";
    this.typeEtablissement = new TypeEtablisssement();
    this.specialiteEtablissementList = [];
  }
}
