import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  map!:L.Map;

  constructor(){}
  
  ngAfterViewInit():void{
    this.createMap();
    this.addHomeMarker();
  }

  createMap(){

    const parcThabor={
      lat: 48.114384,
      lng: 1.669494
    }

    const zoomLevel= 10;

    this.map= new L.Map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomLevel
    })

    const mainLayer=L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            minZoom: 1,
            maxZoom: 17,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
    );
    mainLayer.addTo(this.map)
  }

  addHomeMarker(){
    const homeMarker=L.marker({lat:39.46975, lng: -0.37739});
    homeMarker.bindPopup('This is Valencia',{
      closeButton: true
    })
    homeMarker.addTo(this.map);

    L.circle({lat: 39.46975, lng: -0.37739}, {
      color: 'steelblue',
      radius: 500,
      fillColor: 'steelblue',
      opacity: -0.5, 
    }).addTo(this.map);
  }
}
