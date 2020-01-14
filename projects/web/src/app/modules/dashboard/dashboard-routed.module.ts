import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [
    DashboardViewComponent
  ],
  imports: [SharedModule, DashboardRoutingModule]
})
export class DashboardRoutedModule {}
