import { Injectable } from '@angular/core';
import {User} from '../Models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:User;

  constructor() { }

  storeUser(user:User) {
    this.currentUser = user;
    console.log(this.currentUser, "check")
  }
}
