import { Component } from '@angular/core';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {

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
    }
  ];

}
