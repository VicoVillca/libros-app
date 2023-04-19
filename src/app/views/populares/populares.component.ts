import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-populares-view',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css'],
})
export class PopularesView implements OnInit {
  recomendados: { category_id: number; name: string; nicename: string; }[] = [
  ];
  seleccionado: number = 0;
  libros: Libro[] = [];
  constructor(private api: ApiService) {}
  seleccionamos(i: number) {
    this.seleccionado = i;
    this.recomendados= this.api.getCategories();
    console.log(this.libros);
  }
  getClass(i: number) {
    if (i == this.seleccionado) return 'nav-link link active show';
    else return 'nav-link';
  }
  getTags(tags: any) {
    let c = '';
    for (let i of tags) {
      if (c != '') c += ',';
      c = c + i.name;
    }
    return c;
  }
  ngOnInit(): void {
    //this.libros = this.api.getLibrosReComenadados(this.recomendados[0]);
    this.recomendados= this.api.getCategories();

    this.libros = this.api.getLibrosReComenadados('');
    console.log(this.libros);
  }
}
