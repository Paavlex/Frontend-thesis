import { Component } from '@angular/core';
import { ApiService } from '../register/api.service';

@Component({
  selector: 'app-collectibles',
  templateUrl: './collectibles.component.html',
  styleUrls: ['./collectibles.component.scss']
})
export class CollectiblesComponent {
  allcollectibles = 4;
  claimedcollectibles = 3;
  user="TestUser";
  openedCache=5;
  collectibles:any;

  constructor(private apiService: ApiService){
    // Získání sběratelských předmětů hráče
    this.apiService.getAccountInfo().subscribe(data => {this.collectibles = data})
   }

  
  
}
