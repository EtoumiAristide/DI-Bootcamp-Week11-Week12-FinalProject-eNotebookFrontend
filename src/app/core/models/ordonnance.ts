import {Consultation} from "./consultation";
import {OrdonnanceMaladie} from "./ordonnance-maladie";

export class Ordonnance {
  private _id: number;
  private _libelle: string;
  private _consultation: Consultation;
  private _ordonnanceMaladieList: OrdonnanceMaladie[];


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._consultation = new Consultation();
    this._ordonnanceMaladieList = [];
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

  get consultation(): Consultation {
    return this._consultation;
  }

  set consultation(value: Consultation) {
    this._consultation = value;
  }

  get ordonnanceMaladieList(): OrdonnanceMaladie[] {
    return this._ordonnanceMaladieList;
  }

  set ordonnanceMaladieList(value: OrdonnanceMaladie[]) {
    this._ordonnanceMaladieList = value;
  }
}
