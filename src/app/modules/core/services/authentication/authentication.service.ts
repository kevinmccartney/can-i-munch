import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  private _isAuthenticatedSubject$: Subject<boolean> = new Subject();

  constructor(private _router: Router) {
    this.isAuthenticated$ = this._isAuthenticatedSubject$.asObservable();

    of('mock')
      .pipe(delay(3000))
      .subscribe(() => {
      this._isAuthenticatedSubject$.next(false);
      this.isAuthenticated = false;
    });
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  async login(): Promise<boolean> {
    await timeout(3000);

    this._isAuthenticatedSubject$.next(true);
    this.isAuthenticated = true;

    return true;
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
