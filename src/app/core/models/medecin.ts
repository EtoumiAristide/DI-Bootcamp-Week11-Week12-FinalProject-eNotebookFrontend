import {Physique} from "./physique";
import {SpecialiteEtablissement} from "./specialite-etablissement";
import {Consultation} from "./consultation";

export interface Medecin extends Physique {
  matricule: string,
  datePriseService: Date
  specialiteEtablissement: SpecialiteEtablissement,
  consultationList: Consultation[],

}
