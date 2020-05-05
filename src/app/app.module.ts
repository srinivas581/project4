import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgOtpInputModule } from  'ng-otp-input';



import { AppComponent } from './app.component';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
// import { CampaignsComponent } from './campaigns/campaigns.component';


const router:Routes=[
 
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  {path:"camp",loadChildren:'./campaigns/campaigns.module#CampaignsModule'}
]



@NgModule({  
  declarations: [
    AppComponent,
    // CampaignsComponent,
  
  ],
  

  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
