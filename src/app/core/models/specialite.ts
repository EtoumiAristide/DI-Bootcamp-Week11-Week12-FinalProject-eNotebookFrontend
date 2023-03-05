import {Maladie} from "./maladie";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export class Specialite {
  private _id: number;
  private _libelle: string;
  private _maladieList: Maladie[];
  private _specialiteEtablissementList: SpecialiteEtablissement[];


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._maladieList = [];
    this._specialiteEtablissementList = [];
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

  get maladieList(): Maladie[] {
    return this._maladieList;
  }

  set maladieList(value: Maladie[]) {
    this._maladieList = value;
  }


  get specialiteEtablissementList(): SpecialiteEtablissement[] {
    return this._specialiteEtablissementList;
  }

  set specialiteEtablissementList(value: SpecialiteEtablissement[]) {
    this._specialiteEtablissementList = value;
  }
}
