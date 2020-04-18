import { NgModule } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common'; 
import { IndPerson2Component } from './ind-person2.component';       

// import { CtrPersonComponent } from './ctr-person/ctr-person.component';
// import { TptPersonComponent } from './ctr-person/tpt-person/tpt-person.component';





const router:Routes=[
    {path:"ctr-person",loadChildren:'./ctr-person/ctr-person.module#CtrPersonModule'},
    {path:"",component:IndPerson2Component}
    // {path:"ctr-p",component:CtrPersonComponent}
    
]
   
  
  @NgModule({  
    declarations: [
        
        IndPerson2Component,
        // CtrPersonComponent
        // TptPersonComponent
       
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
  export class IndPerson2Module { }