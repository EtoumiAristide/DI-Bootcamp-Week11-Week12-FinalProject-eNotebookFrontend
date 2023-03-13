import {VilleData} from "./ville-data";

export class CommuneData {
  id: number;
  nom: string;
  ville: VilleData;


  constructor(id: number, nom: string, villeData: VilleData) {
    this.id = id;
    this.nom = nom;
    this.ville = villeData;
  }
}
