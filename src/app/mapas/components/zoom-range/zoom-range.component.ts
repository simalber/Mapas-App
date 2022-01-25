import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container {
    width: 100%;
    height: 100%;
  }
  .row {
    background-color: white;
    position: fixed;
    bottom: 50px;
    padding: 10px;
    border-radius: 5px;
    left: 50px;
    z-index: 999;
    width: 400px;
  }
`
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef

  mapa!    : mapboxgl.Map;
  zoomLevel: number = 10;
  center   : [number, number] = [ -1.857132, 38.986977 ];

  constructor() { }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
   this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [ -1.857132, 38.986977 ], // starting position [lng, lat]
      zoom: 16 // starting zoom
  });


    this.mapa.on('zoom', (ev) => {
     this.zoomLevel = this.mapa.getZoom();
    })

    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa.getZoom() > 18 ) {
        this.mapa.zoomTo( 18 );
      }
    });

    //Movimiento del mapa

    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [ lng, lat];
    });

  };

  zoomOut() {
    this.mapa.zoomOut();

  }

  zoomIn() {
    this.mapa.zoomIn();

  }

  zoomCambio( valor: string)  {
    this.mapa.zoomTo( Number(valor) );

  }

}
