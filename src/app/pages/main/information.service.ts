import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient) { }


  
  // Získání informací o hráči
  getAccountInfo(){
    
    let url = "http://127.0.0.1:8000/hraci/"+localStorage.getItem('user_id')+"/"

    return this.http.get(url)
  }

  // Získání všech keší
  getCaches(){
    
    let url = "http://127.0.0.1:8000/vsechnykese/"

    return this.http.get(url)
  }
  // Získání keší hráče
  getPlayerCaches(){
    let url = "http://127.0.0.1:8000/karty/"+localStorage.getItem('user_id')

    return this.http.get(url)
  }
}
