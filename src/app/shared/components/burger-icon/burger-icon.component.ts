import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-icon.component.html',
  styleUrl: './burger-icon.component.scss'
})
export class BurgerIconComponent {
  isActive = false;
  @Output() menuClicked = new EventEmitter<void>();

  onMenuClick(): void {
    this.isActive = !this.isActive;
    this.menuClicked.emit();
  }
}
