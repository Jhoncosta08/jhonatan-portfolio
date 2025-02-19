import { Component } from '@angular/core';
import {HamburgerComponent} from './hamburger/hamburger.component';

@Component({
  selector: 'app-nav',
  imports: [HamburgerComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
