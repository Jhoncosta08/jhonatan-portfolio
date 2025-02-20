import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SocialIconsComponent} from '../../components/social-icons/social-icons.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SocialIconsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
