import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";


@Component({
  selector: 'app-credentials-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './credentials-section.component.html',
  styleUrl: './credentials-section.component.scss'
})
export class CredentialsSectionComponent {

}
