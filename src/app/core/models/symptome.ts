import {MaladieSypmtome} from "./maladie-sypmtome";
import {jsonIgnore} from "json-ignore";

export class Symptome {
   id: number;
   libelle: string;
   @jsonIgnore()
   maladieSymptomeList: MaladieSypmtome[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.maladieSymptomeList = [];
  }
}
