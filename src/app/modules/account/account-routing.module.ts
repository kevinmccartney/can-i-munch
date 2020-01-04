import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileViewComponent, LoginViewComponent, CreateAccountViewComponent } from './components';
import { AuthenticationGuard } from '@modules/core/guards';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileViewComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginViewComponent
  },
  {
    path: 'create',
    component: CreateAccountViewComponent,
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
export class AccountRoutingModule {}
