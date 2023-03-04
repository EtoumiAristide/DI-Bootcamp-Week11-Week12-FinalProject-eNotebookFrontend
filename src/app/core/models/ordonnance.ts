import {Consultation} from "./consultation";
import {OrdonnanceMaladie} from "./ordonnance-maladie";

export interface Ordonnance {
  id: number,
  libelle: string,
  consultation: Consultation
  ordonnanceMaladieList: OrdonnanceMaladie[],
}
