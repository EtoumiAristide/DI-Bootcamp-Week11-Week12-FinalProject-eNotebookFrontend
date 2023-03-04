import {Commune} from "./commune";
import {Personne} from "./personne";

export interface Adresse {
  id: number,
  quartier: string,
  rue: string,
  boitePostale: string,

  commune: Commune,

  personne: Personne,
}
