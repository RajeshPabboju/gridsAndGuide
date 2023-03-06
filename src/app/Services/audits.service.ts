import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditsService {

  public  baseUrl = "http://localhost:3000/users"

  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });
  
  constructor(private http:HttpClient) { }

  public getAudits(pageIndex:any,pageSize:any){
    let params= new HttpParams();
    return this.http.get(`${this.baseUrl}?_start=${pageIndex}&_limit=${pageSize}`,{headers :this.headers,params})
  }

}
