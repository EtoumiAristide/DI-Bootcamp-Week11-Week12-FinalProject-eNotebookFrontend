import {Ville} from "./ville";
import {Adresse} from "./adresse";

export class Commune {
  private _id: number;
  private _nom: string;
  private _ville: Ville;
  private _adresseList: Adresse[];


  constructor() {
    this._id = 0;
    this._nom = "";
    this._ville = new Ville();
    this._adresseList = [];
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get ville(): Ville {
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  get adresseList(): Adresse[] {
    return this._adresseList;
  }

  set adresseList(value: Adresse[]) {
    this._adresseList = value;
  }
}
