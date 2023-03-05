import {Commune} from "./commune";
import {Personne} from "./personne";

export class Adresse {

  private _id: number;
  private _quartier: string;
  private _rue: string;
  private _boitePostale: string;
  private _commune: Commune;
  private _personne: Personne;

  constructor() {
    this._id = 0;
    this._quartier = "";
    this._rue = "0";
    this._boitePostale = "0";
    this._commune = new Commune();
    this._personne = new Personne();
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get quartier(): string {
    return this._quartier;
  }

  set quartier(value: string) {
    this._quartier = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get boitePostale(): string {
    return this._boitePostale;
  }

  set boitePostale(value: string) {
    this._boitePostale = value;
  }

  get commune(): Commune {
    return this._commune;
  }

  set commune(value: Commune) {
    this._commune = value;
  }

  get personne(): Personne {
    return this._personne;
  }

  set personne(value: Personne) {
    this._personne = value;
  }
}
