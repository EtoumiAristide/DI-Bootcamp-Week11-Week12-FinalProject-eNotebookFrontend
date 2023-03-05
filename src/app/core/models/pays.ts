import {Ville} from "./ville";

export class Pays {
  private _id: number;
  private _nom: string;
  private _code: string;
  private _villeList: Ville[];


  constructor() {
    this._id = 0;
    this._nom = "";
    this._code = "";
    this._villeList = [];
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

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get villeList(): Ville[] {
    return this._villeList;
  }

  set villeList(value: Ville[]) {
    this._villeList = value;
  }
}
