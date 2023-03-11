import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'authentification',
    loadChildren: () => import('./components/modules/authentification/authentification.module').then(m => m.AuthentificationModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: "full"
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
