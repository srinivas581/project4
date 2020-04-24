import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-newregister1',
  templateUrl: './newregister1.component.html',
  styleUrls: ['./newregister1.component.css']
})
export class Newregister1Component implements OnInit {

  addressForm:FormGroup;
  public show:boolean=true;
  constructor() { }

  address=[1];
  

  ngOnInit() {
    this.show=true;
  }
  residence(){
    console.log(this.address.length+1);
  }

}
