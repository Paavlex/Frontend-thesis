import { Component, PipeTransform,Pipe } from '@angular/core';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../register/api.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-cachedetail',
  templateUrl: './cachedetail.component.html',
  styleUrls: ['./cachedetail.component.scss']
})


export class CachedetailComponent{


  cache: MyCache
  parent:boolean
  // Inicializace formuláře keše
  cacheForm:FormGroup= new FormGroup({
    name: new FormControl(''),
    popis: new FormControl(''),
    lng: new FormControl(''),
    lat: new FormControl('')
  })
  
  constructor(
    private cacheService: GetcarddetailService,
    private router: Router,
    private api: ApiService
  ){
    if (!this.cacheService.getCache()) {
      this.router.navigate(['/kese'])
    }
    this.cache = this.cacheService.getCache().cache
    this.parent = this.cacheService.getCache().parent

  }
  initializeForm(){
    this.cacheForm.setValue({
      name: null,
      popis: null,
      lng: null,
      lat: null
    })
  }

  ngOninit(){
    this.cache = this.cacheService.getCache().cache
    
  }


  setTemoralCache(res:any){
    let tmpCache: MyCache=
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

    tmpCache.id = res.id
    tmpCache.idkarty = res.idkarty
    tmpCache.nazev = res.nazev
    tmpCache.vlastnik = res.vlastnik
    tmpCache.zemdelka = res.zemdelka
    tmpCache.zemsirka = res.zemsirka
    tmpCache.putpredmet = res.putpredmet
    tmpCache.pocetnalezu = res.pocetnalezu
    tmpCache.popis = res.popis

    return tmpCache
  }

  // Změna informací o keši
  changeCache(){
    let cacheToSave: MyCache
    cacheToSave = this.cache
    var lines = this.cacheForm.value.popis.split('\n')
    this.cacheForm.value.popis = ''
    for (var i = 0; i < lines.length; i++){

      if (/<\/?[a-z][\s\S]*>/i.test(lines[i])){
        alert("Nezadávejte HTML do popisu")
        return
      }
      else{
        if (Array.from(lines[i])[0]=='#' && Array.from(lines[i])[1]=='#'){

          console.log(lines[i])
          lines[i] = "<h3>"+lines[i].substring(2)+"</h3>"+'\n'
        }
        else if (Array.from(lines[i])[0]=='#'){
          lines[i] = "<h4>"+lines[i].substring(1)+"</h4>"+'\n'
        }
        else{
          if (lines[i+1]){
            lines[i] = lines[i]+'\n'
            }
          }

        this.cacheForm.value.popis = this.cacheForm.value.popis+lines[i]
      }
      
    };

    

    
    
    if (this.cacheForm.value.name != ''){
      cacheToSave.nazev=this.cacheForm.value.name
    }
    if (this.cacheForm.value.lat != '') {
      cacheToSave.zemsirka=this.cacheForm.value.lat
    }
    if (this.cacheForm.value.lng != '') {
      cacheToSave.zemdelka=this.cacheForm.value.lng
    }
    if (this.cacheForm.value.popis != '') {
      cacheToSave.popis=this.cacheForm.value.popis
    }
   

    // Uložení nových informací do databáze
    this.cache = this.api.changeCache(cacheToSave)



    
    this.cacheForm.setValue({
        name: '',
        popis:'',
        lng: '',
        lat: ''
    })
    
    this.cache=this.cacheService.getCache().cache
    this.ngOninit()

    console.log("I got to the end")
    console.log(this.cache)

  }

}
