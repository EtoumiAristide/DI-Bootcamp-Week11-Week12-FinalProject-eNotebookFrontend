import {Personne} from "./personne";
import {TypeCompte} from "./type-compte";

export class CompteUtilisateur {
  private _id: number;
  private _login: string;
  private _password: string;
  private _passwordConfirm: string;
  private _phraseRecup1: string;
  private _reponseRecup1: string;
  private _phraseRecup2: string;
  private _reponseRecup2: string;
  private _phraseRecup3: string;
  private _reponseRecup3: string;
  private _authentificationDoubleFacteur: boolean;
  private _personne: Personne;
  private _typeCompte: TypeCompte;

  private _checkCDU: boolean;


  constructor() {
    this._id = 0;
    this._login = "";
    this._password = "";
    this._passwordConfirm = "";
    this._phraseRecup1 = "";
    this._reponseRecup1 = "";
    this._phraseRecup2 = "";
    this._reponseRecup2 = "";
    this._phraseRecup3 = "";
    this._reponseRecup3 = "";
    this._authentificationDoubleFacteur = false;
    this._personne = new Personne();
    this._typeCompte = new TypeCompte();
    this._checkCDU = false;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get passwordConfirm(): string {
    return this._passwordConfirm;
  }

  set passwordConfirm(value: string) {
    this._passwordConfirm = value;
  }

  get phraseRecup1(): string {
    return this._phraseRecup1;
  }

  set phraseRecup1(value: string) {
    this._phraseRecup1 = value;
  }

  get reponseRecup1(): string {
    return this._reponseRecup1;
  }

  set reponseRecup1(value: string) {
    this._reponseRecup1 = value;
  }

  get phraseRecup2(): string {
    return this._phraseRecup2;
  }

  set phraseRecup2(value: string) {
    this._phraseRecup2 = value;
  }

  get reponseRecup2(): string {
    return this._reponseRecup2;
  }

  set reponseRecup2(value: string) {
    this._reponseRecup2 = value;
  }

  get phraseRecup3(): string {
    return this._phraseRecup3;
  }

  set phraseRecup3(value: string) {
    this._phraseRecup3 = value;
  }

  get reponseRecup3(): string {
    return this._reponseRecup3;
  }

  set reponseRecup3(value: string) {
    this._reponseRecup3 = value;
  }

  get authentificationDoubleFacteur(): boolean {
    return this._authentificationDoubleFacteur;
  }

  set authentificationDoubleFacteur(value: boolean) {
    this._authentificationDoubleFacteur = value;
  }

  get personne(): Personne {
    return this._personne;
  }

  set personne(value: Personne) {
    this._personne = value;
  }

  get typeCompte(): TypeCompte {
    return this._typeCompte;
  }

  set typeCompte(value: TypeCompte) {
    this._typeCompte = value;
  }

  get checkCDU(): boolean {
    return this._checkCDU;
  }

  set checkCDU(value: boolean) {
    this._checkCDU = value;
  }
}
