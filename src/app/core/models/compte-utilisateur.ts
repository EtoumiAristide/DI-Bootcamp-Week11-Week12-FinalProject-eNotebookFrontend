import {Personne} from "./personne";
import {TypeCompte} from "./type-compte";

export class CompteUtilisateur {
   id: number;
   login: string;
   password: string;
   passwordConfirm: string;
   phraseRecup1: string;
   reponseRecup1: string;
   phraseRecup2: string;
   reponseRecup2: string;
   phraseRecup3: string;
   reponseRecup3: string;
   authentificationDoubleFacteur: boolean;
   personne: Personne;
   typeCompte: TypeCompte;

   checkCDU: boolean;


  constructor() {
    this.id = 0;
    this.login = "";
    this.password = "";
    this.passwordConfirm = "";
    this.phraseRecup1 = "";
    this.reponseRecup1 = "";
    this.phraseRecup2 = "";
    this.reponseRecup2 = "";
    this.phraseRecup3 = "";
    this.reponseRecup3 = "";
    this.authentificationDoubleFacteur = false;
    this.personne = new Personne();
    this.typeCompte = new TypeCompte();
    this.checkCDU = false;
  }
}
