import { Component } from '@angular/core';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { Router } from '@angular/router';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { Marker } from 'src/app/Iinterfaces/marker';
import { map } from 'rxjs';
import { ApiService } from '../register/api.service';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent {
  // Získání informací o putovním předmětu
  item: MyItem
  caches: MyCache[]
  markers: any
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

  infoDiv=true
  parent=true

  center= {
    lat: 49.1953,
    lng: 16.6083
};
  
  constructor(
    private detailService: GetcarddetailService,
    private router: Router,
    private cacheService: GetcarddetailService,
    private apiService: ApiService
    ){
    if (!this.detailService.getItem()) {
      this.router.navigate(['/putovni-predmety'])
    }
    this.item = this.detailService.getItem()
  
    // Získání keší (kterými předmět prošel) a pozic keší
    this.caches = this.getCardInfo()
    this.markers = this.apiService.getMarkers(this.item.karty)
  }

  ngOnInit(){
    
  }

  // skyrytí/Otevření mapy
  toggleDiv(){
    this.infoDiv = false
  }
  hideInfo(){
    this.infoDiv = true

  }

  // Získání informací o keších
  getCardInfo(){
    let cards = this.item.karty
    
    return this.apiService.getCardsFromItem(cards)

  }

  // Získání informací o jedné keši (nakliké na mapě)
  cacheInfo(id:number){
    this.apiService.getClickedCard(id).subscribe({
      next: (res) => this.setClickedCard(res),
      error: (err) => console.error(err)
    })
  }

  // Uložení nakliknuté keše do lokální proměnné
  setClickedCard(cache:MyCache){
    this.clickedCache = cache
    console.warn(this.clickedCache)
  }
  // tlačítko zpět
  goBack(){
    this.router.navigate(['/putovni-predmety'])
  }
  // Uložení nakliknuté keše a přejití na stránku s detailem
  setCache(){
    this.cacheService.setCache(this.clickedCache,false)
    this.router.navigate(['/info-kese'])
  }
}
