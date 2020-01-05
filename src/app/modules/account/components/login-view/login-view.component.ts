import { Component } from '@angular/core';
import { AuthenticationService } from '@modules/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'cim-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
  }

  async handleSubmission() {
    const loginAttempt = await this._authenticationService.login();

    if (loginAttempt) {
      this._router.navigateByUrl(this._authenticationService.redirectUrl || '');
    }
  }
}
