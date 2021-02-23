import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from '../../components/login-module-components/login/login.component';
import {SigninComponent} from '../../components/login-module-components/signin/signin.component';
import {RegisterComponent, SendPasswordDialogComponent} from '../../components/login-module-components/register/register.component';
import {
  ForgotPasswordComponent,
  ForgotPasswordDialogComponent
} from '../../components/login-module-components/forgot-password/forgot-password.component';
import {ChangePasswordComponent} from '../../components/login-module-components/change-password/change-password.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, SigninComponent, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent,
    SendPasswordDialogComponent, ForgotPasswordDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
}
