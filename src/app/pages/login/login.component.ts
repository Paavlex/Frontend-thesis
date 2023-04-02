import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  tokens: any
  // Formulář pro login
  loginForm:FormGroup= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private router: Router,
    private authentication: AuthService
    ){

  }

  ngOnInit(){
    this.initializeForm();

  }

  initializeForm(){
    this.loginForm.setValue({
      username: null,
      password: null,
    })
  }
  // Login funkce
  login(){
    this.authentication.login(this.loginForm.value.username, this.loginForm.value.password)
    
    
  }
}
