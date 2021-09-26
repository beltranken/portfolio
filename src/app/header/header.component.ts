import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions } from '@angular/router';

interface MenuItem {
  icon: string,
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

  isActiveMatchOptions: IsActiveMatchOptions = {paths: 'exact', queryParams: 'ignored', fragment: 'exact', matrixParams: 'ignored'};
  siteLogo: string = 'KEN';
  menuList: Array<MenuItem> = [];
  show: boolean = false;

  constructor(route: ActivatedRoute) { }

  ngOnInit(): void {
    const menuList = [
      {icon: 'home', name: 'Home', link: 'home', active: true},
      {icon: 'user', name: 'About', link: 'about', active: false},
      {icon: 'book', name: 'Skills', link: 'skills', active: false},
      {icon: 'id-card', name: 'Experience', link: 'experiences', active: false},
      {icon: 'phone', name: 'Contact', link: 'contact', active: false},
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
