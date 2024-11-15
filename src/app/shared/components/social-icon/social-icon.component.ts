import { Component, Input } from '@angular/core';
import { SocialIcon } from '../../../models/social-icon';

@Component({
  selector: 'app-social-icon',
  standalone: true,
  imports: [],
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.scss'
})
export class SocialIconComponent {

  @Input()icon!:SocialIcon;

}
