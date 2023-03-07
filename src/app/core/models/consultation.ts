import {Patient} from "./patient";
import {Medecin} from "./medecin";
import {Ordonnance} from "./ordonnance";

export class Consultation {
  date: string;
  libelle: string;
  patient: Patient;
  medecin: Medecin;
  ordonnanceList: Ordonnance[];

  constructor() {
    this.date = "";
    this.libelle = "";
    this.patient = new Patient();
    this.medecin = new Medecin();
    this.ordonnanceList = [];
  }
}
