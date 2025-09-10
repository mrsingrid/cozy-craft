import { Component } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ProductCardComponent],
})
export class AppComponent {
  title = 'cozy-craft';
}
