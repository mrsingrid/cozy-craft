import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  categorySelected = output<void>();

  emitCategorySelected() {
    this.categorySelected.emit();
  }
}
