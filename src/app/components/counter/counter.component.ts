import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter = model(0);

  decrement() {
    if (this.counter() > 0) {
      this.counter.update((value) => value - 1);
    }
  }

  reset() {
    this.counter.set(0);
  }

  increment() {
    if (this.counter() < 100) {
      this.counter.update((value) => value + 1);
    }
  }
}
