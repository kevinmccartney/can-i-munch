import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'cim-snackbar',
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private _snackbarRef: MatSnackBarRef<SnackbarComponent>) {

  }

  public handleDismiss() {
    this._snackbarRef.dismiss();
  }
}
