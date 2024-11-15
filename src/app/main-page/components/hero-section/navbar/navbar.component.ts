import { Component } from '@angular/core';
import { BurgerIconComponent } from "../../../../shared/components/burger-icon/burger-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
