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
import {MatToolbarModule} from '@angular/material/toolbar';
// import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';
import { ThisWeekComponent } from './this-week/this-week.component';
import { ThisMonthComponent } from './this-month/this-month.component';
import { TotalComponent } from './total/total.component';


const router:Routes=[
    {path:'',component:DashboardComponent},
    {path:"today",component:TodayComponent},
    {path:"week",component:ThisWeekComponent},
    {path:"month",component:ThisWeekComponent},
    {path:"total",component:ThisWeekComponent}

    ]

@NgModule({
    declarations:[
        DashboardComponent,
        TodayComponent,
        ThisWeekComponent,
        ThisMonthComponent,
        TotalComponent
        

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
    MatCardModule,
    MatTabsModule,
    DragDropModule,
    MatToolbarModule
    // ChartsModule
],
providers:[]
})
export class DashboardModule { }