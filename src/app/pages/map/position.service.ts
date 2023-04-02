import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }


  getData(){
    let url="http://127.0.0.1:8000/cestaput/"+localStorage.getItem('user_id')
  


 
   return this.http.get(url);
  
  }

  getMarkerPositions(markers:any){
    let vertices:any;
    for(let marker of markers){
      let latitude = marker.position.lat;
      let longitude = marker.position.lng;
      let dict = {lat: latitude, lng:longitude};
      vertices.push(dict);
      

      
    }
    console.warn(vertices)

  }
}
