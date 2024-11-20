import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslatePipe],
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
