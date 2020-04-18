import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public route:Router,private appService:AppService) { }

  public countryData=[]
  
  
  ngOnInit() {
    this.countryNames()
  }
  // displayInfo()
  // {
  // document.getElementById("demo").innerHTML="***some Text**";
  // console.log("some text")
  // }
countryNames(){
   
this.appService.getCountry().subscribe((res:any)=>{
  console.log('srinivas response',res),
  res.forEach((element,i) => {
   
    
    if(i>=100 && i<=150){
      // console.log(i)
      var ind={
        num:i
      }
      
      
    this.countryData.push(element)
  console.log('sonme text',this.countryData)
    }
    
    
  });  
  
  

})
}


registration(){
 var  regi={  
    "email" : 'giri@gmail.com',  
    "password" : 789456,  
    "objectId" : 963258,
  
  }
  
  this.appService.registration(regi).subscribe(
    (res:any)=>{
      console.log(res)
    }
  )
}
}
