import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  imports: [],
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss', '../../shared/hover-effects.scss']
})
export class SocialIconsComponent {

  socialIconsRedirect(redirectUrl:'github' |'linkedin' | 'instagram'): Window | null  {
    switch (redirectUrl) {
      case 'github':
        return window.open('https://github.com/Jhoncosta08', '_blank');
      case 'linkedin':
        return window.open('https://www.linkedin.com/in/jhonatan-silva-da-costa', '_blank');
      case 'instagram':
        return window.open('https://www.instagram.com/jhonCosta08', '_blank');
    }
  }

}
