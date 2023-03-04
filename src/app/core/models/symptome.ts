import {MaladieSypmtome} from "./maladie-sypmtome";

export interface Symptome {
  id: number,
  libelle: string
  maladieSymptomeList: MaladieSypmtome[],
}
