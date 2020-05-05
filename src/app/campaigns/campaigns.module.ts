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



import { CampaignsComponent } from './campaigns.component';
// import { BrandInfoComponent } from './brand-info/brand-info.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { CompaignComponent } from './compaign/compaign.component';
// import { WalletComponent } from './wallet/wallet.component';
// import { CouponsComponent } from './coupons/coupons.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { HowItWorksComponent } from './how-it-works/how-it-works.component';






const router:Routes=[
    {path:'',component:CampaignsComponent,children:[
        
        {path:"brand",loadChildren:'./brand-info/brand-info.module#BrandInfoModule'},
        {path:"dash",loadChildren:'./dashboard/dashboard.module#DashboardModule'},
        {path:"compaign",loadChildren:'./compaign/compaign.module#CompaignModule'},
        {path:"wallet",loadChildren:'./wallet/wallet.module#WalletModule'},
        {path:"coupon",loadChildren:'./coupons/coupons.module#CouponsModule'},
        {path:"works",loadChildren:'./how-it-works/how-it-works.module#HowItWorksModule'},
        {path:"notify",loadChildren:'./notifications/notifications.module#NotificationsModule'}
        
        
    ]},
]



@NgModule({
    
    declarations:[
        CampaignsComponent,
        // BrandInfoComponent,
        // DashboardComponent,
        // CompaignComponent,
        // WalletComponent,
        // CouponsComponent,
        // NotificationsComponent,
        // HowItWorksComponent
        
        
       
       
        
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(router),
        FormsModule, 
        ReactiveFormsModule,
        MatFormFieldModule,
        NgOtpInputModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTabsModule,
        DragDropModule


    ],
    providers:[]

})

export class CampaignsModule { }