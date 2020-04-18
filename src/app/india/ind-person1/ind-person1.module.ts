import { NgModule } from '@angular/core';


import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common'; 
import { IndPerson1Component } from './ind-person1.component';
import { ApPersonComponent } from './ap-person/ap-person.component';





const router:Routes=[
    {path:"",component:IndPerson1Component},
    {path:"ap-p",component:ApPersonComponent}
    
]
   
  
  @NgModule({  
    declarations: [
        IndPerson1Component,
        ApPersonComponent
       
  ],
    imports: [
    
      RouterModule.forChild(router),
      AngularFontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
    ],
    providers: [],
    
  })
  export class IndPerson1Module { }