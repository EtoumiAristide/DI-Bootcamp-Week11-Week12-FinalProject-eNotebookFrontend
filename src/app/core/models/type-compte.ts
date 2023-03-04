import {CompteUtilisateur} from "./compte-utilisateur";

export interface TypeCompte {
  id: number,
  libelle: string,
  compteUtilisateurList: CompteUtilisateur[],
}
