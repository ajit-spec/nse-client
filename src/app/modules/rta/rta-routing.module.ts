import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParentClientComponent} from '../../components/rta-module-components/parent-client/parent-client.component';
import {NewClientComponent} from '../../components/rta-module-components/new-client/new-client.component';
import {NewClientConfirmComponent} from '../../components/rta-module-components/new-client-confirm/new-client-confirm.component';
import {NewClientStatusComponent} from '../../components/rta-module-components/new-client-status/new-client-status.component';
import {Service3Service} from '../../services/service3.service';

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
        component: NewClientStatusComponent,
        resolve: {
          clientstatusdata: Service3Service
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtaRoutingModule {
}
