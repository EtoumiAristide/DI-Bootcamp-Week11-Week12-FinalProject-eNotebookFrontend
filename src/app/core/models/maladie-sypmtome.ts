import {Maladie} from "./maladie";
import {Symptome} from "./symptome";

export class MaladieSypmtome {
  maladie: Maladie;
  symptome: Symptome;


  constructor() {
    this.maladie = new Maladie();
    this.symptome = new Symptome();
  }
}
