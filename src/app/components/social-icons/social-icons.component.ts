import { Component } from '@angular/core';
import {UtilsService} from '../../services/shared/utils.service';

@Component({
  selector: 'app-social-icons',
  imports: [],
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss', '../../shared/scss/hover-effects.scss']
})
export class SocialIconsComponent {

  constructor(public utilService: UtilsService) {
  }

  socialIconsRedirect(redirectUrl:'github' |'linkedin' | 'instagram'): Window | null  {
    switch (redirectUrl) {
      case 'github':
        return this.utilService.openInNewTab('https://github.com/Jhoncosta08');
      case 'linkedin':
        return this.utilService.openInNewTab('https://www.linkedin.com/in/jhonatan-silva-da-costa');
      case 'instagram':
        return this.utilService.openInNewTab('https://www.instagram.com/jhonCosta08');
    }
  }

}
