import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string, 
  link: string, 
  active: boolean
};

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  siteLogo: string = 'KEN';
  menuList: Array<MenuItem> = [];
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const menuList = [
      {name: 'Home', link: '#home', active: true},
      {name: 'About', link: '#about', active: false},
      {name: 'Skills', link: '#skills', active: false},
      {name: 'Work', link: '#work', active: false},
      {name: 'Contact', link: '#contact', active: false},
    ];

    this.menuList = menuList;
  }

  toggle(val: boolean): void {
    this.show = val;
  }

  selectMenu(menuItem: MenuItem) {
    for(let menuItem of this.menuList) {
      if(menuItem.active) {
        menuItem.active = false;
        break;
      }
    }
    menuItem.active = true;
  }
}
