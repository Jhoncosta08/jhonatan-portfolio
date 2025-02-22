import { Component } from '@angular/core';
import {SkillsInterface} from './skills.interface';
import {skillsData} from './skills.data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: SkillsInterface[] = skillsData;
}
