import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { Router } from '@angular/router';
import { ApiService } from '../register/api.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // Inicializace proměnných
  infoDiv=true

  center= {
    lat: 49.1953,
    lng: 16.6083
  };

  account:any
  caches:any

  clickedCache: MyCache={
    id: 0,
    idkarty: '',
    nazev: '',
    vlastnik: '',
    zemdelka: '',
    zemsirka: '',
    putpredmet: '',
    pocetnalezu: 0,
    popis:''
  }


  constructor(
    private cacheService: GetcarddetailService,
    private apiService: ApiService,
    private router: Router
    ){ 
      // získání onformací o hráči, a získání informací o cšech keších
    this.apiService.getAccountInfo().subscribe(data =>{this.account = data})
    this.apiService.getCaches().subscribe(data =>{this.caches = data,
    console.warn(this.caches)})
  }

  // Získání informací o nakliknuté keši
  cacheInfo(id:number){
    this.apiService.getClickedCard(id).subscribe({
      next: (res) => this.setClickedCard(res),
      error: (err) => console.error(err)
    })
  }
  // nastavení nakliklé keše
  setClickedCard(cache:MyCache){
    this.clickedCache = cache
    console.warn(this.caches)
  }
  // Skrytí, ukázání panelu s informacemi o keši
  showInfo(){
    this.infoDiv = false
  }
  hideInfo(){
    this.infoDiv = true
  }

  // Uložení keše a přejití na stránku s jeími detaily
  setCache(){
    this.cacheService.setCache(this.clickedCache,true)
    this.router.navigate(['/info-kese'])
  }
}
