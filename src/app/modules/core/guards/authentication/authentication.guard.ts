import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '@modules/core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const url: string = state.url;

    return this.authService.isAuthenticated$.pipe(
      map((x: boolean) => this.checkLogin(x, url))
    );
  }

  checkLogin(isAuthed: boolean, url: string): boolean {
    let result = false;
    if (isAuthed) {
      result = true;
    } else {
      this.authService.redirectUrl = url;

      this.router.navigate(['/account/login']);
    }

    return result;
  }
}
