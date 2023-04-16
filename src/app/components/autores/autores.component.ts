import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  escritores:any = [
    {
      nombre: 'Alexandre Dumas',
      profesion: 'El conde de Monte Cristo',
      descripcion: "Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama",
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/William_Henry_Powell_-_Portrait_of_Alexandre_Dumas_-_1950.8.38_-_Smithsonian_American_Art_Museum.jpg/800px-William_Henry_Powell_-_Portrait_of_Alexandre_Dumas_-_1950.8.38_-_Smithsonian_American_Art_Museum.jpg',
    },
    {
      nombre: 'Miguel de Cervantes',
      profesion: 'Don Quijote de la Mancha',
      descripcion: "Las masas humanas más peligrosas son aquellas en cuyas venas ha sido inyectado el veneno del miedo…. del miedo al cambio",
      foto: 'https://www.biografiasyvidas.com/monografia/cervantes/fotos/cervantes_miguel_1.jpg',
    },
    {
      nombre: 'Charles Dickens',
      profesion: 'Historia de dos ciudades',
      descripcion: "Crearía un perfume que no sólo fuera humano, sino sobrehumano. Un aroma de ángel, tan indescriptiblemente bueno y pletórico de vigor que quien lo oliera quedaría hechizado y no tendría más remedio que amar a la persona que lo llevara, o sea, amarle a él, Grenouille, con todo su corazón",
      foto: 'https://www.imer.mx/wp-content/uploads/sites/36/07_feb22_charles_dickens.jpg',
    },
    {
      nombre: 'E. M. Forster',
      profesion: 'Howards End',
      descripcion: "Querían hablar, pero no pudieron; había lágrimas en sus ojos. Ambos estaban pálidos y delgados; pero aquellos rostros pálidos estaban iluminados con el amanecer de un nuevo futuro",
      foto: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/E._M._Forster_von_Dora_Carrington%2C_1924-25.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
