import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor (private route:Router) { }

  

  
  ngOnInit(){

  }
  reset(){
Router
    this.route.navigate(['/auth/reset'])
  }
}


