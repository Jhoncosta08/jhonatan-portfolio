import { Component } from '@angular/core';
import {UtilsService} from '../../../services/shared/utils.service';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  constructor(public utilService: UtilsService) {}
}
