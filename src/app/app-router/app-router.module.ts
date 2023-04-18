import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../views/index/index.component';
import { BookComponent } from '../views/book/book.component';

import { CategoryComponent } from '../views/category/category.component';
import { ErrorComponent } from '../views/error/error.component';
import { AutoresComponent } from '../components/autores/autores.component';
import { PopularesComponent } from '../components/populares/populares.component';
import { GaleriaComponent } from '../components/galeria/galeria.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'categoria', component: CategoryComponent },
  { path: 'populares', component: PopularesComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'autores', component: AutoresComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouter {}
