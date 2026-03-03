import { Component, inject, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NewsService } from '../../services/news.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-list',
  imports: [DatePipe],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent {
    myNews = signal<INew[]>([]);

    newsService = inject (NewsService);

    ngOnInit(){
        this.myNews.set(this.newsService.getAll());
    }
}
