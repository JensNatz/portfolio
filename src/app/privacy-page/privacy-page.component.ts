import { Component } from '@angular/core';
import { LanguageSwitchComponent } from '../shared/components/language-switch/language-switch.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [LanguageSwitchComponent, TranslatePipe],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.scss'
})
export class PrivacyPageComponent {

}
