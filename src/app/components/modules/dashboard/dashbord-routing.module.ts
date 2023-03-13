import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PatientComponent} from "./patient/patient.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import {PaysComponent} from "./parametrage/pays/pays.component";
import {VilleComponent} from "./parametrage/ville/ville.component";
import {CommuneComponent} from "./parametrage/commune/commune.component";
import {TypeEtablissementComponent} from "./parametrage/type-etablissement/type-etablissement.component";
import {MedecinComponent} from "./parametrage/medecin/medecin.component";
import {SpecialiteComponent} from "./parametrage/specialite/specialite.component";
import {MaladieComponent} from "./parametrage/maladie/maladie.component";
import {SymptomeComponent} from "./parametrage/symptome/symptome.component";
import {AssistanceComponent} from "./assistance/assistance.component";
import {EtatblissementComponent} from "./parametrage/etablissement/etatblissement.component";
import {url_path} from "../../../constants/app.constant";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', title: url_path.APP_BASE_TITLE + ' | Dashboard', component: DashboardComponent},
      {path: 'patient',title: url_path.APP_BASE_TITLE + ' | Patients', component: PatientComponent},
      {path: 'consultation',title: url_path.APP_BASE_TITLE + ' | Consultations', component: ConsultationComponent},
      {path: 'aide',title: url_path.APP_BASE_TITLE + ' | Assistance', component: AssistanceComponent},
      {
        path: 'parametrage', children: [
          {path: 'pays',title: url_path.APP_BASE_TITLE + ' | Pays', component: PaysComponent},
          {path: 'ville',title: url_path.APP_BASE_TITLE + ' | Villes', component: VilleComponent},
          {path: 'commune',title: url_path.APP_BASE_TITLE + ' | Communes', component: CommuneComponent},
          {path: 'type-etablissement',title: url_path.APP_BASE_TITLE + ' | Type Etablissement', component: TypeEtablissementComponent},
          {path: 'etablissement',title: url_path.APP_BASE_TITLE + ' | Etablissements', component: EtatblissementComponent},
          {path: 'medecin',title: url_path.APP_BASE_TITLE + ' | Medecins', component: MedecinComponent},
          {path: 'specialite',title: url_path.APP_BASE_TITLE + ' | Specilités', component: SpecialiteComponent},
          {path: 'maladie',title: url_path.APP_BASE_TITLE + ' | Maladies', component: MaladieComponent},
          {path: 'symptome',title: url_path.APP_BASE_TITLE + ' | Symptomes', component: SymptomeComponent},
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule {
}
