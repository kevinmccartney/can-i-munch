import { Injectable } from '@angular/core';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(fn, ...args): Promise<void> {
  await timeout(3000);
  return;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated$: Observable<boolean>;
  isAuthenticated: boolean;
  authenticationInFlight$: Observable<boolean>;
  authService: any;
  private _isAuthenticatedSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _authInFlightSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _router: Router, private _amplifyService: AmplifyService) {
    this.authService = this._amplifyService.auth();
    this.isAuthenticated$ = this._isAuthenticatedSubject$.asObservable();
    this.authenticationInFlight$ = this._authInFlightSubject$.asObservable();
  }

  async login(username: string, password: string): Promise<void | Error> {
    this._authInFlightSubject$.next(true);
    let success = false;
    try {
      const response = await this.authService.signIn(username, password);

      if (response) {
        this._isAuthenticatedSubject$.next(true);
        this.isAuthenticated = true;
        success = true;
        this._authInFlightSubject$.next(false);
      }
    } catch (e) {
      this._authInFlightSubject$.next(false);

      return e;
    }
  }

  logout(): void {
    this._isAuthenticatedSubject$
    .pipe(
      delay(3000),
      take(1)
    ).subscribe(() => {
      this._isAuthenticatedSubject$.next(false);
      this._router.navigateByUrl('/');
    });
  }
}
