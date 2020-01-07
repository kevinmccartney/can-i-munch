import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewTitleService } from '@modules/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host { display: block; min-height: 100vh }']
})
export class AppComponent {
  public title$: Observable<string>;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _viewTitleService: ViewTitleService
  ) {
    this.title$ = this._viewTitleService.title$;
    this._router.events
      .pipe(
        filter(x => x instanceof NavigationEnd)
      ).subscribe((e) => {
        console.log(e);
        const getActiveRouteSnapshot = (activatedRoute: ActivatedRoute): ActivatedRouteSnapshot => {
          if (activatedRoute.children.length > 0) {
            const primaryRoute = activatedRoute.children.find(x => x.outlet === 'primary')
            return getActiveRouteSnapshot(primaryRoute);
          }

          return activatedRoute.snapshot;
        };

        const routeSnapshot = getActiveRouteSnapshot(this._route);
        const hasData = !!(routeSnapshot && routeSnapshot.data);

        let title: string | undefined;

        if (hasData) {
          title = routeSnapshot.data.title;
        }

        this._viewTitleService.setViewTitle(title);
      });
  }
}
