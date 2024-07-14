import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Article } from '../../interfaces/news.interface';
import { SpinnerLoaderComponent } from '../spinner-loader/spinner-loader.component';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, SpinnerLoaderComponent],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent {
  headline = input.required<Article>();

  constructor() {
    /* const start = Date.now();
    while (Date.now() - start < 3000) {} */
  }
}
