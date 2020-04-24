import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormGroup,FormArray,FormBuilder,FormControl,Validator} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {

  registerForm:FormGroup;
  public show:boolean=true;
  constructor(public routes:Router , private formBuilder: FormBuilder) { }

  
  registerData=[1];
  


  ngOnInit() {
    
  }
add(){
  console.log(this.registerData.length+1);
  
  this.registerData.push(this.registerData.length+1)
  // if(this.registerData.length==2){
  //   this.show=false;
  // }
  
  
}
delete(i){

  this.registerData.splice(i,1)
  Swal.fire({
    title: 'SuccessFully deleted',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'YES'
  })
  
}
}
