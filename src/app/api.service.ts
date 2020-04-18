import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_KEY='YOUR_API-KEY';
  constructor(private http:HttpClient) { }

  public getNews(){
    return this.http.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-03-07&sortBy=publishedAt&apiKey=6c39cc2b0af3477b9fe17db75267f231`);
  }
}
