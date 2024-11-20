import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../../models/project';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  translateService = inject(TranslateService);
  private langChangeSubscription: Subscription | null = null;
  currentLanguage = this.translateService.currentLang;

  ngOnInit() {
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang; 
    });
  }

  ngOnDestroy() {
    this.langChangeSubscription?.unsubscribe();
  }

  @Input()index:number = 0;
  @Input()project:Project = {
    title: '',
    img: '',
    technologies: '',
    description_en: '',
    description_de: '',
    demoLink: '',
    githubLink: ''
  };
}
