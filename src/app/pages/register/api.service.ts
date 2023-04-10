import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { Marker } from 'src/app/Iinterfaces/marker';

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
   // let url = "http://127.0.0.1:8000/register/"
    let url = "https://dpapp.onrender.com/register/"
    const body = {username: player.name, email: player.email, password: player.password}
    return this.http.post(url, body, {headers: this.httpHeaders}).subscribe(() => {this.router.navigate(['/'])}, err =>{console.log(err);})
  }

  // získání informací o keši
  changeCache(cache: MyCache){
    const id = cache.id
    //let url ="http://127.0.0.1:8000/detail-karty/"+id
    let url ="https://dpapp.onrender.com/detail-karty/"+id
    let returnCache: MyCache={
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
  // Získání putovního předmětu který hráč momentálně vlastní
  getCurrentItem(){
    //let url = "http://127.0.0.1:8000/jeden-predmet/"+localStorage.getItem('user_id')
    let url = "https://dpapp.onrender.com/jeden-predmet/"+localStorage.getItem('user_id')
    return this.http.get(url)

  }

  // Získání informací o hráči
  getAccountInfo(){
    //let url = "http://127.0.0.1:8000/hraci/"+localStorage.getItem('user_id')+"/"
    let url = "https://dpapp.onrender.com/hraci/"+localStorage.getItem('user_id')+"/"

    return this.http.get(url)

  }


  // Získání všech keší
  getCaches(){
    
    //let url = "http://127.0.0.1:8000/vsechnykese/"
    let url = "https://dpapp.onrender.com/vsechnykese/"

    return this.http.get(url)
  }
  // Získání keší hráče
  getPlayerCaches(){
    //let url = "http://127.0.0.1:8000/karty/"+localStorage.getItem('user_id')
    let url = "https://dpapp.onrender.com/karty/"+localStorage.getItem('user_id')

    return this.http.get(url)
  }


  // Získání putovních předmětů vytvořených hráčem
  getPlayerItems(){
    //let url = "http://127.0.0.1:8000/putovnipredmety/"+localStorage.getItem('user_id')
    let url = "https://dpapp.onrender.com/putovnipredmety/"+localStorage.getItem('user_id')

    let items: MyItem[]=[{
      id: 0,
      idputpredmetu: '',
      pozice: false,
      idpozice: '',
      vlastnik: '',
      karty: [''],
      cesta:''
    },]

    this.http.get<MyItem[]>(url).subscribe({
      next: (res) => {
        
        items.splice(0,1)
        res.forEach(element => {
          items.push(element)
          
        });
        
      },
      error: (err) => console.error(err),
      
    });
    
    return items
  }

  // Získání karet kterými prošel putovní předmět
  getCardsFromItem(cards: string[]){
    const body = {cards: cards}
    //let url = "http://127.0.0.1:8000/info-karty/"
    let url = "https://dpapp.onrender.com/info-karty/"
    
    let caches: MyCache[]=[{
      id: 0,
      idkarty: '',
      nazev: '',
      vlastnik: '',
      zemdelka: '',
      zemsirka: '',
      putpredmet: '',
      pocetnalezu: 0 ,
      popis:''
    },]

    this.http.post<MyCache[]>(url, body, {headers: this.httpHeaders}).subscribe({
      next: (res) =>{

        caches.splice(0,1)
        res.forEach(element => {
          caches.push(element)
          
        });



      },
      error: (err) => console.error(err)
    })
    return caches

  }

  // získání pozic všech karet, kterými prošel putovní předmět
  getMarkers(caches: string[]){

    //let url = "http://127.0.0.1:8000/cestaput/"
    let url = "https://dpapp.onrender.com/cestaput/"
    let body = caches
    let markers: Marker[]=[{
      id:0,
      position:{
        lng:0,
        lat:0
      }
    }]

    this.http.post<Marker[]>(url, body, {headers: this.httpHeaders}).subscribe({
      next: (res) => {
        markers.splice(0,1)
        res.forEach(marker => {
          markers.push(marker)
          
        });
      },
      error: (err) => console.error(err)
    })
    return markers
  }

  // Zídkání informací o nakliknuté kartě
  getClickedCard(id:number){
    //let url = "http://127.0.0.1:8000/detail-karty/"+id
    let url = "https://dpapp.onrender.com/detail-karty/"+id
    
    
    return this.http.get<MyCache>(url)
  }

  // Vytvoření putovního předmětu
  saveItem(uploadData:File){
   // let url = "http://127.0.0.1:8000/upload/"
    let url = "https://dpapp.onrender.com/upload/"
    //let url = "http://127.0.0.1:8000/putovnipredmety/"

    var id = localStorage.getItem('user_id')
    console.log(typeof id)
    var formData: any = new FormData
    formData.append("idpozice", id)
    formData.append("vlastnik", id)
    formData.append("obrazek", uploadData, uploadData.name)
    formData.append("cesta", uploadData.name)

    return this.http.post(url,formData)
    

    
  }

}
