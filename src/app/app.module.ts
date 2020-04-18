import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { NewsComponent } from './news/news.component';

// import { AustraliaComponent } from './australia/australia.component';

// import { IndiaComponent } from './india/india.component';



const router:Routes=[
 
  {path:"home",component:HomeComponent},
  {path:"india",loadChildren:'./india/india.module#IndiaModule'},
  {path:"australia",loadChildren:'./australia/australia.module#AustraliaModule'},
  {path:"news",component:NewsComponent}
]



@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    
    // AustraliaComponent,
   
    // IndiaComponent
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
