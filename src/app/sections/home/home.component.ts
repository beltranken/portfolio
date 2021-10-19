import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() { }

  downloadResume() {
    
  }
}
