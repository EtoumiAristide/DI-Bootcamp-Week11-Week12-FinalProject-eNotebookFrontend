import {Physique} from "./physique";
import {Consultation} from "./consultation";
import {AntecedentMedical} from "./antecedent-medical";

export interface Patient extends Physique {
  consultationList: Consultation[],
  antecedentMedicalList: AntecedentMedical[],
}
