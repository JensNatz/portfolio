import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { SocialIconComponent } from '../social-icon/social-icon.component';
import { SocialIcon } from '../../../models/social-icon';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialIconComponent, TranslatePipe, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  year: number = new Date().getFullYear();

  constructor(
    private router: Router,
    private location: Location
  ) {}

  socialIcons:SocialIcon[] = [
    {
      link: '#contact',
      img: 'email.svg',
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
      img: 'github.svg',
      alt: 'GitHub'
    },{
      link: 'https://www.linkedin.com/in/jens-natzschka-58366333b/',
      img: 'linkedin.svg',
      alt: 'LinkedIn'
    }
  ]

}
