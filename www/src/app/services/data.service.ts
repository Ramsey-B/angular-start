import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User, CreateUser } from '../Models/User';
import { map } from 'rxjs/operators';
import { UserService} from './user.service';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = "//localhost:3000/";
  HttpOptions = {
    withCredentials: true,
    timeout: 3000
  };

  constructor(private http:Http, private _userService:UserService, private _router:Router) {
    console.log("connected to server...");
   }

  registerUser(newUser:Object){
    this.http.post(this.baseUrl + 'register', newUser, this.HttpOptions)
      .pipe(map(res => res.json())).subscribe(user => {
        this._userService.updateUser(user);
      })
  }

  loginUser(user:Object){
    this.http.post(this.baseUrl + 'login', user, this.HttpOptions)
      .pipe(map(res => res.json())).subscribe(u => {
        this._userService.updateUser(u.data)
        console.log(u)
      })
  }

  authenticate(){
    this.http.get(this.baseUrl + "authenticate", this.HttpOptions)
      .pipe(map(res => res.json())).subscribe(u => {
        if(u != null) {
          this._userService.updateUser(u);
          this._router.navigate(['/']);
        }
      })
  }
}
