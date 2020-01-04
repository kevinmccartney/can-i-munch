import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NotFoundViewComponent } from './components';
import { ViewWrapperDirective } from './directives/view-wrapper';

@NgModule({
  imports: [
    MatCardModule
  ],
  declarations: [
    NotFoundViewComponent,
    ViewWrapperDirective
  ],
  exports: [
    NotFoundViewComponent,
    ViewWrapperDirective,
    MatCardModule
  ]
})
export class SharedModule {}
