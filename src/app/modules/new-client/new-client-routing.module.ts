import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewClientComponent} from '../../components/new-client/new-client.component';
import {NewClientConfirmComponent} from '../../components/new-client-confirm/new-client-confirm.component';
import {NewClientStatusComponent} from '../../components/new-client-status/new-client-status.component';
import {ParentClientComponent} from '../../components/parent-client/parent-client.component';

const routes: Routes = [
  {
    path: '',
    component: ParentClientComponent,
    children: [
      {
        path: '',
        component: NewClientComponent
      },
      {
        path: 'confirm',
        component: NewClientConfirmComponent
      },
      {
        path: 'status',
        component: NewClientStatusComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewClientRoutingModule { }
