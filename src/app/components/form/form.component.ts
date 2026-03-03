import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';
import { NewsService } from '../../services/news.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
    newItem: INew = { title: "", image: "", date: "", text: "" };

    newsService = inject(NewsService);

    addNews():void{
        console.log(this.addNews); //comprobación

        if ( this.newItem.title != "" && this.newItem.image != "" && this.newItem.date != "" &&  this.newItem.text != ""){
            let response: string = this.newsService.insert(this.newItem);
            this.newItem = { title: "", image: "", date: "", text: "" };
            Swal.fire({
                title: '¡Felicidades!',
                text: response,
                icon: 'success',
                confirmButtonText: 'Cerrar'
            })
        }else{
            Swal.fire({
                title: '¡Error!',
                text: 'Los campos no pueden estar vacios',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        }
    }
}
