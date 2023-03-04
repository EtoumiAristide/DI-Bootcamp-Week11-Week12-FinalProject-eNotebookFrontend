import {Personne} from "./personne";
import {TypeCompte} from "./type-compte";

export interface CompteUtilisateur {
  id: number,
  login: number,
  password: string,
  phraseRecup1: string,
  reponseRecup1: string,
  phraseRecup2: string,
  reponseRecup2: string,
  phraseRecup3: string,
  reponseRecup3: string,
  authentificationDoubleFacteur: boolean,
  personne: Personne,
  typeCompte: TypeCompte,

}
