import {Pays} from "./pays";
import {Commune} from "./commune";

export interface Ville {
  id: number,
  nom: string
  pays: Pays,
  communeList: Commune[],
}
