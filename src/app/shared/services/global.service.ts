import { Injectable, OnDestroy } from '@angular/core';
import { MenuItem, Position } from '../models';
import { BehaviorSubject } from 'rxjs';

/*
  not the best solution? but works
*/

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnDestroy {
  positions: Array<Position> = [];
  activeMenu: BehaviorSubject<MenuItem> = new BehaviorSubject({} as MenuItem);

  constructor() { }

  setActiveMenu(activeMenu: MenuItem) {
    if(activeMenu.name !== this.activeMenu.value.name){
      this.activeMenu.next(activeMenu);
    }
  }

  getPosition(name: string) {
    return this.positions.find(position => position.hash === name);
  }

  ngOnDestroy() {
    this.activeMenu.complete();
  }
}
