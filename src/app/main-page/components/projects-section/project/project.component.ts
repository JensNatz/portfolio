import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projectPadding = 'padding: 24px 54px';

  @Input()index:number = 0;
  @Input()project:Project = {
    title: '',
    img: '',
    technologies: '',
    description: '',
    demoLink: '',
    githubLink: ''
  };

}
