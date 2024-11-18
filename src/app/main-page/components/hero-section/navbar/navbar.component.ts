import { Component, Renderer2 } from '@angular/core';
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
  constructor(private renderer: Renderer2) {};
  isMenuOpen = false;

  onMenuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
