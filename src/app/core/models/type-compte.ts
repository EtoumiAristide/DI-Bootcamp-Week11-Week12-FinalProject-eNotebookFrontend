import {CompteUtilisateur} from "./compte-utilisateur";

export class TypeCompte {
  private _id: number;
  private _libelle: string;
  private _compteUtilisateurList: CompteUtilisateur[];


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._compteUtilisateurList = [];
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

  get compteUtilisateurList(): CompteUtilisateur[] {
    return this._compteUtilisateurList;
  }

  set compteUtilisateurList(value: CompteUtilisateur[]) {
    this._compteUtilisateurList = value;
  }
}
