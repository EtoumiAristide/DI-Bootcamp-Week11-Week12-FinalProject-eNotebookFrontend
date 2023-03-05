import {Etablissement} from "./etablissement";

export class TypeEtablisssement {
  private _id: number;
  private _libelle: string;
  private _etablissementList: Etablissement[];


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._etablissementList = [];
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

  get etablissementList(): Etablissement[] {
    return this._etablissementList;
  }

  set etablissementList(value: Etablissement[]) {
    this._etablissementList = value;
  }
}
