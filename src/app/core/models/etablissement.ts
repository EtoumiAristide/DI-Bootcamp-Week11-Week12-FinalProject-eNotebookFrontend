import {Personne} from "./personne";
import {TypeEtablissement} from "./type-etablissement";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export class Etablissement extends Personne {
  override nom: string;
  autorisationActivite: string;
  typeEtablissement: TypeEtablissement;
  specialiteEtablissementList: SpecialiteEtablissement[];

  constructor() {
    super();
    this.nom = "";
    this.autorisationActivite = "";
    this.typeEtablissement = new TypeEtablissement();
    this.specialiteEtablissementList = [];
  }
}
