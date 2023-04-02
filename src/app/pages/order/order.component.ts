import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { OrderapiService } from './orderapi.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  response:any;
  orderForm:FormGroup= new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),

    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    psc: new FormControl('', Validators.required),

    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{3}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    
    cachename: new FormControl('', Validators.required),
    lng: new FormControl('', Validators.required),
    lat: new FormControl('', Validators.required),
  })
  
  constructor(private orderservice: OrderapiService){

  }
  
  
  ngOnInit(){
    this.initializeForm();

  }
  // Formulář pro objednání keše
  initializeForm(){
    this.orderForm.setValue({
      firstname: null,
      lastname: null,
      city: null,
      street: null,
      psc: null,
      phone: null,
      email: null,
      cachename: null,
      lng: null,
      lat: null,
    })
  }
  // Objednání keše
  order(){
    console.log(this.orderForm.value);
    console.log("this.orderForm.value");
    this.orderservice.order(this.orderForm.value).subscribe(data =>{this.response = data}, err =>{console.log(err)});}

}
