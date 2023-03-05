import {OrdonnanceMaladie} from "./ordonnance-maladie";

export class Traitement {
  private _id: number;
  private _libelle: string;
  private _ordonnanceMaladie: OrdonnanceMaladie;


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._ordonnanceMaladie = new OrdonnanceMaladie();
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

  get ordonnanceMaladie(): OrdonnanceMaladie {
    return this._ordonnanceMaladie;
  }

  set ordonnanceMaladie(value: OrdonnanceMaladie) {
    this._ordonnanceMaladie = value;
  }
}
