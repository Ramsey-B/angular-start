import { Component, OnInit, Input } from '@angular/core';
import { User, CreateUser } from '../../Models/User';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = {
    email: "",
    username: "",
    password: ""
  }
  currentUser: User

  constructor(private server:DataService, private _userService:UserService) { }

  ngOnInit() {
    this._userService.cast.subscribe(user => {
      this.currentUser = user;
      console.log(user)
    })
  }

  createUser() {
    this.server.registerUser(this.user);
  }

  loginUser() {
    this.server.loginUser(this.user);
  }
}
