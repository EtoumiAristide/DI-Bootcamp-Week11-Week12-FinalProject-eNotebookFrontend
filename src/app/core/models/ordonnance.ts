import {Consultation} from "./consultation";
import {OrdonnanceMaladie} from "./ordonnance-maladie";

export class Ordonnance {
   id: number;
   libelle: string;
   consultation: Consultation;
   ordonnanceMaladieList: OrdonnanceMaladie[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.consultation = new Consultation();
    this.ordonnanceMaladieList = [];
  }
}
