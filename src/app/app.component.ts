import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, ProductCardComponent],
})
export class AppComponent {
  title = 'cozy-craft';
}
