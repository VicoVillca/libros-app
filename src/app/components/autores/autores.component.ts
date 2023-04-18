import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  escritores: any = [
    {
      nombre: 'Alexandre Dumas',
      profesion: 'El conde de Monte Cristo',
      descripcion:
        'Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama',
      foto: 'assets/img/testimonials/testimonials-1.jpg',
    },
    {
      nombre: 'Miguel de Cervantes',
      profesion: 'Don Quijote de la Mancha',
      descripcion:
        'Las masas humanas más peligrosas son aquellas en cuyas venas ha sido inyectado el veneno del miedo…. del miedo al cambio',
      foto: 'assets/img/testimonials/testimonials-1.jpg',
    },
    {
      nombre: 'Charles Dickens',
      profesion: 'Historia de dos ciudades',
      descripcion:
        'Crearía un perfume que no sólo fuera humano, sino sobrehumano. Un aroma de ángel, tan indescriptiblemente bueno y pletórico de vigor que quien lo oliera quedaría hechizado y no tendría más remedio que amar a la persona que lo llevara, o sea, amarle a él, Grenouille, con todo su corazón',
      foto: 'assets/img/testimonials/testimonials-1.jpg',
    },
    {
      nombre: 'E. M. Forster',
      profesion: 'Howards End',
      descripcion:
        'Querían hablar, pero no pudieron; había lágrimas en sus ojos. Ambos estaban pálidos y delgados; pero aquellos rostros pálidos estaban iluminados con el amanecer de un nuevo futuro',
      foto: 'assets/img/testimonials/testimonials-1.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
