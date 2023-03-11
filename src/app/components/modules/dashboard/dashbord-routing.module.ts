import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import * as path from "path";
import {PatientComponent} from "./patient/patient.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'patient', component: PatientComponent},
      {path: 'consultation', component: PatientComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule {
}
