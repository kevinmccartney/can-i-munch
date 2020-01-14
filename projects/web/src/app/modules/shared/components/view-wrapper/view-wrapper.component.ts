import { Component, Input } from '@angular/core';
import { AuthenticationService } from '@modules/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'cim-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss'],
})
export class ViewWrapperComponent {
  @Input() title: string;
  public isAuthed$: Observable<boolean>;
  public authIsInFlight$: Observable<boolean>;


  constructor(private _authenticationService: AuthenticationService) {
    this.isAuthed$ = this._authenticationService.isAuthenticated$;
    this.authIsInFlight$ = this._authenticationService.authenticationInFlight$;
  }
}
