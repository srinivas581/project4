import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgOtpInputModule } from 'ng-otp-input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';



import { HowItWorksComponent } from './how-it-works.component';
import { HowComponent } from './how/how.component';



const router:Routes=[
    {path:"",component:HowItWorksComponent},
    {path:"how",component:HowComponent}
    
]


@NgModule({
    declarations:[
        
        HowItWorksComponent,
        HowComponent
            
        

    ],
    imports:[
        CommonModule,
        RouterModule.forChild(router),
        FormsModule, 
        ReactiveFormsModule,
        NgOtpInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTabsModule,
        DragDropModule,
        MatCardModule,
        MatProgressBarModule


    ],
    providers:[]
})

export class HowItWorksModule { }





