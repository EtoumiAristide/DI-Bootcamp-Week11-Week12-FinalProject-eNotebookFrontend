import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {url_path} from "../../../constants/app.constant";

const routes: Routes = [
  {path: 'login',title: url_path.APP_BASE_TITLE + ' | Login', component: LoginComponent,},
  {path: 'register',title: url_path.APP_BASE_TITLE + ' | Register', component: RegisterComponent,},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule {
}
