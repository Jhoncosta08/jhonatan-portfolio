import { Component } from '@angular/core';
import {ExperienceInterface} from './experience.interface';
import {experienceData} from './experience.data';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: ExperienceInterface[] = experienceData;

  navigateToTheCompany(companyUrl: string) {
    window.open(companyUrl, '_blank');
  }
}
