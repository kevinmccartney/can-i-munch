import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendViewComponent } from './components';
import { AuthenticationGuard } from '@modules/core/guards';

const routes: Routes = [
  {
    path: 'send',
    component: SendViewComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule {}
