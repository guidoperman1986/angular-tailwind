import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Article } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCardComponent { 
  headline = input<Article>();
}
