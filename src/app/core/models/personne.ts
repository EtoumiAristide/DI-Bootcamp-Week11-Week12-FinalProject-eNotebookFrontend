import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export class Personne {
  private _id: number;
  private _tel1: string;
  private _tel2: string;
  private _tel3: string;
  private _email: string;
  private _adresseList: Adresse[];
  private _compteUtilsateurList: CompteUtilisateur[];


  constructor() {
    this._id = 0;
    this._tel1 = "";
    this._tel2 = "";
    this._tel3 = "";
    this._email = "";
    this._adresseList = [];
    this._compteUtilsateurList = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tel1(): string {
    return this._tel1;
  }

  set tel1(value: string) {
    this._tel1 = value;
  }

  get tel2(): string {
    return this._tel2;
  }

  set tel2(value: string) {
    this._tel2 = value;
  }

  get tel3(): string {
    return this._tel3;
  }

  set tel3(value: string) {
    this._tel3 = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get adresseList(): Adresse[] {
    return this._adresseList;
  }

  set adresseList(value: Adresse[]) {
    this._adresseList = value;
  }

  get compteUtilsateurList(): CompteUtilisateur[] {
    return this._compteUtilsateurList;
  }

  set compteUtilsateurList(value: CompteUtilisateur[]) {
    this._compteUtilsateurList = value;
  }
}
