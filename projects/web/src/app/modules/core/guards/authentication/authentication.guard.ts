import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '@modules/core/services';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const { isAuthenticated } = this.authService;

    return of(this.checkLogin(isAuthenticated));
  }

  checkLogin(isAuthed: boolean): boolean {
    let result = false;
    if (isAuthed) {
      result = true;
    } else {
      this.router.navigate(['/account/login']);
    }

    return result;
  }
}
