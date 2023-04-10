import { Component } from '@angular/core';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { ApiService } from '../register/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  item:any

  constructor(
    private apiService:ApiService
  ){
    // Získání předmětu, který má hráč momentálně u sebe
    this.apiService.getCurrentItem().subscribe(data => this.item = data, err => console.log(err))
  }

  

}
