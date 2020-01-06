import { NgModule } from '@angular/core';
import { MessagingViewComponent } from './components';
import { SharedModule } from '@modules/shared';
import { MessagingRoutingModule } from './messaging-routing.module';

@NgModule({
  declarations: [
    MessagingViewComponent
  ],
  exports: [
    MessagingViewComponent
  ],
  imports: [
    SharedModule,
    MessagingRoutingModule
  ]
})
export class MessagingRoutedModule {}
