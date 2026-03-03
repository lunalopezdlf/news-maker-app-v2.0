import { Component, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NEWS } from '../../db/news.db';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
    newsList = signal<INew[]>(NEWS)
}
