import { Component, inject } from '@angular/core';
import { CredentialEntry } from '../../../models/credential-entry';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-credentials-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './credentials-section.component.html',
  styleUrl: './credentials-section.component.scss'
})
export class CredentialsSectionComponent {

  translateService = inject(TranslateService);
  private langChangeSubscription: Subscription | null = null;
  currentLanguage = this.translateService.currentLang;


  credentials:CredentialEntry[] = [
    {
      name: 'Elias Müller',
      projectName: 'Join',
      text_en: 'Jens is a reliable and friendly person. He works in a structured way and writes clean code. I highly recommend him as a colleague.',
      text_de: 'Jens ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt cleanen Code. Ich kann ihn als Kollegen wärmstens empfehlen.'
    },
    {
      name: 'Florian Schneider',
      projectName: 'Join',
      text_en: 'Jens transforms complex requirements into user-friendly front-end solutions and communicates clearly within the team. I highly recommend him for any project.',
      text_de: 'Jens setzt komplexe Anforderungen in benutzerfreundliche Front-End-Lösungen um und kommuniziert klar im Team. Ich empfehle ihn gerne für jedes Projekt.'
    },
    {
      name: 'Noha Reintz',
      projectName: 'DA Bubble',
      text_en: 'Jens is a dedicated developer who delivers high-quality results under pressure. He is a valuable asset to any team.',
      text_de: 'Jens ist ein engagierter Entwickler, der auch unter Druck qualitativ hochwertige Ergebnisse liefert. Er ist eine wertvolle Bereicherung für jedes Team.'
    },
  ];

  ngOnInit() {
    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang; 
    });
  }

  ngOnDestroy() {
    this.langChangeSubscription?.unsubscribe();
  }
}
