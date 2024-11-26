import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-growth-icon',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './growth-icon.component.html',
  styleUrl: './growth-icon.component.scss'
})
export class GrowthIconComponent {

}
