import { Component } from '@angular/core';
import {ProjectsInterface} from './projects.interface';
import {projectsData} from './projects.data';
import {NgClass, NgForOf} from '@angular/common';
import {TextListComponent} from '../../components/text-list/text-list.component';
import {UtilsService} from '../../services/shared/utils.service';

@Component({
  selector: 'app-projects',
  imports: [NgForOf, NgClass, TextListComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../shared/scss/hover-effects.scss']
})
export class ProjectsComponent {
  projects: ProjectsInterface[] = projectsData;

  constructor(public utilService: UtilsService) {}
}
