import { Component } from '@angular/core';
import { GetcarddetailService } from '../caches/getcarddetail.service';
import { MyItem } from 'src/app/Iinterfaces/my-item';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from '../register/api.service';

@Component({
  selector: 'app-traveling',
  templateUrl: './traveling.component.html',
  styleUrls: ['./traveling.component.scss']
})
export class TravelingComponent {
  items: any
  uploadData: File
  newitem:any
    
  

  constructor(
    private details: GetcarddetailService,
    private router: Router,
    private apiService: ApiService,
    ){ 
      this.uploadData = new File(["foo"],"/assets/img/putpred1.jpg")
    this.items = this.apiService.getPlayerItems()
    
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
    this.apiService.saveItem(this.uploadData).subscribe(
      data => {this.newitem = data
        if(!this.newitem.canCreate){
          alert("Nemůžete vytvořit nový putovní předmět pokud již máte jeden u sebe.");
        }else{
          this.router.navigate(["/putovni-predmet"])
        }
      },
      error => console.error(error)
    );


  }

}
