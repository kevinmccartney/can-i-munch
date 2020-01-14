import { Injectable } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewTitleService {
  public title$: Observable<string>;
  private _titleSubject$: Subject<string> = new Subject();
  constructor(
    private _title: Title,
  ) {
    this.title$ = this._titleSubject$.asObservable();
  }

  setViewTitle(title: string) {
    const pagetitle = title ? `Can I Munch - ${title}` : `Can I Munch`;
    this._title.setTitle(pagetitle);
    this._titleSubject$.next(title);
  }
}
