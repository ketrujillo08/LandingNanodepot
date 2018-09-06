import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {
  lat: number = 21.1361176;
  lng: number = -86.8264258;  

  constructor() { }

  ngOnInit() {
  
   
  }

}
