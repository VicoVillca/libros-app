import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  libro!:any;
  constructor(private api:ApiService) {
    console.log("Holaaa");
    this.libro = this.api.getLibro(1)[0];
   }

  ngOnInit(): void {
  
  }

}
