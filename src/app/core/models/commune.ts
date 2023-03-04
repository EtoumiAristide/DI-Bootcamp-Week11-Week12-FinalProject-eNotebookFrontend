import {Ville} from "./ville";
import {Adresse} from "./adresse";

export interface Commune {
  id: number,
  nom: string,
  ville: Ville,
  adresseList: Adresse[],
}
