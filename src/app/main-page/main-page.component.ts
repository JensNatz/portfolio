import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { CredentialsSectionComponent } from './components/credentials-section/credentials-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeroSectionComponent, AboutSectionComponent, SkillsSectionComponent, ProjectsSectionComponent, CredentialsSectionComponent, ContactSectionComponent, ContactSectionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
