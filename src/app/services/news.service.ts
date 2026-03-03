import { Injectable } from '@angular/core';
import { INew } from '../interfaces/inew.interface';
import { NEWS } from '../db/news.db';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
    private myNews: INew[] = NEWS

    getAll():INew[]{
        return this.myNews
    }

    instanceof(noticia: INew): string {
        this.myNews.push(noticia)
        return "Noticia insertada correctamente"
    }
}
