import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialIcon } from '../../../models/social-icon';
import { SocialIconComponent } from '../../../shared/components/social-icon/social-icon.component';
import { TranslatePipe } from "@ngx-translate/core";
import AOS from 'aos';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent, SocialIconComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  socialIcons:SocialIcon[] = [
    {
      link: 'mailto:mail@jens-natzschka.com',
      img: 'email_blue.svg',
      alt: 'Email'
    },
    {
      link: 'https://github.com/JensNatz',
      img: 'github_blue.svg',
      alt: 'GitHub'
    },{
      link: 'https://linkedin.com',
      img: 'linkedin_blue.svg',
      alt: 'LinkedIn'
    }
  ];

  ngOnInit() {
    AOS.init({once: true});
  }
}
