import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotFoundViewComponent, ViewWrapperComponent, ComingSoonComponent, SnackbarComponent, LoadingOverlayComponent } from './components';
import { AuthenticatedDirective, ViewWrapperDirective } from './directives';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  declarations: [
    NotFoundViewComponent,
    ViewWrapperDirective,
    ViewWrapperComponent,
    ComingSoonComponent,
    AuthenticatedDirective,
    SnackbarComponent,
    LoadingOverlayComponent,
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
    ComingSoonComponent,
    AuthenticatedDirective,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
    SnackbarComponent,
    LoadingOverlayComponent,
  ],
  entryComponents: [SnackbarComponent]
})
export class SharedModule {}
