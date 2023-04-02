import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './pages/login/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}
  // interceptor přidává Authorization hlavičku k HTTP requestům
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const helper = new JwtHelperService()
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');

    if (!access_token) {
      return next.handle(request);
    }
    // Výjimka při registraci uživatele
    if (request.url == "http://127.0.0.1:8000/register/"){
      return next.handle(request);
    }

    const req1 = request.clone({
      headers: request.headers.set('Authorization', 'Bearer '+access_token)
    });
    return next.handle(req1);
    
  }
}
