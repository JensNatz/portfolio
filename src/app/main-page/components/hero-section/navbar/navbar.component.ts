import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerIconComponent } from "../../../../shared/components/burger-icon/burger-icon.component";
import { MobileNavmenuComponent } from '../../../../shared/components/mobile-navmenu/mobile-navmenu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerIconComponent, MobileNavmenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  onMenuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
