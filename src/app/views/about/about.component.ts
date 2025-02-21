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
  activeButton: 'Sobre' | 'Educação' | 'Experiência' | 'Habilidades' | 'Idiomas' = 'Sobre';

  setActiveButton(buttonText: 'Sobre' | 'Educação' | 'Experiência' | 'Habilidades' | 'Idiomas'): void {
    this.activeButton = buttonText;
  }

  getClickEvent() {
    console.log('deu boa');
  }

  downloadPDF(): void {
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = 'assets/cv/pt-br/Jhonatan Silva da Costa - CV.pdf';
    link.download = 'jhonatan costa - CV.pdf';
    link.click();
  }

}
