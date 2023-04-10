import { Component } from '@angular/core';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cacheinfo',
  templateUrl: './cacheinfo.component.html',
  styleUrls: ['./cacheinfo.component.scss']
})
export class CacheinfoComponent {
  cache: MyCache
  parent:boolean
  constructor(
    private cacheService: GetcarddetailService,
    private router: Router
    ){
    // získání uležené keše
    this.cache = this.cacheService.getCache().cache
    this.parent = this.cacheService.getCache().parent

  }

  // Přejití zpět na stránku keší
  goBack(){
    if(this.parent){
      this.router.navigate(['/domu'])
      
    }
    else {
      this.router.navigate(['/detail-predmetu'])
      
    }
  }
}
