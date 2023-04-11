import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../model/libro.model';

@Injectable({providedIn: 'root'})
export class ApiService {
  url:string ="https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed";
  url2:string="https://www.etnassoft.com/api/v1/get/?get_categories=all";
  constructor(private httpClient: HttpClient) { }

  getElements(){
    return this.httpClient.get<Libro[]>(this.url);
  }

}

