import { Component } from '@angular/core';
import {SkillsInterface} from './skills.interface';
import {skillsData} from './skills.data';
import {NgForOf} from '@angular/common';
import {TextListComponent} from '../../../components/text-list/text-list.component';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf,
    TextListComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: SkillsInterface[] = skillsData;
}
