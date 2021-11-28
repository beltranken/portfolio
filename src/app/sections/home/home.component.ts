import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;

  out: boolean;
  tagline: string;
  subTaglines: Array<string>;

  constructor(public el: ElementRef, private globalService: GlobalService) { 
    this.out = false;
    this.tagline = 'I WRITE CODES.';
    this.subTaglines = [
      'Innovation is my passion',
      'Codes are running through my veins',
      '6+ years in creating solutions'
    ];
  }

  ngOnInit() { 
    this.globalService.setCurrSection('home');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.globalService.section.subscribe(data => {
        if(data === 'home') this.out = true;
        else this.out = false;
      });
    }, 0);
  }
}
