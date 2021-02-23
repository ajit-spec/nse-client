import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtaRoutingModule } from './rta-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NewClientComponent} from '../../components/rta-module-components/new-client/new-client.component';
import {NewClientConfirmComponent} from '../../components/rta-module-components/new-client-confirm/new-client-confirm.component';
import {NewClientStatusComponent} from '../../components/rta-module-components/new-client-status/new-client-status.component';
import {ParentClientComponent} from '../../components/rta-module-components/parent-client/parent-client.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [NewClientComponent, NewClientConfirmComponent, NewClientStatusComponent, ParentClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RtaRoutingModule
  ]
})
export class RtaModule { }
