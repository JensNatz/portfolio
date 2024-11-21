import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerIconComponent } from "../../../../shared/components/burger-icon/burger-icon.component";
import { MobileNavmenuComponent } from '../../../../shared/components/mobile-navmenu/mobile-navmenu.component';
import { LanguageSwitchComponent } from '../../../../shared/components/language-switch/language-switch.component';
import {TranslatePipe} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, BurgerIconComponent, MobileNavmenuComponent, LanguageSwitchComponent, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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
}
