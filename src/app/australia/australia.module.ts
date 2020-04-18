import { NgModule } from '@angular/core';


import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common'; 
import { AustraliaComponent } from './australia.component';
// import { AusP1Component } from './aus-p1/aus-p1.component';
import { AusP2Component } from './aus-p2/aus-p2.component';
import { AusP3Component } from './aus-p3/aus-p3.component';
import { AusP4Component } from './aus-p4/aus-p4.component';
// import { MelbPersonComponent } from './aus-p1/melb-person/melb-person.component';





const router:Routes=[
    {path:"aus-p1",loadChildren:'./aus-p1/aus-p1.module#AusP1Module'},
    {path:"",component:AustraliaComponent},
    // {path:"aus-p1",component:AusP1Component},
    {path:"aus-p2",component:AusP2Component},
    {path:"aus-p3",component:AusP3Component},
    {path:"aus-p4",component:AusP4Component}
   
]
   
  
  @NgModule({  
    declarations: [
        AustraliaComponent,
        // AusP1Component,
        AusP2Component,
        AusP3Component,
        AusP4Component,
        // MelbPersonComponent
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
  export class AustraliaModule { }