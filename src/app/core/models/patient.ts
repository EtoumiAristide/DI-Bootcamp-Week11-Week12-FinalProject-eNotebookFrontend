import {Physique} from "./physique";
import {Consultation} from "./consultation";
import {AntecedentMedical} from "./antecedent-medical";

export class Patient extends Physique {
   consultationList: Consultation[];
   antecedentMedicalList: AntecedentMedical[];


  constructor() {
    super();
    this.consultationList = [];
    this.antecedentMedicalList = [];
  }
}
