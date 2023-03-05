import {Physique} from "./physique";
import {SpecialiteEtablissement} from "./specialite-etablissement";
import {Consultation} from "./consultation";

export class Medecin extends Physique {
  private _matricule: string;
  private _datePriseService: Date;
  private _specialiteEtablissement: SpecialiteEtablissement;
  private _consultationList: Consultation[];


  constructor() {
    super();
    this._matricule = "";
    this._datePriseService = new Date();
    this._specialiteEtablissement = new SpecialiteEtablissement();
    this._consultationList = [];
  }

  get matricule(): string {
    return this._matricule;
  }

  set matricule(value: string) {
    this._matricule = value;
  }

  get datePriseService(): Date {
    return this._datePriseService;
  }

  set datePriseService(value: Date) {
    this._datePriseService = value;
  }

  get specialiteEtablissement(): SpecialiteEtablissement {
    return this._specialiteEtablissement;
  }

  set specialiteEtablissement(value: SpecialiteEtablissement) {
    this._specialiteEtablissement = value;
  }

  get consultationList(): Consultation[] {
    return this._consultationList;
  }

  set consultationList(value: Consultation[]) {
    this._consultationList = value;
  }
}
