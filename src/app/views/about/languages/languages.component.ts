import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  openInNewTab(imageSrc: string) {
    window.open(imageSrc, '_blank');
  }
}
