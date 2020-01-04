import { NgModule } from '@angular/core';
import { SendViewComponent } from './components';
import { SharedModule } from '@modules/shared';
import { MessagingRoutingModule } from './messaging-routing.module';

@NgModule({
  declarations: [
    SendViewComponent
  ],
  exports: [
    SendViewComponent
  ],
  imports: [
    SharedModule,
    MessagingRoutingModule
  ]
})
export class MessagingRoutedModule {}
