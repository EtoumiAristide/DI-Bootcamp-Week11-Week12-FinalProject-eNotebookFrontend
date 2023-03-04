import {Maladie} from "./maladie";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export interface Specialite {
  id: number,
  libelle: string
  maladieList: Maladie[],
  specialiteEtablissement: SpecialiteEtablissement[],
}
