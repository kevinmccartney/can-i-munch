import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingViewComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: MessagingViewComponent,
    pathMatch: 'full',
    data: {
      title: 'Messaging'
    }
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
