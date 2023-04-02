import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountinfoService {

  constructor(private http:HttpClient) { }

  // Získání informací o hráči
  getAccountInfo(){
    let url = "http://127.0.0.1:8000/hraci/"+localStorage.getItem('user_id')+"/"

    return this.http.get(url)

  }
}