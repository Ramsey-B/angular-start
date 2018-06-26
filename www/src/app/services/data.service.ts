import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, CreateUser } from '../Models/User';
import { map } from 'rxjs/operators';
import { UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "//localhost:3000/";

  constructor(private http:Http, private _userService:UserService) {
    console.log("connected to server...");
   }

  registerUser(newUser:User){
    this.http.post(this.baseUrl + 'register', newUser)
      .pipe(map(res => res.json())).toPromise().then(user => {
        this._userService.storeUser(user);
      })
      .catch(err => {
        console.log(err, "error")
      })
  }

  loginUser(){

  }
}
