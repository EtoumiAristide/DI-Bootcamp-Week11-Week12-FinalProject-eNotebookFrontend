import {Ordonnance} from "./ordonnance";
import {Maladie} from "./maladie";
import {Traitement} from "./traitement";

export interface OrdonnanceMaladie {
  ordonnance: Ordonnance,
  maladie: Maladie,
  traitementList: Traitement,
}
