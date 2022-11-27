import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from '../booking/booking.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';

const routes:Routes = [
  {
    path:'',
    component:BookingComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextareaModule,
    RadioButtonModule,
    InputMaskModule,
    KeyFilterModule,TableModule,InputNumberModule,InputTextModule,ReactiveFormsModule

  ]
})
export class BookingmoduleModule { }
