import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '[app-about]',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;
  experience: string = '';

  constructor(public el:ElementRef) { }

  ngOnInit() { 
    const dateStart = new Date(2015, 3, 26);
    const dateNow = new Date();
    const diffYears = dateNow.getFullYear() - dateStart.getFullYear();
    this.experience = diffYears + '+ years';
  }
}
