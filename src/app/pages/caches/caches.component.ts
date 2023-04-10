import { Component } from '@angular/core';
import { GetcarddetailService } from './getcarddetail.service';
import { MyCache } from 'src/app/Iinterfaces/cache';
import { Router } from '@angular/router';
import { ApiService } from '../register/api.service';

@Component({
  selector: 'app-caches',
  templateUrl: './caches.component.html',
  styleUrls: ['./caches.component.scss']
})
export class CachesComponent {

  caches: any


  constructor(
    private cacheService: GetcarddetailService,
    private router: Router,
    private apiService: ApiService,
    ){}

  ngOnInit(){
    this.apiService.getPlayerCaches().subscribe(data => {this.caches=data})
  }

  // Přejití na danou stránku keše
  setCache(cache: MyCache){
    this.cacheService.setCache(cache,false)
    this.router.navigate(['/detail-kese'])
  }

}
