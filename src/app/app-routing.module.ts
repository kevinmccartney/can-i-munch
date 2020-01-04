import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from '@modules/shared/components';
import { SharedModule } from '@modules/shared';


const routes: Routes = [
  {
    path: 'messaging',
    loadChildren: () => import('./modules/messaging').then(x => x.MessagingRoutedModule)
  },
  // {
  //   path: 'users'
  // },
  // {
  //   path: 'admin'
  // },
  {
    path: 'account',
    loadChildren: () => import('./modules/account').then(x => x.AccountRoutedModule)
  },
  {
    path: '',
    redirectTo: '/messaging/send',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
  {
    path: 'not-found',
    component: NotFoundViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
