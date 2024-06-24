import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>signals works!</p>`,
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent { }
