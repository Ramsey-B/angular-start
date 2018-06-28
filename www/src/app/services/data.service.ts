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

  constructor(private http:Http, private _userService:UserService, private _router:Router) {
    console.log("connected to server...");
   }

  registerUser(newUser:User){
    this.http.post(this.baseUrl + 'register', newUser)
      .pipe(map(res => res.json())).subscribe(user => {
        this._userService.updateUser(user);
      })
  }

  loginUser(user){
    this.http.post(this.baseUrl + 'login', user)
      .pipe(map(res => res.json())).subscribe(u => {
        this._userService.updateUser(u.data)
      })
  }

  authenticate(){
    this.http.get(this.baseUrl + "authenticate")
      .pipe(map(res => res.json())).subscribe(u => {
        if(u.id) {
          this._userService.updateUser(u);
          this._router.navigate(['/']);
        }
      })
  }
}
