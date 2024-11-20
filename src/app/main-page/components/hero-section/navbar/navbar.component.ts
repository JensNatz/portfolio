import { Component, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerIconComponent } from "../../../../shared/components/burger-icon/burger-icon.component";
import { MobileNavmenuComponent } from '../../../../shared/components/mobile-navmenu/mobile-navmenu.component';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerIconComponent, MobileNavmenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private translateService = inject(TranslateService);
  isMenuOpen = false;

  constructor(private renderer: Renderer2) {};

  onMenuToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
