import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { AboutComponent, ContactComponent, ExperiencesComponent, HomeComponent, SkillsComponent } from './sections';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(HomeComponent) homeElem!: HomeComponent;
  @ViewChild(AboutComponent) aboutElem!: AboutComponent;
  @ViewChild(SkillsComponent) skillsElem!: SkillsComponent;
  @ViewChild(ExperiencesComponent) experiencesElem!: ExperiencesComponent;
  @ViewChild(ContactComponent) contactElem!: ContactComponent;

  positions: Array<{top: any, hash: string}> = [];
  scrollTimeout: any;
  isScrolling: boolean = false

  constructor(private location: Location) { }

  ngOnInit() { 
  }

  ngAfterViewInit() {
    this.positions = [
      {
        top: this.contactElem.el,
        hash: 'contact'
      },
      {
        top: this.experiencesElem.el,
        hash: 'experiences'
      },
      {
        top: this.skillsElem.el,
        hash: 'skills'
      },
      {
        top: this.aboutElem.el,
        hash: 'about'
      },
      {
        top: this.homeElem.el,
        hash: 'home'
      }
    ];
  }

  @HostListener('document:scroll', ['$event'])
  scroll(e: Event) {
    if(window.pageYOffset && !this.isScrolling) {
      for(let position of this.positions) {
        if(window.pageYOffset > position.top.nativeElement.offsetTop-200) {
          this.location.go('#'+position.hash);
          break;
        }
      }
    }
  }

  ngOnDestroy() {
  }
}
