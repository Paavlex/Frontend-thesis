import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { MyItem } from 'src/app/Iinterfaces/my-item';
@Injectable({
  providedIn: 'root'
})


export class GetcarddetailService {
  // Metody pro dočasné uložení a získání keše a předmětu
  constructor() {
    
  }
  cache: any
  item:any
  parent=false


  setCache(cachetostore:MyCache,parent:boolean){
    this.cache = cachetostore
    this.parent=parent
  }

  getCache(){
    return {cache:this.cache,parent:this.parent}
  }

  clearCache(){
    this.cache = null
    this.parent=false
  }

  setItem(item:MyItem){
    this.item=item
    
  }
  getItem(){

    return this.item
  }
  clearItem(){
    this.item=null
    
  }
}
