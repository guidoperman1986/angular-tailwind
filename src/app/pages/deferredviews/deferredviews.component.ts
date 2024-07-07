import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewsApiService } from '../../services/newsApi/newsapi.service';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-deferredviews',
  standalone: true,
  imports: [CommonModule, DeferredviewsComponent, NewsCardComponent],
  templateUrl: './deferredviews.component.html',
  styleUrl: './deferredviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferredviewsComponent implements OnInit {
  newsApiService = inject(NewsApiService);
  topHeadLines = toSignal(this.newsApiService.getNews());

  ngOnInit(): void {}
}
