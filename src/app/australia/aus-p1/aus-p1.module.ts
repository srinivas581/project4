import { NgModule } from '@angular/core';   
import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common'; 
import { AusP1Component } from './aus-p1.component';
import { MelbPersonComponent } from './melb-person/melb-person.component';



const router:Routes=[
    {path:"",component:AusP1Component},
    {path:"mlb-person",component:MelbPersonComponent}
    
   
]
   
  
  @NgModule({  
    declarations: [
        AusP1Component,
        MelbPersonComponent
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
  export class AusP1Module{ } 