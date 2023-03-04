import {Ville} from "./ville";

export interface Pays {
  id: number,
  nom: string
  code: string,
  villeList: Ville[],

}
