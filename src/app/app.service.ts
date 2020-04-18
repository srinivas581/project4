import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable() 
export class AppService{
    constructor (private http:HttpClient){ } 

getCountry(){
return this.http.get("https://restcountries.eu/rest/v2/all")
}

registration(data){
    return this.http.post("https://api.backendless.com/application-id/REST-api-key/users/register",data )
    }
}
