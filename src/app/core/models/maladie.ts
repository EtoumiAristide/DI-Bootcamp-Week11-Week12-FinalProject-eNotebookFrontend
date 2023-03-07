import {Specialite} from "./specialite";
import {OrdonnanceMaladie} from "./ordonnance-maladie";
import {MaladieSypmtome} from "./maladie-sypmtome";

export class Maladie {
   id: number;
   libelle: string;
   specialite: Specialite;
   ordonnanceMaladieList: OrdonnanceMaladie[];
   maladieSymptomeList: MaladieSypmtome[];


  constructor() {
    this.id = 0;
    this.libelle = "";
    this.specialite = new Specialite();
    this.ordonnanceMaladieList = [];
    this.maladieSymptomeList = [];
  }
}
