import {Specialite} from "./specialite";
import {OrdonnanceMaladie} from "./ordonnance-maladie";
import {MaladieSypmtome} from "./maladie-sypmtome";

export class Maladie {
  private _id: number;
  private _libelle: string;
  private _specialite: Specialite;
  private _ordonnanceMaladieList: OrdonnanceMaladie[];
  private _maladieSymptomeList: MaladieSypmtome[];


  constructor() {
    this._id = 0;
    this._libelle = "";
    this._specialite = new Specialite();
    this._ordonnanceMaladieList = [];
    this._maladieSymptomeList = [];
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

  get specialite(): Specialite {
    return this._specialite;
  }

  set specialite(value: Specialite) {
    this._specialite = value;
  }

  get ordonnanceMaladieList(): OrdonnanceMaladie[] {
    return this._ordonnanceMaladieList;
  }

  set ordonnanceMaladieList(value: OrdonnanceMaladie[]) {
    this._ordonnanceMaladieList = value;
  }

  get maladieSymptomeList(): MaladieSypmtome[] {
    return this._maladieSymptomeList;
  }

  set maladieSymptomeList(value: MaladieSypmtome[]) {
    this._maladieSymptomeList = value;
  }
}
