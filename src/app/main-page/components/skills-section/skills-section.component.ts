import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { GrowthIconComponent } from './growth-icon/growth-icon.component';
import AOS from 'aos';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [GrowthIconComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

  skills: Skill[] = [
    
    {
      title: 'HTML5',
      img: 'html5.svg'
    },
    {
      title: 'CSS3',
      img: 'css3.svg'
    },
    {
      title: 'JavaScript',
      img: 'javascript.svg'
    },
    {
      title: 'Angular',
      img: 'angular.svg'
    },
    {
      title: 'TypeScript',
      img: 'typescript.svg'
    },
    {
      title: 'SCSS',
      img: 'scss.svg'
    },
    {
      title: 'Firebase',
      img: 'firebase.svg'
    },
    {
      title: 'REST-API',
      img: 'restapi.svg'
    },
    {
      title: 'Git',
      img: 'git.svg'
    },
    {
      title: 'Scrum',
      img: 'scrum.svg'
    },
    {
      title: 'Getting Things<br/>Done®',
      img: 'gtd.svg'
    }
  ];

}
