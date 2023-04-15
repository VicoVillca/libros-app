import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  recomendados: { category_id: number; name: string; nicename: string; }[] = [
  ];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.recomendados= this.api.getCategories();
  }

}
