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



import { CompaignComponent } from './compaign.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { AllComponent } from './all/all.component';

const router:Routes=[
    {path:"",component:CompaignComponent},
    {path:"active",component:ActiveComponent},
    {path:"complete",component:CompletedComponent},
    {path:"all",component:AllComponent}
]



@NgModule({
    declarations:[
        CompaignComponent,
        ActiveComponent,
        CompletedComponent,
        AllComponent

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

export class CompaignModule { }





