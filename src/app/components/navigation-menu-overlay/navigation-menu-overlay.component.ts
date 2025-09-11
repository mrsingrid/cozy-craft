import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navigation-menu-overlay',
  imports: [CommonModule],
  templateUrl: './navigation-menu-overlay.component.html',
  styleUrl: './navigation-menu-overlay.component.scss',
})
export class NavigationMenuOverlayComponent {
  isMenuOpen = input(false);
  menuClosed = output<void>();

  closeMenu() {
    this.menuClosed.emit();
  }
}
