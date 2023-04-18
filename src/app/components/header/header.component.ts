import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  seleccionado: string = 'inicio';
  constructor() {}

  ngOnInit(): void {}
  select(item: string) {
    this.seleccionado = item;
    console.log(this.seleccionado);
  }

  esSelecccionado(item: string) {

    if (this.seleccionado == item) {
      return 'active';
    } else return '';
  }

}
