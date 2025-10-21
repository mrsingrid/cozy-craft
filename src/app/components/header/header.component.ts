import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
import { Component, signal } from '@angular/core';
import { OverlayComponent } from '../overlay/overlay.component';
import { CartComponent } from '../cart/cart.component';

type OverlayType = 'menu' | 'cart' | null;

@Component({
  selector: 'app-header',
  imports: [
    NavigationMenuComponent,
    CommonModule,
    OverlayComponent,
    CartComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentOverlay = signal<OverlayType>(null);

  openOverlay(type: OverlayType) {
    this.currentOverlay.set(type);
  }

  closeOverlay() {
    this.currentOverlay.set(null);
  }
}
