import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login-module-components/login/login.component';
import {WelcomeComponent} from './components/app-module-components/welcome/welcome.component';
import {Guard1Guard} from './guards/guard1.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canLoad: [Guard1Guard]
  },
  {
    path: 'rta/client',
    loadChildren: () => import('./modules/rta/rta.module').then(m => m.RtaModule),
    canLoad: [Guard1Guard]
  },
  {
    path: 'historical/client',
    loadChildren: () => import('./modules/historical-data/historical-data.module').then(m => m.HistoricalDataModule),
    canLoad: [Guard1Guard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
