import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  uri : String;

  constructor(private http:HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000/filter';
  }

  get(){
    return this.http.get(this.ROOT_URL);
  }

  get2(id){
    return this.http.get(`${this.ROOT_URL}/${id}`)
  }

  post(payload:Object){
    return this.http.post(this.ROOT_URL, payload);
  }

  postQ(payload:Object){
    this.uri = "query";
    console.log(payload)
    return this.http.post(`${this.ROOT_URL}/${this.uri}`, payload);
  }

}
