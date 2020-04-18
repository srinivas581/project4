import { NgModule } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common'; 
import { CtrPersonComponent } from './ctr-person.component';
import { TptPersonComponent } from './tpt-person/tpt-person.component';





const router:Routes=[
    {path:"",component:CtrPersonComponent},
    {path:"tpt-p",component:TptPersonComponent}
    
]
   
  
  @NgModule({  
    declarations: [
        
     CtrPersonComponent,
     TptPersonComponent
       
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
  export class CtrPersonModule { }