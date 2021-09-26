import { Component, OnInit, AfterViewInit, ElementRef, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent, ContactComponent, ExperiencesComponent, HomeComponent, SkillsComponent } from './sections';
import { debounce } from './shared/_helper/debounce.decorator';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HomeComponent) homeElem!: HomeComponent;
  @ViewChild(AboutComponent) aboutElem!: AboutComponent;
  @ViewChild(SkillsComponent) skillsElem!: SkillsComponent;
  @ViewChild(ExperiencesComponent) experiencesElem!: ExperiencesComponent;
  @ViewChild(ContactComponent) contactElem!: ContactComponent;

  positions: Array<{top: any, hash: string}> = [];

  constructor(private router: Router) { }

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
  //@debounce(100)
  scroll(e: Event) {
    if(window.pageYOffset) {
      for(let position of this.positions) {
        if(window.pageYOffset > position.top.nativeElement.offsetTop-200) {
          this.router.navigate(['/'], {fragment: position.hash})
          break;
        }
      }
    }
  }
}
