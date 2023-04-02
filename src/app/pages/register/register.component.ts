import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  player:any;
  // Formulář pro registraci
  registerForm:FormGroup= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService){
    this.player = {
      email: "",
      name: "",
      password: ""
    }

  }
  ngOnInit(): void {
    this.initializeForm();
      
  }

  initializeForm(){
    this.registerForm.setValue({
      email: null,
      name: null,
      password: null
    })
  }
  // Registrace
  register(){
    this.api.register(this.registerForm.value)
  }

}
