import {Personne} from "./personne";
import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export interface Physique extends Personne {
  nom: string,
  prenoms: string,
  dateNaissance: Date,
  lieuNaissance: string,
  nomPrenomPere: string
  nomPrenomMere: string
  nomPersonneUrgence: string,
  contactPersonneUrgence: string,

}
