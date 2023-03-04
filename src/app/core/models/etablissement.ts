import {Personne} from "./personne";
import {TypeEtablisssement} from "./type-etablisssement";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export interface Etablissement extends Personne {
  nom: string,
  autorisationActivite: string,
  typeEtablissement: TypeEtablisssement,
  specialiteEtablissementList: SpecialiteEtablissement[],
}
