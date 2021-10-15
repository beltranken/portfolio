import { Component, ElementRef, OnInit } from '@angular/core';
import { Skill } from '../../shared/models/Skill';

@Component({
  selector: '[app-skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:Array<Skill> = [];
  title: string = 'Skills';
  responsiveOptions: Array<any> = [];

  constructor(public el:ElementRef) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '900px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '769px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

  ngOnInit() {
    this.skills = [
      {icon: '', title: 'Frontend', list: ['Angular', 'Ionic', 'JavaScript', 'CSS/SCSS', 'HTML5']},
      {icon: '', title: 'Backend', list: ['NodeJS', 'PHP']},
      {icon: '', title: 'Database', list: ['MSSQL', 'MySQL', 'MongoDB']},
      {icon: '', title: 'Others', list: ['PowerBuilder', 'SFCC', 'Drupal']}
    ];
  }

  onSwipe(e: Event) {
    console.log(e);
  }
}
