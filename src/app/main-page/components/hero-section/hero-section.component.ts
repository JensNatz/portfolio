import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialIcon } from '../../../models/social-icon';
import { SocialIconComponent } from '../../../shared/components/social-icon/social-icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent, SocialIconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  socialIcons:SocialIcon[] = [
    {
      link: 'mailto:jens.natzschka@posteo.de',
      img: 'email_blue.svg',
      alt: 'Email'
    },
    {
      link: 'https://github.com',
      img: 'github_blue.svg',
      alt: 'GitHub'
    },{
      link: 'https://linkedin.com',
      img: 'linkedin_blue.svg',
      alt: 'LinkedIn'
    }
  ]

}
