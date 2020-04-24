import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatCheckbox} from '@angular/material/checkbox';



import { AppComponent } from './app.component';
import { RouterModule,Routes} from "@angular/router";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { NewsComponent } from './news/news.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewregisterContentDialogComponent } from './newregister-content-dialog/newregister-content-dialog.component';
import { ModelDialogComponent } from './model-dialog/model-dialog.component';
import { ModelDialogContentComponent } from './model-dialog-content/model-dialog-content.component';
import { MatButton, MatButtonModule } from '@angular/material/button';



// import { NewregisterComponent } from './newregister/newregister.component';


// import { AustraliaComponent } from './australia/australia.component';

// import { IndiaComponent } from './india/india.component';



const router:Routes=[
 
  {path:"home",component:HomeComponent},
  {path:"india",loadChildren:'./india/india.module#IndiaModule'},
  {path:"australia",loadChildren:'./australia/australia.module#AustraliaModule'},
  {path:"news",component:NewsComponent},
  {path:"newregister",loadChildren:'./newregister/newregister.module#NewregisterModule'},
  {path:"model-dialog",component:ModelDialogComponent},
  {path:"model-dialog-content",component:ModelDialogContentComponent}
]



@NgModule({  
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewregisterContentDialogComponent,
    ModelDialogComponent,
    ModelDialogContentComponent,
    // NewregisterComponent,
   
    
    // AustraliaComponent,
   
    // IndiaComponent
    

  ],
  entryComponents:[
    
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
    MatButtonModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
