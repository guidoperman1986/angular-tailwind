import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Article, NewsResponse } from '../../interfaces/news.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  apiKey = '9f8fedec98d949e4a2e321a1a6d17e8a';
  baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getNews(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        `${this.baseUrl}/top-headlines?country=us&apiKey=${this.apiKey}`
      )
      .pipe(map((response) => response.articles));
  }
}
