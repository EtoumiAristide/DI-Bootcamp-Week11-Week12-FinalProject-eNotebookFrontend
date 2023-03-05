import {Specialite} from "./specialite";
import {Etablissement} from "./etablissement";
import {Medecin} from "./medecin";

export class SpecialiteEtablissement {
  private _specialite: Specialite;
  private _etablissement: Etablissement;
  private _medecinList: Medecin[];


  constructor() {
    this._specialite = new Specialite();
    this._etablissement = new Etablissement();
    this._medecinList = [];
  }


  get specialite(): Specialite {
    return this._specialite;
  }

  set specialite(value: Specialite) {
    this._specialite = value;
  }

  get etablissement(): Etablissement {
    return this._etablissement;
  }

  set etablissement(value: Etablissement) {
    this._etablissement = value;
  }

  get medecinList(): Medecin[] {
    return this._medecinList;
  }

  set medecinList(value: Medecin[]) {
    this._medecinList = value;
  }
}
