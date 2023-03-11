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
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    ConsultationComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbCollapse,
  ]
})
export class DashboardModule {
}
