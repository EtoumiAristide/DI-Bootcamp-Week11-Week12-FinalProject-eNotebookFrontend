import {Patient} from "./patient";

export class AntecedentMedical {
   id: number;
   libelle: string;
   date: string;
   patient: Patient;

  constructor() {
    this.id = 0;
    this.libelle = "";
    this.date = "";
    this.patient = new Patient();
  }
}
