import { Component } from '@angular/core';
import { PositionService } from './position.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  center= {
      lat: 49.1953,
      lng: 16.6083
  };

  polylineOptions = {
    path: [],
    strokeColor: '#32a1d0',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    };


  markers:any

  vertices: google.maps.LatLngLiteral[] = [
    {lat: 13, lng: 13},
    {lat: -13, lng: 0},
    {lat: 13, lng: -13},
  ];
  


  constructor(private position: PositionService){ 
    this.position.getData().subscribe(data =>{
      console.log(data)
      this.markers = data
    })
  

  
}


}
