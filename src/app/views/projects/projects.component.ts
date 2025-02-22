import { Component } from '@angular/core';
import {ProjectsInterface} from './projects.interface';
import {projectsData} from './projects.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectsInterface[] = projectsData;
}
