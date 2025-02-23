import { Component } from '@angular/core';
import {SimpleButtonComponent} from '../../components/simple-button/simple-button.component';
import {NgIf} from '@angular/common';
import {AboutTextComponent} from './about-text/about-text.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {SkillsComponent} from './skills/skills.component';
import {LanguagesComponent} from './languages/languages.component';

@Component({
  selector: 'app-about',
  imports: [SimpleButtonComponent, NgIf, AboutTextComponent, EducationComponent, ExperienceComponent, SkillsComponent, LanguagesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  activeButton: 'About' | 'Education' | 'Experience' | 'Skills' | 'Languages' = 'About';

  setActiveButton(buttonText: 'About' | 'Education' | 'Experience' | 'Skills' | 'Languages'): void {
    this.activeButton = buttonText;
  }

  downloadPDF(): void {
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = 'assets/cv/Jhonatan Costa - CV.pdf';
    link.download = 'jhonatan costa - CV.pdf';
    link.click();
  }

}
