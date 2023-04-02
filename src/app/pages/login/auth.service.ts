import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractFormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs';

export interface AuthResponse{
   access: string;
   refresh: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  
  private refreshTokenTimeout:any
  
  constructor(
    private http:HttpClient,
    private router: Router,
    
    ) { }

    // Login, získání a uložení tokenů
  login(username: string, password: string){

    let url = "http://127.0.0.1:8000/api/token/"

    const body = {
      username: username, password: password
    }
    this.startRefreshTokenTimeout()
    return this.http.post<AuthResponse>(url, body).subscribe(res => this.setSession(res));
  }
  // Odhlášení
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    clearTimeout(1)
    this.router.navigate(['/'])

  }

  // Uložení tokenů a získání informací z tokenu
  private setSession(authResult:AuthResponse){
    localStorage.setItem('access_token', authResult.access);
    localStorage.setItem('refresh_token', authResult.refresh);
    const helper = new JwtHelperService();
    const decoded_access_token = helper.decodeToken(authResult.access);
    localStorage.setItem('username',decoded_access_token.username);
    localStorage.setItem('user_id',decoded_access_token.user_id);
    this.router.navigate(['/domu'])
  }

  
  private refreshSession(authResult:AuthResponse){
    console.log("Session refresh start")

    localStorage.setItem('access_token', authResult.access);
    localStorage.setItem('refresh_token', authResult.refresh);
    const helper = new JwtHelperService();
    const decoded_access_token = helper.decodeToken(authResult.access);
    localStorage.setItem('username',decoded_access_token.username);
    localStorage.setItem('user_id',decoded_access_token.user_id);
    this.startRefreshTokenTimeout()
    console.log("Refreshed succesfully")


  }

  
  startRefreshTokenTimeout(){
    console.log("timeout started")
    const token_exp = 540
    setTimeout(() => {this.refreshTokens()}, token_exp * 1000)


  }

  // Refresh trokenů
  refreshTokens(){
    const helper = new JwtHelperService
    let url = "http://127.0.0.1:8000/api/token/refresh/"
    console.log("Trying to refresh")
      if (!helper.isTokenExpired(localStorage.getItem('refresh_token'))) {
        console.log("Refreshing")
        const body= {refresh: localStorage.getItem('refresh_token')}
        this.http.post<AuthResponse>(url, body).subscribe(res => this.refreshSession(res));
        console.log("After session refresh")
        
        
      }
      else{
        console.log("All expired")
        
      }
  }

  // kontorla platnosti tokenu
  isLoggedIn(){
    const helper = new JwtHelperService();
    var access_token = localStorage.getItem('access_token')
    const refresh_token = localStorage.getItem('refresh_token')
    return of(!helper.isTokenExpired(access_token))
  }
}
