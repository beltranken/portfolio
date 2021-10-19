import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { MenuItem } from '../shared/models/MenuItem';
import { GlobalService } from '../shared/services/global.service';

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

  constructor(private location: Location, private globalService: GlobalService) { }

  ngOnInit(): void {
    const menuList = [
      {icon: 'home', name: 'Home', link: 'home', active: true},
      {icon: 'user', name: 'About', link: 'about', active: false},
      {icon: 'book', name: 'Skills', link: 'skills', active: false},
      {icon: 'id-card', name: 'Experience', link: 'experiences', active: false},
      {icon: 'phone', name: 'Contact', link: 'contact', active: false},
    ];

    this.menuList = menuList;

    this.location.onUrlChange(url => this.urlChange(url));
  }

  urlChange(url: string): void {
    const hash = url.substring(2, url.length);
    let nothing: boolean = true;
    for(let menuItem of this.menuList) {
      if(menuItem.link === hash) {
        menuItem.active = true;
        nothing = false;
        this.globalService.setActiveMenu(menuItem);
      } else {
        menuItem.active = false;
      }
    }

    if(nothing) {
      this.menuList[0].active = true;
    }
  }
}
