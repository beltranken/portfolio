import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

/*
  not the best solution? but works
*/

@Injectable({
  providedIn: 'root'
})
export class PositionService implements OnDestroy {

  rect$: BehaviorSubject<DOMRect> = new BehaviorSubject({} as DOMRect);

  constructor() { }

  setCoordinate(rect: DOMRect) {
    this.rect$.next(rect);
  }

  ngOnDestroy() {
    this.rect$.complete();
  }
}
