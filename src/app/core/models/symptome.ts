import {MaladieSypmtome} from "./maladie-sypmtome";

export class Symptome {
   id: number;
   libelle: string;
   maladieSymptomeList: MaladieSypmtome[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.maladieSymptomeList = [];
  }
}
