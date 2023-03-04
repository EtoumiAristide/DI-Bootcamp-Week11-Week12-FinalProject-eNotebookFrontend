import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export interface Personne {
  id: number,
  tel1: string,
  tel2: string,
  tel3: string
  email: string,
  adresseList: Adresse[],
  compteUtilsateurList: CompteUtilisateur[],
}
