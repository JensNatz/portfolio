import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-icon.component.html',
  styleUrl: './burger-icon.component.scss'
})
export class BurgerIconComponent {
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }
}
