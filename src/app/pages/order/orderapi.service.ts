import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }
  // POST na API pro obejdnání keše, body je tělo requestu, obsahuje potřebné informace
  order(order:any){
    //let url = "http://127.0.0.1:8000/objednani/"
    let url = "https://dpapp.onrender.com/objednani/"
    const body = {firstname: order.firstname, lastname: order.lastname, city: order.city, street: order.street, psc: order.psc, phone: order.phone, email: order.email, cachename: order.cachename, lng: order.lng, lat: order.lat, username: localStorage.getItem('username')}
    
    return this.http.post(url, body, {headers: this.httpHeaders})
  }
}
