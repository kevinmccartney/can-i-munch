import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendViewComponent } from './components';

const routes: Routes = [
  {
    path: 'send',
    component: SendViewComponent
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
