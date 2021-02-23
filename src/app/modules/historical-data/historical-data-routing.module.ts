import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentClientHistoricalComponent} from '../../components/historical-data-module-components/parent-client-historical/parent-client-historical.component';
import {NewClientHistoricalComponent} from '../../components/historical-data-module-components/new-client-historical/new-client-historical.component';
import {NewClientConfirmHistoricalComponent} from '../../components/historical-data-module-components/new-client-confirm-historical/new-client-confirm-historical.component';
import {NewClientStatusHistoricalComponent} from '../../components/historical-data-module-components/new-client-status-historical/new-client-status-historical.component';

const routes: Routes = [
  {
    path: '',
    component: ParentClientHistoricalComponent,
    children: [
      {
        path: '',
        component: NewClientHistoricalComponent
      },
      {
        path: 'confirm',
        component: NewClientConfirmHistoricalComponent
      },
      {
        path: 'status',
        component: NewClientStatusHistoricalComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalDataRoutingModule { }
