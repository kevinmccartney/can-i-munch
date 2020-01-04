import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileViewComponent, LoginViewComponent, CreateAccountViewComponent } from './components';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileViewComponent
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
