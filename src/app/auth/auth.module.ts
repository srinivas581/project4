import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgOtpInputModule } from 'ng-otp-input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';




import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const router:Routes=[
 
  {path:'', component:AuthComponent,children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"email",component:VerifyEmailComponent},
    {path:"forgetpassword",component:ForgetPasswordComponent},
    {path:"reset",component:ResetPasswordComponent}
  ]},
  
]


@NgModule({  
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        VerifyEmailComponent,
        ForgetPasswordComponent,
        ResetPasswordComponent
    ],
    
  
    imports: [
      CommonModule,
      RouterModule.forChild(router),
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule ,
      MatIconModule,
      NgOtpInputModule
      
    ],
    providers: [],
  })
  export class AuthModule { }