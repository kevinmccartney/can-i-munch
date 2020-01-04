import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of, Subject, EMPTY } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated$: Observable<boolean>;
  private _isAuthenticatedSubject$: Subject<boolean> = new Subject();

  constructor() {
    this.isAuthenticated$ = this._isAuthenticatedSubject$.asObservable();

    of('mock')
      .pipe(delay(3000))
      .subscribe(() => {
      this._isAuthenticatedSubject$.next(false);
    });
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): void {
    this._isAuthenticatedSubject$
    .pipe(
      delay(3000),
      take(1)
    ).subscribe(() => {
      this._isAuthenticatedSubject$.next(true);
    });
  }

  logout(): void {
    this._isAuthenticatedSubject$
    .pipe(
      delay(3000),
      take(1)
    ).subscribe(() => {
      this._isAuthenticatedSubject$.next(false);
    });
  }
}
