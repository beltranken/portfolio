import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PositionService } from 'src/app/shared/services/position.service';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;

  constructor(public el: ElementRef, private position: PositionService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.position.setCoordinate(this.canvasPosition.nativeElement.getBoundingClientRect());
  }

  downloadResume() {
    window.open('assets/file/resume.docx', '_self');
  }
}
