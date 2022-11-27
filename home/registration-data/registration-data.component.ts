import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css']
})
export class RegistrationDataComponent implements OnInit{
  public registrationData:Array<[]> = [];
  cols:any = [];
  constructor(private _SharingDataService:SharingDataService, private router:Router){}
  
ngOnInit(): void {
  console.clear()
  if(Object.keys(this._SharingDataService.getData()).length > 0){
    let formObject =this._SharingDataService.getData()['userData']
    for (const property in formObject) {
      console.log(`${property}: ${formObject[property]}`);
      this.cols.push(
        { field: property, header: property },
      )
    }
    this.registrationData.push(this._SharingDataService.getData()['userData']);
    console.log(this.registrationData)
  }
}
editData(data:any){
  
  this._SharingDataService.setData(data);
this.router.navigateByUrl('/registration')
}
}
