import {Commune} from "./commune";
import {Personne} from "./personne";

export class Adresse {

   id: number;
   quartier: string;
   rue: string;
   boitePostale: string;
   commune: Commune;
   personne: Personne;

  constructor() {
    this.id = 0;
    this.quartier = "";
    this.rue = "0";
    this.boitePostale = "0";
    this.commune = new Commune();
    this.personne = new Personne();
  }
}
