import {Ordonnance} from "./ordonnance";
import {Maladie} from "./maladie";
import {Traitement} from "./traitement";

export class OrdonnanceMaladie {
   ordonnance: Ordonnance;
   maladie: Maladie;
   traitementList: Traitement[];


  constructor() {
    this.ordonnance = new Ordonnance();
    this.maladie = new Maladie();
    this.traitementList = [];
  }
}
