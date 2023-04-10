import { Component } from '@angular/core';
import { ApiService } from '../register/api.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  // Inicializace proměnných
  user="TestUser";
  openedCache=5;
  email="testuser@gmail.com";
  registration = new Date('February 16, 2023');
  account:any;

  constructor(private apiService: ApiService){ 
    // Získání informací o hráči
    this.apiService.getAccountInfo().subscribe(data =>{this.account = data});
  }


}
