import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared';
import { UsersViewComponent } from './components';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersViewComponent
  ],
  imports: [SharedModule, UsersRoutingModule]
})
export class UsersRoutedModule {}
