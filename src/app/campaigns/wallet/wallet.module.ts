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


import { WalletComponent } from './wallet.component';
import { MoneyComponent } from './money/money.component';
import { TransactionComponent } from './transaction/transaction.component';



const router:Routes=[
    {path:'',component:WalletComponent},
    {path:"money",component:MoneyComponent},
    {path:"transaction",component:TransactionComponent}
]





@NgModule({
    declarations:[
        WalletComponent,
        MoneyComponent,
        TransactionComponent
        

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
export class WalletModule { }