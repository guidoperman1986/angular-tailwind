import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="relative pt-1 mx-5 mt-5">
    <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-violet-200">
      <div
        [style]="{ width: counter() + '%' }"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-violet-700"
      ></div>
    </div>
  </div>`,
  styleUrl: './progress-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  counter = model<number>(0);
}
