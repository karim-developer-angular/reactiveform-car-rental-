import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(){}
responsiveOptions:any;
products:any;
ngOnInit(): void {
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
this.products =  [
  {
    "name": "Model-I",
    "description": "Product Description",
    "image": "image1.jpg",
    
  },
  {
    "name": "Model-II",
    "description": "Product Description",
    "image": "image3.jpg",
    
  }
]
}
}
