import { Component } from '@angular/core';
import { InformationService } from '../main/information.service';
import { GetcarddetailService } from './getcarddetail.service';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caches',
  templateUrl: './caches.component.html',
  styleUrls: ['./caches.component.scss']
})
export class CachesComponent {

  caches: any


  constructor(
    private information: InformationService,
    private cacheService: GetcarddetailService,
    private router: Router
    ){}

  ngOnInit(){
    this.information.getPlayerCaches().subscribe(data => {this.caches=data})
  }

  // Přejití na danou stránku keše
  setCache(cache: MyCache){
    this.cacheService.setCache(cache,false)
    this.router.navigate(['/detail-kese'])
  }

}
