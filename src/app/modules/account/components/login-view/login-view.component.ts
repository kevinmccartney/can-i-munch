import { Component } from '@angular/core';
import { AuthenticationService } from '@modules/core/services';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@modules/shared/components';

@Component({
  selector: 'cim-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent {
  public formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  get username() {
    return this.formGroup.get('username');
  }
  get password() {
    return this.formGroup.get('password');
  }

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _matSnackbar: MatSnackBar,
  ) {
  }

  async handleSubmission(event: Event) {
    event.preventDefault();

    if (this.formGroup.valid) {
      const {username, password} = this.formGroup.value;
      const loginAttemptError = await this._authenticationService.login(username, password);

      if (loginAttemptError) {
        this._matSnackbar.openFromComponent(SnackbarComponent, {
          data: {
            error: `${loginAttemptError.message}`,
          },
          panelClass: ['bg-warning-darker', 'min-w-lg'],
          duration: 5000,
        });
      } else {
        this._router.navigateByUrl('/')
      }
    }
  }
}
