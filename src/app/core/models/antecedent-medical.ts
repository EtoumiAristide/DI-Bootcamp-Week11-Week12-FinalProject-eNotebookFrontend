import {Patient} from "./patient";

export class AntecedentMedical {
  private _id: number;
  private _libelle: string;
  private _date: Date;
  private _patient: Patient;

  constructor() {
    this._id = 0;
    this._libelle = "";
    this._date = new Date();
    this._patient = new Patient();
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get patient(): Patient {
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }
}
