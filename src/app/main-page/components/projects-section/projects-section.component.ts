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
      description_en: 'A task management tool inspired by the Kanban system. Ideal for creating and organizing tasks, assigning contacts, categories, and more.',
      description_de: 'Ein Task-Management-Tool inspiriert vom Kanban-System. Geeignet zum Erstellen und organisieren von Aufgaben, zuweisen von Kontakten, Kategorien, uvm.',
      demoLink: 'https://join.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'The Mad Scientist',
      img: 'game.jpg',
      technologies: 'JavaScript | HTML | CSS',
      description_en: 'A 2D side-scroller game showcasing Object-Oriented Programming in JavaScript. Help the Mad Scientist defend his space lab against the invaders.',
      description_de: 'Ein 2D-Side-Scroller-Game auf Basis objektorientierter Programmierung in JavaScript. Hilf dem verrückten Professor, sein Weltraumlabor gegen die Eindringlinge zu verteidigen.',
      demoLink: 'https://join.com',
      githubLink: 'https://github.com'
    },
  ];
}
