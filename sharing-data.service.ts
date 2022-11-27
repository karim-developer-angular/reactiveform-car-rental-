import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  constructor() { }
  private data:any = {};  
  
  setData(option:any) {      
     this.data = option;  
   }  
   
   getData() {  
     return this.data;  
   } 
}
