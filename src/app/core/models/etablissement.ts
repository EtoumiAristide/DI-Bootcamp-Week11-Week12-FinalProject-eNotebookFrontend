import {Personne} from "./personne";
import {TypeEtablisssement} from "./type-etablisssement";
import {SpecialiteEtablissement} from "./specialite-etablissement";

export class Etablissement extends Personne {
  private _nom: string;
  private _autorisationActivite: string;
  private _typeEtablissement: TypeEtablisssement;
  private _specialiteEtablissementList: SpecialiteEtablissement[];

  constructor() {
    super();
    this._nom = "";
    this._autorisationActivite = "";
    this._typeEtablissement = new TypeEtablisssement();
    this._specialiteEtablissementList = [];
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get autorisationActivite(): string {
    return this._autorisationActivite;
  }

  set autorisationActivite(value: string) {
    this._autorisationActivite = value;
  }

  get typeEtablissement(): TypeEtablisssement {
    return this._typeEtablissement;
  }

  set typeEtablissement(value: TypeEtablisssement) {
    this._typeEtablissement = value;
  }

  get specialiteEtablissementList(): SpecialiteEtablissement[] {
    return this._specialiteEtablissementList;
  }

  set specialiteEtablissementList(value: SpecialiteEtablissement[]) {
    this._specialiteEtablissementList = value;
  }
}
