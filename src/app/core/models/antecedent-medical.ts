import {Patient} from "./patient";

export interface AntecedentMedical {
  id: number,
  libelle: string,
  date: Date,
  patient: Patient,
}
