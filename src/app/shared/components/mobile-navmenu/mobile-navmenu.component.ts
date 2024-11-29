import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navmenu',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './mobile-navmenu.component.html',
  styleUrl: './mobile-navmenu.component.scss'
})
export class MobileNavmenuComponent {
  constructor() {}

  @Output() menuClosed = new EventEmitter<boolean>();

  onNavigate(sectionId: string): void {
    this.hideMobileMenu();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  private hideMobileMenu(): void {
    this.menuClosed.emit(true);
  }
}
