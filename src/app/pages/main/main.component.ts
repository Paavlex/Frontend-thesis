import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { InformationService } from './information.service';
import { TravelingitemsService } from '../traveling/travelingitems.service';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

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
    private informationservice: InformationService,
    private cardDetailService: TravelingitemsService,
    private cacheService: GetcarddetailService,
    private router: Router
    ){ 
    this.informationservice.getAccountInfo().subscribe(data =>{this.account = data})
    this.informationservice.getCaches().subscribe(data =>{this.caches = data,
    console.warn(this.caches)})
  }

  // Získání informací o nakliknuté keši
  cacheInfo(id:number){
    this.cardDetailService.getClickedCard(id).subscribe({
      next: (res) => this.setClickedCard(res),
      error: (err) => console.error(err)
    })
  }
  setClickedCard(cache:MyCache){
    this.clickedCache = cache
    console.warn(this.caches)
  }

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
