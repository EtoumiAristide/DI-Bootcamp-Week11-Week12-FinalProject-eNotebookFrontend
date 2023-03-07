import {OrdonnanceMaladie} from "./ordonnance-maladie";

export class Traitement {
   id: number;
   libelle: string;
   ordonnanceMaladie: OrdonnanceMaladie;


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.ordonnanceMaladie = new OrdonnanceMaladie();
  }
}
