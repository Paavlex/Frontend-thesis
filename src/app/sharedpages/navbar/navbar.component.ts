import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private auth: AuthService) {}

  // Logout funkce
  logout(){
    this.auth.logout();
  }
}
