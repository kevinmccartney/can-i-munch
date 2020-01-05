import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundViewComponent, ViewWrapperComponent } from './components';
import { ViewWrapperDirective } from './directives/view-wrapper';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
  ],
  declarations: [
    NotFoundViewComponent,
    ViewWrapperDirective,
    ViewWrapperComponent
  ],
  exports: [
    NotFoundViewComponent,
    ViewWrapperDirective,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ViewWrapperComponent,
    MatIconModule,
  ]
})
export class SharedModule {}
