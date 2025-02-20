import { Component } from '@angular/core';
import {SimpleButtonComponent} from '../../components/simple-button/simple-button.component';
import {NgIf} from '@angular/common';
import {AboutTextComponent} from './about-text/about-text.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';

@Component({
  selector: 'app-about',
  imports: [SimpleButtonComponent, NgIf, AboutTextComponent, EducationComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  activeButton: 'About me' | 'Education' | 'Experience' | 'Skills' = 'About me';

  setActiveButton(buttonText: 'About me' | 'Education' | 'Experience' | 'Skills'): void {
    this.activeButton = buttonText;
  }

  getClickEvent() {
    console.log('deu boa');
  }

}
