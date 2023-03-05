import {MaladieSypmtome} from "./maladie-sypmtome";

export class Symptome {
  private _id: number;
  private _libelle: string;
  private _maladieSymptomeList: MaladieSypmtome[];


  constructor() {
    this._id = 0;
    this._libelle = "";
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

  get maladieSymptomeList(): MaladieSypmtome[] {
    return this._maladieSymptomeList;
  }

  set maladieSymptomeList(value: MaladieSypmtome[]) {
    this._maladieSymptomeList = value;
  }
}
