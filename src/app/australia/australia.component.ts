import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent implements OnInit {
  
 topics = ['java','Angular','oracle'];
userModel = new User(26,'sai','sri',new Date(),'','nvrsai@gmail.com',950208732,'morning',true);
submitted=false;

constructor( )
  {}

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
  }
// submit(){
//     if(this.model)
//     console.log(this.model)

// }

}
