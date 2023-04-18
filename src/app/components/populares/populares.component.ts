import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css'],
})
export class PopularesComponent implements OnInit {
  recomendados: string[] = [
    'Libros mas descargados',
    'Tops en Educación',
    'Tops en Ciencias',
    'Tops en programación',
  ];
  seleccionado: number = 0;
  libros: Libro[] = [];
  constructor(private api: ApiService) {

  }
  seleccionamos(i: number) {
    this.seleccionado = i;
    this.libros = this.api.getLibrosReComenadados(this.recomendados[i]);
  }
  getClass(i:number){
    if(i==this.seleccionado)
    return "nav-link link active show"
    else return "nav-link";
  }
  getTags(tags:any){
    let c="";
    for(let i of tags){
      if(c!='')c+=","
      c=c+i.name;
    }
    return c
  }
  ngOnInit(): void {
    this.libros = this.api.getLibrosReComenadados(this.recomendados[0]);
  }
}
