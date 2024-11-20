import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/project';
import { ProjectComponent } from './project/project.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectComponent, TranslatePipe],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      title: 'Join',
      img: 'join.jpg',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      demoLink: 'https://join.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'The Mad Scientist',
      img: 'game.jpg',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A 2D side-scroller game showcasing Object-Oriented Programming in JavaScript. Help the Mad Scientist defend his space lab against the invaders.',
      demoLink: 'https://join.com',
      githubLink: 'https://github.com'
    },
  ];
}
