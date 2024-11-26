import { Component } from '@angular/core';
import { LanguageSwitchComponent } from '../shared/components/language-switch/language-switch.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [LanguageSwitchComponent, TranslatePipe],
  templateUrl: './imprint-page.component.html',
  styleUrl: './imprint-page.component.scss'
})
export class ImprintPageComponent {

}
