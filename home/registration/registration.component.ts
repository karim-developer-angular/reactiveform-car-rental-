import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingDataService } from 'src/app/sharing-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private _SharingDataService:SharingDataService, private router:Router){}
  genders = ['Male', 'Female', 'Others'];
  SignupForm: any;
  public isFormSubmitted:boolean = false;

ngOnInit(){
  console.log()
  console.log(this._SharingDataService.getData());
 this.SignupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required
        ]),
        lastName: new FormControl(null, [
          Validators.required
        ]),
        mobileNumber: new FormControl(null, [
          Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}'), Validators.maxLength(10)
        ]),
        aadharNumber: new FormControl(null, [
          Validators.required
        ]),
       
        lienceId: new FormControl(null, [
          Validators.required
        ]),
       
        email: new FormControl(
          null,
          [Validators.required, Validators.email]
        ),
        gender: new FormControl('Male'),
        address: new FormControl(null, []),
      }),
    
    });
    if(Object.keys(this._SharingDataService.getData()).length > 0){
      this.SignupForm.setValue({
        'userData':this._SharingDataService.getData()
      })
    }
}
onSubmit(SignupForm:FormGroup){
  this.isFormSubmitted = true;
  if(SignupForm.valid){
    this._SharingDataService.setData(SignupForm.value);
    this.router.navigateByUrl('/registration-data');
  }
  

}
clearForm(SignupForm:FormGroup){
  this.isFormSubmitted = false;
  SignupForm.reset();
  this.SignupForm = new FormGroup({
    userData: new FormGroup({
      username: new FormControl(null, [
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.required
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}'), Validators.maxLength(10)
      ]),
      aadharNumber: new FormControl(null, [
        Validators.required,Validators.maxLength(14)
      ]),
     
      lienceId: new FormControl(null, [
        Validators.required
      ]),
     
      email: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      gender: new FormControl('Male'),
      address: new FormControl(null, []),
    }),
  
  });
}
}
