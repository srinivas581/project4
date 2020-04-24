import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-newregister2',
  templateUrl: './newregister2.component.html',
  styleUrls: ['./newregister2.component.css']
})
export class Newregister2Component  {

  submissionForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    address:new FormGroup({
      doorNo:new FormControl(''),
      nagar:new FormControl(''),
      city:new FormControl(''),
      postalcode:new FormControl(''),
      street:new FormControl(''),
      area:new FormControl(''),
      state:new FormControl('')
    })
  })
  constructor() { }

  
  ngOnInit() {
  }
}