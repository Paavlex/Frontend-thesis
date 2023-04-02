import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { Marker } from 'src/app/Iinterfaces/marker';

@Injectable({
  providedIn: 'root'
})
export class TravelingitemsService {

  constructor(private http:HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  // získání putovních předmětů hráče
  getPlayerItems(){
    let url = "http://127.0.0.1:8000/putovnipredmety/"+localStorage.getItem('user_id')

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
    let url = "http://127.0.0.1:8000/info-karty/"
    
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

    let url = "http://127.0.0.1:8000/cestaput/"
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
    let url = "http://127.0.0.1:8000/detail-karty/"+id
    
    
    return this.http.get<MyCache>(url)
  }

  // Vytvoření putovního předmětu
  saveItem(uploadData:File){
    let url = "http://127.0.0.1:8000/upload/"
    //let url = "http://127.0.0.1:8000/putovnipredmety/"

    var id = localStorage.getItem('user_id')
    var formData: any = new FormData
    formData.append("idpozice", id)
    formData.append("vlastnik", id)
    formData.append("obrazek", uploadData, uploadData.name)
    formData.append("cesta", uploadData.name)

    return this.http.post(url,formData)
    

    
  }



}
