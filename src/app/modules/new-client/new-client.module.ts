import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClientRoutingModule } from './new-client-routing.module';
import { NewClientComponent } from '../../components/new-client/new-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { NewClientConfirmComponent } from '../../components/new-client-confirm/new-client-confirm.component';
import { NewClientStatusComponent } from '../../components/new-client-status/new-client-status.component';
import {SharedModule} from '../shared/shared.module';
import { DesktopHeaderComponent } from '../../components/desktop-header/desktop-header.component';
import { ParentClientComponent } from '../../components/parent-client/parent-client.component';


@NgModule({
  declarations: [NewClientComponent, NewClientConfirmComponent, NewClientStatusComponent, DesktopHeaderComponent, ParentClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    NewClientRoutingModule
  ]
})
export class NewClientModule { }
