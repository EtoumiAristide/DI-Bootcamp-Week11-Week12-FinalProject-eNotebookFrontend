import {Patient} from "./patient";
import {Medecin} from "./medecin";
import {Ordonnance} from "./ordonnance";

export class Consultation {
  private _date: Date;
  private _libelle: string;
  private _patient: Patient;
  private _medecin: Medecin;
  private _ordonnanceList: Ordonnance[];

  constructor() {
    this._date = new Date();
    this._libelle = "";
    this._patient = new Patient();
    this._medecin = new Medecin();
    this._ordonnanceList = [];
  }


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get patient(): Patient {
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }

  get medecin(): Medecin {
    return this._medecin;
  }

  set medecin(value: Medecin) {
    this._medecin = value;
  }

  get ordonnanceList(): Ordonnance[] {
    return this._ordonnanceList;
  }

  set ordonnanceList(value: Ordonnance[]) {
    this._ordonnanceList = value;
  }
}
