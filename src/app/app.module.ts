import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './views/index/index.component';
import { BookComponent } from './views/book/book.component';
import { CategoryComponent } from './views/category/category.component';
import { RouterModule } from '@angular/router';
import { AppRouter } from './app-router/app-router.module';
import { ErrorComponent } from './views/error/error.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PopularesComponent } from './components/populares/populares.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AutoresComponent } from './components/autores/autores.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    BookComponent,
    CategoryComponent,
    ErrorComponent,
    EstadisticasComponent,
    PopularesComponent,
    GaleriaComponent,
    EventosComponent,
    AutoresComponent,
    RecomendacionesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule,AppRouter],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
