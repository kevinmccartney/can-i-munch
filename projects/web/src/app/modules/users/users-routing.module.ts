import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@modules/core/guards';
import { UsersViewComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsersViewComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
    data: {
      title: 'Users'
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
export class UsersRoutingModule {}
