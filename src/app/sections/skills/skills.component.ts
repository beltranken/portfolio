import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/Skill';

@Component({
  selector: '[app-skills]',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills:Array<Skill> = []

  constructor() { }

  ngOnInit() {
    this.skills = [
      {icon: '', title: 'Web Development'},
      {icon: '', title: 'Software Development'},
      {icon: '', title: 'Mobile Development'},
      {icon: '', title: 'Database'}
    ];
  }

}
