import {Physique} from "./physique";
import {Consultation} from "./consultation";
import {AntecedentMedical} from "./antecedent-medical";

export class Patient extends Physique {
  private _consultationList: Consultation[];
  private _antecedentMedicalList: AntecedentMedical[];


  constructor() {
    super();
    this._consultationList = [];
    this._antecedentMedicalList = [];
  }


  get consultationList(): Consultation[] {
    return this._consultationList;
  }

  set consultationList(value: Consultation[]) {
    this._consultationList = value;
  }

  get antecedentMedicalList(): AntecedentMedical[] {
    return this._antecedentMedicalList;
  }

  set antecedentMedicalList(value: AntecedentMedical[]) {
    this._antecedentMedicalList = value;
  }
}
