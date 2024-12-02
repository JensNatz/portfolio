import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialIcon } from '../../../models/social-icon';
import { SocialIconComponent } from '../../../shared/components/social-icon/social-icon.component';
import { TranslatePipe } from "@ngx-translate/core";
import AOS from 'aos';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [NavbarComponent, SocialIconComponent, TranslatePipe],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
  ) {}

  socialIcons:SocialIcon[] = [
    {
      link: '#contact',
      img: 'email_blue.svg',
      alt: 'Email',
      onClick: async () => {
        if (this.location.path() !== '') {
          await this.router.navigate(['/']);
        }
        setTimeout(() => {
          const nameField = document.querySelector('#contact #name') as HTMLElement;
          if (nameField) {
            nameField.focus();
          }
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    },
    {
      link: 'https://github.com/JensNatz',
      img: 'github_blue.svg',
      alt: 'GitHub'
    },{
      link: 'https://www.linkedin.com/in/jens-natzschka-58366333b/',
      img: 'linkedin_blue.svg',
      alt: 'LinkedIn'
    }
  ];

  ngOnInit() {
    AOS.init({once: true});
  }
}
