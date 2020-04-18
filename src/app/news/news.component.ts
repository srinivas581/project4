
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles:any[];


  constructor(private apiservices:ApiService) { }

  ngOnInit() {
   this.apiservices.getNews().subscribe((data:any)=>{
     
     this.articles=data.articles;
     console.log(this.articles);
     
   });
   }
  }


