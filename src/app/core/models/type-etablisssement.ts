import {Etablissement} from "./etablissement";

export interface TypeEtablisssement {
  id: number,
  libelle: string,
  etablissementList: Etablissement[],
}
