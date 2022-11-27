import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[{
    path:'', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    
  },
  {path:'registration', loadChildren: () => import('./home/registration/registration.module').then(m => m.RegistrationModule)},
  {path:'registration-data', loadChildren: () => import('./home/registration-data/registration-data.module').then(m => m.RegistrationDataModule)},
 // {path:'booking',loadChildren:()=>import('./booking/booking.module').then(m=>m.BookingModule)},
]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
