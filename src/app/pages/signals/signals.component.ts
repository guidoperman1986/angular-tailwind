import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, CounterComponent, ProgressBarComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  counter = 0;
}
