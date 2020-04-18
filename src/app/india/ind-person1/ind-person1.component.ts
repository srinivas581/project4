import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ind-person1',
  templateUrl: './ind-person1.component.html',
  styleUrls: ['./ind-person1.component.css']
})
export class IndPerson1Component implements OnInit {

  constructor() { }
   
  model={
    name:"" ,
    alterEgo:"",
    // power:""

  }
  ngOnInit() {
  }
  submit(){
    // if(!this.model.name){
    //   alert("Name field is required");
    //    }else if(!this.model.alterEgo){
    //       alert("alertEgo field is required");
    //    } 
    //    else{
    //     console.log("succes fully submit")
    //     console.log(this.model); 
    //    }
    if(this.model)
    console.log(this.model)

  }
}
