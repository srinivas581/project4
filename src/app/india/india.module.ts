import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common'; 
import { IndiaComponent } from './india.component';
// import { IndPerson1Component } from './ind-person1/ind-person1.component';
// import { IndPerson2Component } from './ind-person2/ind-person2.component';
import { IndPerson3Component } from './ind-person3/ind-person3.component';
import { IndPerson4Component } from './ind-person4/ind-person4.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
 

// import { ApPersonComponent } from './ind-person1/ap-person/ap-person.component';
// import { CtrPersonComponent } from './ind-person2/ctr-person/ctr-person.component';


const router:Routes=[
  
   {path:"ind-person1",loadChildren:'./ind-person1/ind-person1.module#IndPerson1Module'},
   {path:"ind-person2",loadChildren:'./ind-person2/ind-person2.module#IndPerson2Module'},
    {path:"",component:IndiaComponent},
    // {path:"ind-p1",component:IndPerson1Component},
    // {path:"ind-p2",component:IndPerson2Component},
    {path:"ind-p3",component:IndPerson3Component},
    {path:"ind-p4",component:IndPerson4Component}
]
   
  
  @NgModule({  
    declarations: [
    
        IndiaComponent,
        // IndPerson1Component,
        // IndPerson2Component,
        IndPerson3Component,
        IndPerson4Component,
        // ApPersonComponent 
        // CtrPersonComponent
  ],
    imports: [
    
      RouterModule.forChild(router),
      AngularFontAwesomeModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      MatCheckboxModule,
      MatDialogModule,
      MatButtonModule
    ],
    entryComponents:[
      IndPerson3Component
    ],
    providers: [],
    
  })
  export class IndiaModule { }