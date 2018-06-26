import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, CreateUser } from '../Models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseUrl = "//localhost:3000/";

  constructor(public http:Http) {
    console.log("connected to server...");
   }

  registerUser(newUser:User){
    return this.http.post(this.baseUrl + 'register', newUser)
      .pipe(map(res => res.json()))
  }

  loginUser(){

  }
}
