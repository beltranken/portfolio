import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AboutComponent, ContactComponent, ExperiencesComponent, HomeComponent, SkillsComponent } from './sections';
import { Position } from './shared/models/Position';
import { GlobalService } from './shared/services/global.service';
import { HeaderComponent } from './header/header.component';
import { debounce } from './shared/_helper/debounce.decorator';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(HeaderComponent) headerElem!: HeaderComponent;
  @ViewChild(HomeComponent) homeElem!: HomeComponent;
  @ViewChild(AboutComponent) aboutElem!: AboutComponent;
  @ViewChild(SkillsComponent) skillsElem!: SkillsComponent;
  @ViewChild(ExperiencesComponent) experiencesElem!: ExperiencesComponent;
  @ViewChild(ContactComponent) contactElem!: ContactComponent;

  positions: Array<Position> = [];
  scrollTimeout: any;
  isScrolling: boolean = false
  curr: string = '';

  constructor(private location: Location, private globalService: GlobalService) { }

  ngOnInit() { 
  }

  ngAfterViewInit() {
    this.positions = [
      {
        top: this.contactElem.el,
        hash: 'contact', 
        canvasPosition: this.contactElem.canvasPosition
      },
      {
        top: this.experiencesElem.el,
        hash: 'experiences', 
        canvasPosition: this.experiencesElem.canvasPosition
      },
      {
        top: this.skillsElem.el,
        hash: 'skills', 
        canvasPosition: this.skillsElem.canvasPosition
      },
      {
        top: this.aboutElem.el,
        hash: 'about', 
        canvasPosition: this.aboutElem.canvasPosition
      },
      {
        top: this.homeElem.el,
        hash: 'home', 
        canvasPosition: this.homeElem.canvasPosition
      }
    ];

    this.globalService.positions = this.positions;
  }

  @HostListener('window:scroll', ['$event'])
  scroll(e: Event) {
    if(window.pageYOffset && !this.isScrolling) {
      for(let position of this.positions) {
        if(window.pageYOffset >= position.top.nativeElement.offsetTop) {
          this.location.go('#'+position.hash);
          this.globalService.setCurrSection(position.hash);
          break;
        }
      }
    }
  }

  ngOnDestroy() {
  }
}
