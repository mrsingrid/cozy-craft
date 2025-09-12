import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  position = input<'left' | 'right'>('left');
  isOpen = input(false);
  closed = output<void>();

  close() {
    this.closed.emit();
  }
}
