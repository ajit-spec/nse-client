import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../../components/login/login.component';
import { SigninComponent } from '../../components/signin/signin.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent, SendPasswordDialogComponent} from '../../components/register/register.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '../../components/change-password/change-password.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [LoginComponent, SigninComponent, RegisterComponent, ForgotPasswordComponent, ChangePasswordComponent,
    SendPasswordDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
