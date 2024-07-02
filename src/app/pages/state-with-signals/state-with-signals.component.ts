import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-state-with-signals',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>state-with-signals works!</p>`,
  styleUrl: './state-with-signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateWithSignalsComponent { }
