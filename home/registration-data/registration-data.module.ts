import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationDataComponent } from './registration-data.component';
import { RouterModule, Routes } from '@angular/router';
import {TableModule} from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

const routes:Routes = [
  {path:'', component:RegistrationDataComponent}
]

@NgModule({
  declarations: [
    RegistrationDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    KeyFilterModule,
    InputMaskModule,
    RadioButtonModule,
    InputTextareaModule,
    TableModule
    
  ]
})
export class RegistrationDataModule { }
