import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public title = "Dashbaord";
constructor(private router:Router){
  
}
public showImg:boolean = false;
items!: MenuItem[];
  ngOnInit(){
    if(this.router.url == '/'){
        this.showImg = true;
    }
    this.items = [
      {
      label: 'Home',
      icon:'pi pi-fw pi-home',
      routerLink:['/'],
    items: [
          {
              label: 'New User',
              icon:'pi pi-fw pi-user',
              items: [
                  {
                  label: 'Registration',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink:['/registration'],
                  },
                  {
                  label: 'Video',
                  routerLink:['/registration-data'],
                  icon:'pi pi-fw pi-video'
                  }
              ]
          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-trash'
          },
          {
              label: 'Export',
              icon:'pi pi-fw pi-external-link'
          }
      ]
      },
      {
      label: 'Edit',
      icon:'pi pi-fw pi-users',
      items: [
          {
              label: 'Admin',
            //  routerLink:['/booking'],
              icon:'pi pi-fw pi-user'
          },
          {
              label: 'Edit Details',
              icon:'pi pi-fw pi-user-edit'
          },
          {
              label: 'Center',
              icon:'pi pi-fw pi-align-center'
          },
          {
              label: 'Justify',
              icon:'pi pi-fw pi-align-justify'
          }
      ]
      },
      
      {
      label: 'Car Details',
      icon:'pi pi-fw pi-car',
      items: [
          {
              label: 'New cars',
              icon:'pi pi-fw pi-car',

          },
          {
              label: 'Old cars',
              icon:'pi pi-fw pi-car',
          },
          {
              label: 'Search',
              icon:'pi pi-fw pi-cars',
              items: [
                  {
                  label: 'Filter',
                  icon:'pi pi-fw pi-filter',
                  items: [
                      {
                          label: 'Print',
                          icon:'pi pi-fw pi-print'
                      }
                  ]
                  },
                  {
                  icon:'pi pi-fw pi-bars',
                  label: 'List'
                  }
              ]
          }
      ]
      },
      {
      label: 'Events',
      icon:'pi pi-fw pi-calendar',
      items: [
          {
              label: 'Edit',
              icon:'pi pi-fw pi-pencil',
              items: [
                  {
                  label: 'Save',
                  icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                  label: 'Delete',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          },
          {
              label: 'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items: [
                  {
                  label: 'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          }
      ]
      }
  ]
  }
}
