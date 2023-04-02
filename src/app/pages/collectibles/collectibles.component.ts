import { Component } from '@angular/core';
import { CollectitemsService } from './collectitems.service';

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

  constructor(private collectiblesservice: CollectitemsService){
    // Získání sběratelských předmětů hráče
    this.collectiblesservice.getCollectibles().subscribe(data => {this.collectibles = data})
   }

  
  
}
