import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../../components/login-module-components/login/login.component';
import {SigninComponent} from '../../components/login-module-components/signin/signin.component';
import {RegisterComponent} from '../../components/login-module-components/register/register.component';
import {ForgotPasswordComponent} from '../../components/login-module-components/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from '../../components/login-module-components/change-password/change-password.component';
import {Guard1Guard} from '../../guards/guard1.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
        // canActivate: [Guard1Guard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [Guard1Guard]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        // canActivate: [Guard1Guard]
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
