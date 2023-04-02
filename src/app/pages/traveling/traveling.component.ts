import { Component } from '@angular/core';
import { TravelingitemsService } from './travelingitems.service';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-traveling',
  templateUrl: './traveling.component.html',
  styleUrls: ['./traveling.component.scss']
})
export class TravelingComponent {
  items: any
  uploadData: File
  
    
  

  constructor(
    private travelingitmes: TravelingitemsService,
    private details: GetcarddetailService,
    private router: Router
    ){ 
      this.uploadData = new File(["foo"],"/assets/img/putpred1.jpg")
    this.items = this.travelingitmes.getPlayerItems()
    
  }

  
  // Přejití na detail předmětu
  itemDetail(item:any){
    this.details.setItem(item)
    this.router.navigate(['/detail-predmetu'])
  }

  // Využití při vytvoření předmětu
  onImageChange(event:any){
    this.uploadData = event.target.files[0];
  }
  
  // Vytvoření předmětu
  saveItem(){
    this.travelingitmes.saveItem(this.uploadData).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

}
