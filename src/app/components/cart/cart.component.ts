import { Component, output } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  chooseProducts = output<void>();

  emitChooseProducts() {
    this.chooseProducts.emit();
  }
}
