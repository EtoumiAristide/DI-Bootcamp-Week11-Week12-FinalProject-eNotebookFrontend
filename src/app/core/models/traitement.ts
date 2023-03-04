import {OrdonnanceMaladie} from "./ordonnance-maladie";

export interface Traitement {
  id: number,
  libelle: string,
  ordonnanceMaladie: OrdonnanceMaladie,
}
