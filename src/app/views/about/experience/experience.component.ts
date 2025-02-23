import { Component } from '@angular/core';
import {ExperienceInterface} from './experience.interface';
import {experienceData} from './experience.data';
import {NgForOf} from '@angular/common';
import {UtilsService} from '../../../services/shared/utils.service';

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

  constructor(public utilService: UtilsService) {}

}
