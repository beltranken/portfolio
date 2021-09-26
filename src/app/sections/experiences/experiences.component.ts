import { Component, ElementRef, OnInit } from '@angular/core';

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

  display: boolean = false;
  title: string = 'Experience';
  experiences: Array<Experience> = [];
  selectedExperience: Experience = {} as Experience;

  constructor(public el:ElementRef) { }

  ngOnInit() {
    this.experiences = [
      {pos: 'Bachelor of Science in Information technology', desc: 'Our Lady of Fatima University', year: 'June 2011 - March 2015', type: 'Education', content: 'asdasdasdasdasd'},
      {pos: 'Software Developer', desc: 'Shinra Software Solution Inc.', year: 'March 2015 - July 2019', type: 'Work', content: 'asdasdasdasd'},
      {pos: 'Advanced App Engineering Analyst', desc: 'Accenture Philippines', year: 'August 2019 - November 2020', type: 'Work', content: 'asdasdasdasd'},
      {pos: 'Mobile Application Developer', desc: 'Ahsay Operation Centre Limited', year: 'November 2020 - September 2021', type: 'Work', content: 'asdasdasdasd'}
    ];
  }

  learnMore(e: Event, experience: Experience) {
    e.preventDefault();
    this.selectedExperience = experience;
    this.display = true;
  }
}
