import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';

interface Experience  {
  pos: string,
  desc: string,
  year: string,
  type: 'Education' | 'Work',
  content: string
};

@Component({
  selector: '[app-experiences]',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @ViewChild('canvasPosition') canvasPosition!: ElementRef;
  display: boolean = false;
  title: string = 'Experience';
  experiences: Array<Experience> = [];
  selectedExperience: Experience = {} as Experience;

  constructor(public el:ElementRef) { }

  ngOnInit() {
    this.experiences = [
      {pos: 'Software Developer', desc: 'Shinra Software Solution Inc.', year: 'March 2015 - July 2019', type: 'Work', content: 'asdasdasdasd'},
      {pos: 'Advanced App Engineering Analyst', desc: 'Accenture Philippines', year: 'August 2019 - November 2020', type: 'Work', content: 'asdasdasdasd'},
      {pos: 'Mobile Application Developer', desc: 'Ahsay Operation Centre Limited', year: 'November 2020 - September 2021', type: 'Work', content: 'asdasdasdasd'},
      {pos: 'Front End Developer', desc: 'Loanworks Technologies', year: 'October 2021 - Present', type: 'Work', content: 'asdasdasdasd'}
    ];
  }

  learnMore(e: Event, experience: Experience) {
    e.preventDefault();
    this.selectedExperience = experience;
    this.display = true;
  }
}
