import { Component } from '@angular/core';
import { SocialIconComponent } from '../social-icon/social-icon.component';
import { SocialIcon } from '../../../models/social-icon';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialIconComponent, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  year: number = new Date().getFullYear();

  socialIcons:SocialIcon[] = [
    {
      link: 'mailto:jens.natzschka@posteo.de',
      img: 'email.svg',
      alt: 'Email'
    },
    {
      link: 'https://github.com',
      img: 'github.svg',
      alt: 'GitHub'
    },{
      link: 'https://linkedin.com',
      img: 'linkedin.svg',
      alt: 'LinkedIn'
    }
  ]

}
