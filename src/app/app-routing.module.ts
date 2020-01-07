import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from '@modules/shared/components';
import { SharedModule } from '@modules/shared';
import { AuthenticationGuard } from '@modules/core/guards';

const routes: Routes = [
  {
    path: 'messaging',
    loadChildren: () => import('./modules/messaging').then(x => x.MessagingRoutedModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account').then(x => x.AccountRoutedModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users').then(x => x.UsersRoutedModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    loadChildren: () => import('./modules/dashboard').then(x => x.DashboardRoutedModule),
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
  imports: [RouterModule.forRoot(routes, { enableTracing: true }), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
