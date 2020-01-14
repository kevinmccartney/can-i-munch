import { Component } from '@angular/core';
import { transition, animate, state, trigger, style } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'cim-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  animations: [
    trigger(
      'openClose',
      [
        state('open', style({
          transform: 'rotateY(0deg)',
          color: 'var(--primary-color)'
        })),
        state('closed', style({
          transform: 'rotateY(180deg)',
          color: 'var(--accent-color)'
        })),
        transition('open => closed', [
          animate('1s')
        ]),
        transition('closed => open', [
          animate('1s')
        ]),
      ]
    )
  ]
})
export class LoadingOverlayComponent {
  public animationState: 'open' | 'closed' = 'closed';
  constructor() {
    interval(1000).subscribe(() => {
      this.animationState = this.animationState === 'open' ? 'closed' : 'open';
    });
  }
}
