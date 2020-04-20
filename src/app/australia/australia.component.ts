import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent implements OnInit {
  public userForm:NgForm;
  public data:any;
  
 topics = ['java','Angular','oracle'];
 aHasError = true;

userModel={
  fname:"",
  sname:"",
  date:"",
  a:"",
  email:"",
  phonenumber:""
}
 
// validateA(value){
//   if(value=='default'){
//     this.aHasError=true;
//   }
//   else{
//     this.aHasError=false;
//   }
// }
 
// constructor( )
//   {}

  // model={
  //   firstName:"" ,
  //   secondName:"",
  //   country:"",
  //   email:"",
  //   password:"",
  //   cPassword:"",
  //   dob:""
  // }
  // model={
  //   firstName:"" ,
  //   secondName :"",
  //   dob:"",
  //   location:""
  //   // male:"",
  //   // feMale:""

  // }

  // model={
  //   name:"" ,
  //   fname:"",
    // power:""

  // }
  ngOnInit() {
   
    this.responseData();
    // this.aHasError=false;
  }
// submit(){
//     if(this.model)
//     console.log(this.model)

// }
onSubmit(){
  console.log(this.userModel);
localStorage.setItem('registerdata',JSON.stringify(this.userModel))

}
responseData(){
  this.data=JSON.parse(localStorage.getItem('registerdata'));
console.log(this.data);
if(this.data){
  this.userModel.fname=this.data.fname,
  this.userModel.sname=this.data.sname,
  this.userModel.date=this.data.date,
  this.userModel.a=this.data.a,
  this.userModel.email=this.data.email,
  this.userModel.phonenumber=this.data.phonenumber

}

}
}
