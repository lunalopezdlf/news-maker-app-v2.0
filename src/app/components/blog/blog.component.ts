import { Component, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NEWS } from '../../db/news.db';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [DatePipe, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
    myNews = signal<INew[]>(NEWS)

    newItem: INew = { title: "", image: "", date: "", text: "" };

    addNews():void{
        console.log(this.addNews); //comprobación

        if ( this.newItem.title != "" && this.newItem.image != "" && this.newItem.date != "" &&  this.newItem.text != ""){
            this.myNews.update( (news) => [...news, this.newItem])
            this.newItem = { title: "", image: "", date: "", text: "" };
        }else{
            alert("Todos los campos son obligatorios.");
            return;
        }
    }
}
