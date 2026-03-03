import { Component, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NEWS } from '../../db/news.db';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
    newsList = signal<INew[]>(NEWS)
}
