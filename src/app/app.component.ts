import { Component, OnInit } from '@angular/core';
import { Libro } from './model/libro.model';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title: string = 'App-Libros';
  books!:Libro[];
  constructor( private api:ApiService){

  }
  ngOnInit(): void {
    /*this.api.getElements().subscribe({
      next:(l)=>{
        this.books=l;
        console.log(l);
      },
      error:(e)=>console.log(e),
      complete:()=>console.log("terminamos")
    });*/
  }

}
/**
<div *ngFor="let item of books">
  <h1>{{ item.title }}</h1>
  <label>{{ item.content_short }}</label>
  <img src={{item.thumbnail}} alt="sd">
  <h6 *ngFor="let tag of item.tags">{{ tag.name }}</h6>
  <hr />
</div>
 */
