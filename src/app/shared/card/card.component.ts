import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../Skill';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  skill: Skill = {} as Skill;

  constructor() { }

  ngOnInit() {
  }

}
