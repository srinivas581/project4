import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { equalSegments } from '@angular/router/src/url_tree';
import { MustMatch } from '../_helpers/must-match.validator';
// 

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  registerForm:FormGroup;
  submitted=false;
  

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mobileNumber:['', [Validators.required, Validators.maxLength(10)]]
      // acceptTerms: [false, Validators.requiredTrue],
      // gender: ['', [Validators.required]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }
     

get f() {
   return this.registerForm.controls;
  //  return this.f.get('gender');
   }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  console.log(this.registerForm.value)
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}

  

  // errorHandling(FormControl,msg){
  //   if(this.registerForm.get("fname").hasError("maxLength")){
  //     return msg + "should n't be more than" + this.registerForm.get(FormControl).hasError("maxLength") + "charecters"
  //   }
  //   else if(this.registerForm.get(FormControl).touched){
  //     return this.registerForm.get(FormControl).hasError("required") ? "you must enter" + msg:this.registerForm.get(FormControl).hasError("pattern") ? 
  //     "enter alphabets only" + msg:"" ; 
  //   }
  // }

  // getErrorMessage2() {
  //   return this.registerForm.get('fname').hasError('required') ? 'You must enter a value' :
  //     this.registerForm.get('fname').hasError('maxlength') ? 'firstname must be below 30 charatcters and alphabets only' :
  //       this.registerForm.get('fname').hasError('pattern') ? 'alphabets only' :
  //         '';
  // }
// Register(){
//   console.log(this.registerForm)
   
// }