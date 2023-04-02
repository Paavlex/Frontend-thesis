import { Component } from '@angular/core';
import { AccountinfoService } from './accountinfo.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user="TestUser";
  openedCache=5;
  email="testuser@gmail.com";
  registration = new Date('February 16, 2023');
  account:any;

  constructor(private accountinfo: AccountinfoService){ 
    // Získání informací o hráči
    this.accountinfo.getAccountInfo().subscribe(data =>{this.account = data});
  }


}
