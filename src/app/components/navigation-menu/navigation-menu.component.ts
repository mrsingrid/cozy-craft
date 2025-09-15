import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  imports: [CommonModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
  categorySelected = output<string>();

  emitCategorySelected(category: string) {
    this.categorySelected.emit(category);
  }
}
