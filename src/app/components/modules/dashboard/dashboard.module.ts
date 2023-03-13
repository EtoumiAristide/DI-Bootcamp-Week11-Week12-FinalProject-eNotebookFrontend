import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {DashbordRoutingModule} from "./dashbord-routing.module";
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle
} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConsultationComponent} from './consultation/consultation.component';
import {PatientComponent} from './patient/patient.component';
import {PaysComponent} from './parametrage/pays/pays.component';
import {VilleComponent} from './parametrage/ville/ville.component';
import {CommuneComponent} from './parametrage/commune/commune.component';
import {TypeEtablissementComponent} from './parametrage/type-etablissement/type-etablissement.component';
import {EtatblissementComponent} from './parametrage/etablissement/etatblissement.component';
import {MedecinComponent} from './parametrage/medecin/medecin.component';
import {SpecialiteComponent} from './parametrage/specialite/specialite.component';
import {MaladieComponent} from './parametrage/maladie/maladie.component';
import {SymptomeComponent} from './parametrage/symptome/symptome.component';
import {AssistanceComponent} from './assistance/assistance.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    ConsultationComponent,
    PatientComponent,
    PaysComponent,
    VilleComponent,
    CommuneComponent,
    TypeEtablissementComponent,
    EtatblissementComponent,
    MedecinComponent,
    SpecialiteComponent,
    MaladieComponent,
    SymptomeComponent,
    AssistanceComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbCollapse,
    FormsModule
  ]
})
export class DashboardModule {
}
