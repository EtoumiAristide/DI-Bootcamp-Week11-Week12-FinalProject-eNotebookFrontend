import {Physique} from "./physique";
import {SpecialiteEtablissement} from "./specialite-etablissement";
import {Consultation} from "./consultation";

export class Medecin extends Physique {
   matricule: string;
   datePriseService: string;
   specialiteEtablissement: SpecialiteEtablissement;
   consultationList: Consultation[];


  constructor() {
    super();
    this.matricule = "";
    this.datePriseService = "";
    this.specialiteEtablissement = new SpecialiteEtablissement();
    this.consultationList = [];
  }
}
