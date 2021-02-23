import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './modules/login/login.module';
import {SharedModule} from './modules/shared/shared.module';
import { WelcomeComponent } from './components/app-module-components/welcome/welcome.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DesktopHeaderComponent} from './components/app-module-components/desktop-header/desktop-header.component';
import {MobileHeaderComponent} from './components/app-module-components/mobile-header/mobile-header.component';
import { Directive1Directive } from './directives/directive1.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DesktopHeaderComponent,
    MobileHeaderComponent,
    Directive1Directive,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
