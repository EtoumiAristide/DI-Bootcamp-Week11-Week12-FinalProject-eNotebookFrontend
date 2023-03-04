import {Specialite} from "./specialite";
import {OrdonnanceMaladie} from "./ordonnance-maladie";
import {MaladieSypmtome} from "./maladie-sypmtome";

export interface Maladie {
  id: number,
  libelle: string,
  specialite: Specialite,
  ordonnanceMaladieList: OrdonnanceMaladie[]
  maladieSymptomeList: MaladieSypmtome[],
}
