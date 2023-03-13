import {Personne} from "./personne";
import {Adresse} from "./adresse";
import {CompteUtilisateur} from "./compte-utilisateur";

export class Physique extends Personne {
  override nom: string;
   override prenoms: string;
   dateNaissance: Date;
   lieuNaissance: string;
   nomPrenomPere: string;
   nomPrenomMere: string;
   nomPersonneUrgence: string;
   contactPersonneUrgence: string;


  constructor() {
    super();
    this.nom = "";
    this.prenoms = "";
    this.dateNaissance = new Date();
    this.lieuNaissance = "";
    this.nomPrenomPere = "";
    this.nomPrenomMere = "";
    this.nomPersonneUrgence = "";
    this.contactPersonneUrgence = "";
  }
}
