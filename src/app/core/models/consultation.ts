import {Patient} from "./patient";
import {Medecin} from "./medecin";
import {Ordonnance} from "./ordonnance";

export interface Consultation {
  date: Date,
  libelle: string,
  patient: Patient,
  medecin: Medecin,
  ordonnanceList:Ordonnance[]

}
