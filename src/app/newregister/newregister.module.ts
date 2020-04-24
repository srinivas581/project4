import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { MatCheckbox } from '@angular/material/checkbox';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { NewregisterComponent } from './newregister.component';
import { Newregister1Component } from '../newregister/newregister1/newregister1.component';
import { Newregister2Component } from './newregister2/newregister2.component';
// import { NewregisterContentDialogComponent } from '../newregister-content-dialog/newregister-content-dialog.component';




const router:Routes=[
    {path:"",component:NewregisterComponent},
    {path:"newregister1",component:Newregister1Component},
    {path:"newregister2",component:Newregister2Component}
]

@NgModule({
 declarations: [
    NewregisterComponent,
    Newregister1Component,
  
    Newregister2Component
 ],
 entryComponents:[
  // NewregisterContentDialogComponent

 ],
 imports: [
    
    RouterModule.forChild(router),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    // MatCheckboxModule
  ],
  providers:[]
    
})
export class NewregisterModule { }

