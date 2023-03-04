import {Specialite} from "./specialite";
import {Etablissement} from "./etablissement";
import {Medecin} from "./medecin";

export interface SpecialiteEtablissement {
  specialite: Specialite,
  etablissement: Etablissement,
  medecinList: Medecin[]
}
