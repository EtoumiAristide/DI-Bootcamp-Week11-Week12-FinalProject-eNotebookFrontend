import {Ordonnance} from "./ordonnance";
import {Maladie} from "./maladie";
import {Traitement} from "./traitement";

export class OrdonnanceMaladie {
  private _ordonnance: Ordonnance;
  private _maladie: Maladie;
  private _traitementList: Traitement;


  constructor() {
    this._ordonnance = new Ordonnance();
    this._maladie = new Maladie();
    this._traitementList = [];
  }

  get ordonnance(): Ordonnance {
    return this._ordonnance;
  }

  set ordonnance(value: Ordonnance) {
    this._ordonnance = value;
  }

  get maladie(): Maladie {
    return this._maladie;
  }

  set maladie(value: Maladie) {
    this._maladie = value;
  }

  get traitementList(): Traitement {
    return this._traitementList;
  }

  set traitementList(value: Traitement) {
    this._traitementList = value;
  }
}
