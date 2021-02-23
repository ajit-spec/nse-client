import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoricalDataRoutingModule} from './historical-data-routing.module';
import {ParentClientHistoricalComponent} from '../../components/historical-data-module-components/parent-client-historical/parent-client-historical.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NewClientHistoricalComponent} from '../../components/historical-data-module-components/new-client-historical/new-client-historical.component';
import {NewClientConfirmHistoricalComponent} from '../../components/historical-data-module-components/new-client-confirm-historical/new-client-confirm-historical.component';
import {NewClientStatusHistoricalComponent} from '../../components/historical-data-module-components/new-client-status-historical/new-client-status-historical.component';


@NgModule({
  declarations: [ParentClientHistoricalComponent, NewClientHistoricalComponent,
    NewClientConfirmHistoricalComponent, NewClientStatusHistoricalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HistoricalDataRoutingModule
  ]
})
export class HistoricalDataModule {
}
