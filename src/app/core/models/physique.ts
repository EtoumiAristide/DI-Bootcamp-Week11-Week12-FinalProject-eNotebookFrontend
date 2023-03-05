import {Personne} from "./personne";
import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export class Physique extends Personne {
  private _nom: string;
  private _prenoms: string;
  private _dateNaissance: Date;
  private _lieuNaissance: string;
  private _nomPrenomPere: string;
  private _nomPrenomMere: string;
  private _nomPersonneUrgence: string;
  private _contactPersonneUrgence: string;


  constructor() {
    super();
    this._nom = "";
    this._prenoms = "";
    this._dateNaissance = new Date();
    this._lieuNaissance = "";
    this._nomPrenomPere = "";
    this._nomPrenomMere = "";
    this._nomPersonneUrgence = "";
    this._contactPersonneUrgence = "";
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenoms(): string {
    return this._prenoms;
  }

  set prenoms(value: string) {
    this._prenoms = value;
  }

  get dateNaissance(): Date {
    return this._dateNaissance;
  }

  set dateNaissance(value: Date) {
    this._dateNaissance = value;
  }

  get lieuNaissance(): string {
    return this._lieuNaissance;
  }

  set lieuNaissance(value: string) {
    this._lieuNaissance = value;
  }

  get nomPrenomPere(): string {
    return this._nomPrenomPere;
  }

  set nomPrenomPere(value: string) {
    this._nomPrenomPere = value;
  }

  get nomPrenomMere(): string {
    return this._nomPrenomMere;
  }

  set nomPrenomMere(value: string) {
    this._nomPrenomMere = value;
  }

  get nomPersonneUrgence(): string {
    return this._nomPersonneUrgence;
  }

  set nomPersonneUrgence(value: string) {
    this._nomPersonneUrgence = value;
  }

  get contactPersonneUrgence(): string {
    return this._contactPersonneUrgence;
  }

  set contactPersonneUrgence(value: string) {
    this._contactPersonneUrgence = value;
  }
}
