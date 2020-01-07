import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@modules/core/guards';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'full',
    data: {
      title: 'Dashboard'
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
export class DashboardRoutingModule {}
