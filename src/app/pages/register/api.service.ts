import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyCache } from 'src/app/Iinterfaces/cache';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http:HttpClient,
    private router: Router
    ) { }
  // POST na API pro registraci
  register(player:any){
    let url = "http://127.0.0.1:8000/register/"
    const body = {username: player.name, email: player.email, password: player.password}
    
    return this.http.post(url, body, {headers: this.httpHeaders}).subscribe(() => {this.router.navigate(['/'])}, err =>{console.log(err);})
  }

  // získání informací o keši
  changeCache(cache: MyCache){
    const id = cache.id
    let url ="http://127.0.0.1:8000/detail-karty/"+id
    let returnCache: MyCache=
    {
    id:0,
    idkarty:"",
    nazev:"",
    vlastnik:"",
    zemdelka:"",
    zemsirka:"",
    putpredmet:"",
    pocetnalezu:0,
    popis:''

  }
    
    this.http.put<MyCache>(url, cache).subscribe(res => {returnCache = res})
    console.warn(returnCache)
    return returnCache
  }

}
