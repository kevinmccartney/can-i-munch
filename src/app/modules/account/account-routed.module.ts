import { NgModule } from '@angular/core';
import { CreateAccountViewComponent, LoginViewComponent, ProfileViewComponent } from './components';
import { SharedModule } from '@modules/shared';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    CreateAccountViewComponent,
    LoginViewComponent,
    ProfileViewComponent
  ],
  imports: [SharedModule, AccountRoutingModule]
})
export class AccountRoutedModule {}
