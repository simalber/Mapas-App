import { Component } from '@angular/core';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent {

  propiedades: Propiedad[] = [
    {
      titulo: 'Casa residencial, Canadá',
      descripcion: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      titulo: 'Casa de campo, Albacete',
      descripcion: 'Hermosa casa de campo en Albacete, España',
      lngLat: [ -1.895783, 38.984399]
    },
    {
      titulo: 'Apartamento, Valencia',
      descripcion: 'Lujoso apartamento en el corazón de Valencia, España',
      lngLat: [  -0.376683, 39.473263 ]
    },
    {
      titulo: 'Local comercial, Madrid',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]
}
