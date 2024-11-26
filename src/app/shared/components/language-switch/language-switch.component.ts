import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss'
})
export class LanguageSwitchComponent {
  private translateService = inject(TranslateService);
  languages: string[];
  currentLanguage = this.translateService.currentLang;

  constructor(){
    this.languages = this.translateService.getLangs();   
    this.languages.reverse(); 
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.currentLanguage = language;    
  }
}
